# gulp-ignite-task

[![Build Status](https://travis-ci.org/jscarmona/gulp-ignite-task.svg?branch=master)](https://travis-ci.org/jscarmona/gulp-ignite-task)
[![npm](https://img.shields.io/npm/dt/gulp-ignite-task.svg?maxAge=2592000)]()
[![GitHub tag](https://img.shields.io/github/release/jscarmona/gulp-ignite-task.svg?maxAge=2592000)]()

## install

**NPM**

```bash
$ npm install --save-dev gulp-ignite gulp-ignite-task
```

## example

```js
'use strict';

import ignite from 'gulp-ignite';
import task from 'gulp-ignite-task';

const tasks = [task];
const options = {
  task: {},
};

ignite.start(tasks, options);

```

## usage

```bash
$ gulp task --watch --min --sourcemap
```

### available runtime overrides

* --watch
* --min
* --sourcemap


## options

### deps

**Type:** `Array`  
**Default:** `[]`

Any gulp tasks that task would be dependent of.

## license

The MIT License (MIT)

Copyright (c) 2016 Javier Carmona

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
