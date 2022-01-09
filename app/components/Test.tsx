import * as React from 'react'

interface TestInterface {
  example?: boolean
}

function Test({ example }: TestInterface) {
  const [count, setCount] = React.useState(0)

  return <div>Test {count}</div>
}

export default Test
