const { red, blue, green } = require('chalk');
const https = require("https");
const findPackageJSON = require("find-package-json");
const detectIndent = require("detect-indent");
const fs = require("fs");
const path = require("path");
const Stream = require('stream').Transform;

function logError(message) {
  console.log(red(message));
}

function logSuccess(message) {
  console.log(green(message));
}

function logInfo(message) {
  console.log(blue(message));
}

function getExtension(filename) {
  const fileParts = filename.split('.');

  return fileParts[fileParts.length - 1];
}

function isImage(filename) {
  const ext = getExtension(filename);
  const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp'];

  return imageExtensions.includes(ext)
}

function getSandboxFiles(id) {
  return new Promise((resolve, reject) => {
    https
      .get(`https://codesandbox.io/api/v1/sandboxes/${id}`, (response) => {
        if (response.statusCode == 200) {
          let data = "";
          response.on("data", (chunk) => {
            data += chunk;
          });

          response.on("end", () => {
            resolve(JSON.parse(data));
          });
        } else {
          reject(`failed to download sandbox for ${id}`);
        }
      })
      .on("error", (e) => {
        reject(e);
      });
  });
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode == 200) {
          let data = new Stream();
          response.on("data", (chunk) => {
            data.push(chunk);
          });

          response.on("end", () => {
            resolve(data.read());
          });
        } else {
          reject(`failed to download image ${url}`);
        }
      })
      .on("error", (e) => {
        reject(e);
      });
  });
}

async function createSandboxFiles(sandboxInfo, projectName) {
  /**
   * Object of all directories
   *
   * For eg:
   * {
   *    "a": {
   *      directory_shortid: "b", // components directory resides inside the directory with id `b`
   *      title: "components" // directory name
   *    },
   *    "b": {
   *      directory_shortid: null, // does not have parent directory
   *      title: "src"
   *    },
   * }
   *
   */
  const directories = sandboxInfo.directories.reduce(
    (agg, directory) => ({
      ...agg,
      [directory.shortid]: {
        directory_shortid: directory.directory_shortid,
        title: directory.title,
      },
    }),
    {}
  );

  /**
   * Get directory name recursively
   */
  const getFolderName = (id, currentDir = "") => {
    if (!id || !directories[id]) {
      return currentDir;
    }

    if (directories[id].directory_shortid) {
      return getFolderName(
        directories[id].directory_shortid,
        `${directories[id].title}/${currentDir}`
      );
    }

    return `${directories[id].title}/${currentDir}`;
  };

  /**
   * Directories object with nested path
   *
   * {
   *    "a": "src/components/",
   *    "b": "src/",
   * }
   *
   */
  const directoriesWithPath = Object.keys(directories).reduce((agg, dir) => {
    return { ...agg, [dir]: getFolderName(dir) };
  }, {});

  /**
   * Project path with the sandbox name
   */
  const projectPath = path.join(
    process.cwd(),
    projectName || sandboxInfo.title || sandboxInfo.id
  );

  /**
   * Create all directories, recursive: true; forces the directory creation if not present
   */
  Object.keys(directoriesWithPath).forEach(async (dir) => {
    await fs.mkdirSync(`${projectPath}/${directoriesWithPath[dir]}`, {
      recursive: true,
    });
  });

  /**
   * Create all files, with the code.
   */
  sandboxInfo.modules.forEach(async (module) => {
    // if it is a image we need to download it from codesandbox locally
    if (isImage(module.title)) {
      module.code = await downloadImage(module.code);
    }

    if (module.directory_shortid) {
      await fs.writeFileSync(
        `${projectPath}/${directoriesWithPath[module.directory_shortid]}${
          module.title
        }`,
        module.code
      );
    } else {
      await fs.writeFileSync(`${projectPath}/${module.title}`, module.code);
    }
  });
}

const getPackageJSON = () => {
   const iterator = findPackageJSON();
    const nextPackageJSON = iterator.next();

    if (nextPackageJSON && nextPackageJSON.filename) {
      const packageJSONContent = fs.readFileSync(
        nextPackageJSON.filename,
        "utf-8"
      );

      const packageJSON = JSON.parse(packageJSONContent);

      return {
        file: nextPackageJSON.filename,
        indent: detectIndent(packageJSONContent).indent || 2,
        json: packageJSON,
      };
    }

    return null;
}

module.exports = {
  logError,
  logInfo,
  logSuccess,
  getSandboxFiles,
  createSandboxFiles,
  isImage,
  getExtension,
  getPackageJSON,
};
