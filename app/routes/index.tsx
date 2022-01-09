import ctl from '@netlify/classnames-template-literals'
import { Link } from 'remix'

function Index() {
  return (
    <>
      <div
        className={ctl(`
          font-bold
        `)}
      >
        Something
      </div>
      Stuff <code>Coding stuff</code>
      <Link to="about">About</Link>
    </>
  )
}

export default Index
