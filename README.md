# react-use-set-state

> Batched updates for React function components, replicating the class components &quot;setState&quot; behaviour

[![NPM](https://img.shields.io/npm/v/react-use-set-state.svg)](https://www.npmjs.com/package/react-use-set-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-set-state
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'react-use-set-state'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [thevahidal](https://github.com/thevahidal)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
