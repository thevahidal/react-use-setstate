import React from 'react'
import useSetState from 'react-use-setstate'

const App = () => {
  const [state, setState] = useSetState({
    searchQuery: '',
    data: [],
    loading: true,

    counter: 0,
  })

  React.useEffect(() => {
    setState({loading: true})
    fetch(`https://jsonplaceholder.typicode.com/users/1/todos?q=${state.searchQuery}`)
      .then(response => response.json())
      .then(json => {
        setState({data: json, loading: false})
      })
  }, [state.searchQuery])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(prevState => ({counter: prevState.counter + 1}))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (<>
    <div>
      <h1>Normal Usage</h1>
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
    <hr />
    <div>
      <h1>Usage with Previous State</h1>
      <p>Counter</p>
      <p>{state.counter}</p>
    </div>
  </>)
}
export default App