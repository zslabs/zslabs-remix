import * as React from 'react'

import { getMDXComponent } from 'mdx-bundler/client'

interface MDXContentProps {
  content: string
}

const components = {}

function MDXContent({ content }: MDXContentProps) {
  const Component = React.useMemo(() => getMDXComponent(content), [content])

  return <Component components={components} />
}

export default MDXContent
