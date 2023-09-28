# Nuxt :: Loaded 

[![ci](https://github.com/vinayakkulkarni/get-me-nuxt/actions/workflows/ci.yml/badge.svg)](https://github.com/vinayakkulkarni/get-me-nuxt/actions/workflows/ci.yml)

## About
Fully loaded template for getting quickly started with Nuxt (batteries included).

## Stacktrace 
Development stack:
- [Nuxt](https://nuxt.com/)
- [UnoCSS](https://unocss.dev/)

CI/CD stack:
- [GitHub Actions](./.github/workflows/ci.yml)

Release stack:
- [TBD](---)

## Environment Setup
### Development 
```sh
$ git clone git@github.com:vinayakkulkarni/get-me-nuxt.git
$ cd get-me-nuxt
$ npm install
$ npm run dev
```

### Production 
Pre-release steps:
```sh
$ git clone git@github.com:vinayakkulkarni/get-me-nuxt.git
$ cd get-me-nuxt
$ npm install
$ npm run release # this will generate a new PR & bump up the pkg version
```

## Contributing

1. Create your feature branch from `test` (`git checkout -b feat/new-feature`)
2. Commit your changes (`git commit -Sam 'feat: add feature'`)
3. Push to the branch (`git push origin feat/new-feature`)
4. Create a new [Pull Request](https://github.com/vinayakkulkarni/get-me-nuxt/compare)

_Note_:

1. Please contribute using [GitHub Flow](https://web.archive.org/web/20191104103724/https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_
