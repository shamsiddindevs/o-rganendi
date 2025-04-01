import React from 'react'
import App from './index'
import GlobalContext from './context/GlobalContext'

const Main = () => {
  return (
    <GlobalContext>
      <App/>
    </GlobalContext>
  )
}

export default Main