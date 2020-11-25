<a href="https://play.google.com/store/apps/details?id=com.jaryapp.cmi">
  <img width="1012" alt="image" src="https://user-images.githubusercontent.com/38103082/100120789-b1b31e00-2ebb-11eb-93d7-6dc393d33949.png">
</a>

<p align="center">
  <img src="https://img.shields.io/github/license/payw-org/eodiro-server" />
  </a>
</p>

<p align="center">An open source utility service for CBNU students</p>

## Development

### Using Dev API Locally

You must clone and run [`Alrimi Server`](https://github.com/CBNU-CMI/cbnu-alrimi-server) on your local machine in dev mode.

```zsh
npm run dev
```

### Using Production API

Also you can develop only the client application without cloning server repository [`Alrimi Server`](https://github.com/CBNU-CMI/cbnu-alrimi-server).

```zsh
npm run start
```

### 🔌 Components

**`Layout`**
The frame of the page with the menu at the bottom.

**`Dialog`**
The frame of components overlaid on the screen.

**`Modal`**
A framework for checking and canceling specific information.

**`Calendar`**
Components for checking the calendar by year and month.

**`Selector`**
Components for selecting dormitories, dates, announcements, etc.

**`Infinity Scroll`**
Components that can automatically load the following data when scrolling reaches the end of the page.

### String Utils

**`camelToKebab(str)`**

Transform a `camelCase` string to `kebab-case`.

## [License](https://github.com/CBNU-CMI/cbnu-alrimi/blob/master/LICENSE)

MIT License

Copyright (c) CBNU-CMI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
