# react-use-setstate

> Batched updates for React function components, replicating the [good old] class components &quot;setState&quot;'s behavior.

[![NPM](https://img.shields.io/npm/v/react-use-setstate.svg)](https://www.npmjs.com/package/react-use-setstate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-setstate

or [better]

yarn add react-use-setstate
```

## Normal Usage

```jsx
import React from 'react'

import useSetState from 'react-use-setstate'

const SomeComponent = () => {
  const [state, setState] = useSetState({
    searchQuery: '',
    data: [],
    loading: true,
  })

  React.useEffect(() => {
    setState({loading: true})
    fetch(`https://jsonplaceholder.typicode.com/users/1/todos?q=${state.searchQuery}`)
      .then(response => response.json())
      .then(json => {
        setState({data: json, loading: false})
      })
  }, [state.searchQuery])

  return (
    <div>
      <input 
        onChange={(e) => {
          setState({searchQuery: e.target.value})
        }}
        value={state.searchQuery}
        placeholder={'Type to search...'}
      />
      <ul>
        {state.loading ? 'Loading...': state.data.map(d => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </div>
  )
}
```


## Usage With Previous State

```jsx
import React from 'react'

import useSetState from 'react-use-setstate'

const SomeComponent = () => {
  const [state, setState] = useSetState({
    counter: 0,
  })

  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(prevState => ({counter: prevState.counter + 1}))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p>Counter</p>
      <p>{state.counter}</p>
    </div>
  )
}
```

## License

MIT © [thevahidal](https://github.com/thevahidal)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
