import { useState } from 'react'
import './App.css'
import Layout from "../components/Layout"
import { Provider } from 'react-redux'
import store from '../store/index'

function App() {

  return (
    <Provider store={store}>

      <Layout />
    </Provider>
  )
}

export default App
