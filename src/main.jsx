// coração do react
import React from 'react'
// reactdom é a integração do cor  do react com a DOM
// DOM é a representação do HTML através do javascript
// quando importa o ReactDom estamos integrando o react para funcionar no ambiente web
import ReactDOM from 'react-dom/client'
  import {App} from './App.jsx'

// elemento raiz da página é o root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
