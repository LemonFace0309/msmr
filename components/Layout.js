import Meta from './Meta'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />  
      <main className="">{children}</main>
    </>
  )
}

export default Layout
