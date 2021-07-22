# jQuery.fn.a11yName

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Published on NPM](https://img.shields.io/npm/v/@heppokofrontend/jquery-accessible-name.svg)](https://www.npmjs.com/package/@heppokofrontend/jquery-accessible-name) [![](https://data.jsdelivr.com/v1/package/npm/@heppokofrontend/jquery-accessible-name/badge)](https://www.jsdelivr.com/package/npm/@heppokofrontend/jquery-accessible-name) [![Maintainability](https://api.codeclimate.com/v1/badges/49aacee2d65e23198462/maintainability)](https://codeclimate.com/github/heppokofrontend/jquery-accessible-name/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/49aacee2d65e23198462/test_coverage)](https://codeclimate.com/github/heppokofrontend/jquery-accessible-name/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/npm/@heppokofrontend/jquery-accessible-name/badge.svg)](https://snyk.io/test/npm/@heppokofrontend/jquery-accessible-name)
 [![jquery-accessible-name](https://snyk.io/advisor/npm-package/@heppokofrontend/jquery-accessible-name/badge.svg)](https://snyk.io/advisor/npm-package/@heppokofrontend/jquery-accessible-name)


## Download

[Download is here](./lib)

## Install

### If use CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@heppokofrontend/jquery-accessible-name@0.1.2/dist/jquery.accessibleName.min.js"></script>
```

### If use npm:

```shell
npm i @heppokofrontend/jquery-accessible-name
```

## Suppot

- The `aria-labelledby` attribute
- The `aria-label` attribute
- The `label` element
- The `title` attribute

## Usage

```html
<labal for="name">Your name</label>
<input id="name" />
```

```js
$(function() {
  const a11yName = $('input').a11yName(); // > Your name
});
```
