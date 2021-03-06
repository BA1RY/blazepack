<h1 align="center">Blazepack ⚡</h1>

<p align="center">
  Blazing fast dev server powered by <a href="https://www.npmjs.com/package/smooshpack">sandpack</a>
</p>

<p align="center">
  <a href="https://discord.gg/ZP6p5dVwnn">
  <img src="https://img.shields.io/discord/591914197219016707.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
</p>

## Motivation

I always wanted the super fast feedback that codesandbox provides in my local environment, so I have built a tiny wrapper around the codesandbox bundler sandpack and it runs locally 🎉

## Why Blazepack?

* It is blazing fast ⚡
* Super tiny (24kb) 👌
* Run projects without npm install 💃
* React fast refresh ❤️
* Supports React, Vue 2, Vue 3, Angular, Preact, Svelte 🔨
* Save disk space 💾

## Install

Install it globally

```
npm i -g blazepack
```


## Usage

### Create project from Template

Create your first **create react app**

```
blazepack create my-cra --template=react
```

The available template options are **react, angular, vue2, vue3, preact and svelte**. You can use the below command to create the app and also start the dev server immediately

```
blazepack start my-angular-app --template=angular
```

### Start project

To use it in your existing **create react app**, **angular**, **preact**, **svelte**, **vue cli app** just run

```
blazepack
```

It will start the dev server at port **3000** and open it in browser, you can change the default port by using the **port** option

```
blazepack --port 3001
```

You can also run it using the **npx** command and not install it globally

```
npx blazepack
```

### Install dependency

You can install a new package pretty fast using the below command. It does not create **node_modules** so you are gonna save a lot of space 😉

```
blazepack install redux
```

### Check version

To know the version of blazepack you are running use the **--version** option

```
blazepack --version
```

### Clone Sandbox

You can clone an existing codesandox, by just running the below commands: 

**Clone from URL**

```
blazepack clone https://codesandbox.io/s/use-undo-redo-yrts1
```

**Cloning from embed url**

```
blazepack clone https://codesandbox.io/embed/use-undo-redo-yrts1
```

**Clone from Sandbox Id**

```
blazepack clone use-undo-redo-yrts1
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://ameerthehacker.me/"><img src="https://avatars.githubusercontent.com/u/15448192?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ameer Jhan</b></sub></a><br /><a href="https://github.com/ameerthehacker/blazepack/commits?author=ameerthehacker" title="Code">💻</a> <a href="https://github.com/ameerthehacker/blazepack/commits?author=ameerthehacker" title="Documentation">📖</a> <a href="https://github.com/ameerthehacker/blazepack/issues?q=author%3Aameerthehacker" title="Bug reports">🐛</a> <a href="#ideas-ameerthehacker" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://bit.ly/jyash97"><img src="https://avatars.githubusercontent.com/u/22376783?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yash Joshi</b></sub></a><br /><a href="https://github.com/ameerthehacker/blazepack/commits?author=jyash97" title="Code">💻</a> <a href="https://github.com/ameerthehacker/blazepack/commits?author=jyash97" title="Documentation">📖</a> <a href="https://github.com/ameerthehacker/blazepack/issues?q=author%3Ajyash97" title="Bug reports">🐛</a> <a href="#ideas-jyash97" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/philipjmurphy"><img src="https://avatars.githubusercontent.com/u/1055915?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Philip Murphy</b></sub></a><br /><a href="https://github.com/ameerthehacker/blazepack/commits?author=philipjmurphy" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sahilrajput03"><img src="https://avatars.githubusercontent.com/u/31458531?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sahil Rajput</b></sub></a><br /><a href="https://github.com/ameerthehacker/blazepack/commits?author=sahilrajput03" title="Documentation">📖</a> <a href="#ideas-sahilrajput03" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

Show your support by ⭐ the repo

## License

GPL © [Ameer Jhan](mailto:ameerjhanprof@gmail.com)
