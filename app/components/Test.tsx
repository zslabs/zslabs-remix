import * as React from 'react'

function Test() {
  const [count, setCount] = React.useState(0)

  const handleOnClick = React.useCallback(() => setCount(count + 1), [count])

  return (
    <div>
      Test {count}
      <button type="button" onClick={handleOnClick}>
        Set
      </button>
    </div>
  )
}

export default Test
