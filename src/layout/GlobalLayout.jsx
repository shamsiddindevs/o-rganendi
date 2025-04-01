import React from 'react'
import { Outlet } from 'react-router-dom'

const GlobalLayout = () => {
  return (
    <>
    <nav>Navbar</nav>
    <main>
        <Outlet/>
    </main>

    <footer>Footer</footer>
    </>
  )
}

export default GlobalLayout