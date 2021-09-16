# React useSetState | RUSS

> Batched updates for React function components, replicating the [good old] class components &quot;setState&quot;'s behavior.

[![NPM](https://img.shields.io/npm/v/react-use-setstate.svg)](https://www.npmjs.com/package/react-use-setstate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## History
This library came to the world as a  [StackOverflow answer](https://stackoverflow.com/questions/53574614/multiple-calls-to-state-updater-from-usestate-in-component-causes-multiple-re-re/56533146#56533146) that I made a while back. The question is "How to prevent multiple re-renders when you do multiple calls to state updater from useState".

There's also a [discussion](https://github.com/facebook/react/issues/14259#issuecomment-439702367) around this matter in React Github issues.

Due to the interest that people showed in the answer, I decided to make it into this library.

## Install

```bash
npm install --save react-use-setstate

or [better]

yarn add react-use-setstate
```

## Usage

```jsx
import React from 'react'
import useSetState from 'react-use-setstate'

const SomeComponent = () => {
  const [state, setState] = useSetState({
    data: [],
    loading: true,
  })

  const fetchData = () => {
    setState(prevState => ({
      data: [1, 2, 3],
      loading: false
    }))
  }
}
```


## Example

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


## Example With Previous State

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
