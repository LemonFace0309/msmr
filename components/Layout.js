import Meta from './Meta'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <main className="">{children}</main>
    </>
  )
}

export default Layout
