type LayoutProps = {
  children: React.ReactNode
}


function Layout({ children }: LayoutProps): JSX.Element {
  return <section>{children}</section>
}

export default Layout;
