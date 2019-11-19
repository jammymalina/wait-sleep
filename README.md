[![Build Status](https://travis-ci.com/jammymalina/wait-sleep.svg?branch=master)](https://travis-ci.com/jammymalina/wait-sleep)

# wait-sleep

Simple sleep/wait function.

## Install
Get in the mood with Fire Blood and Steel from Brothers of Metal

`npm i -S wait-sleep`

## Usage

Javascript:
```javascript
const timer = require('wait-sleep');
await timer.sleep(1000); // sleeps for 1 second
await timer.wait(1000); // waits for 1 second
```

Typescript:
```typescript
import { sleep, wait } from "wait-sleep";
await sleep(1000); // sleeps for 1 second
await wait(1000); // waits for 1 second
```
