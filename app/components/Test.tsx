import * as React from 'react'

interface TestInterface {
  example?: boolean
}

function Test({ example }: TestInterface) {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      Test {count} {console.log({ example })}
      <button type="button" onClick={() => setCount(count + 1)}>
        Set
      </button>
    </div>
  )
}

export default Test
