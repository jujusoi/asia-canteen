import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <Header />
    </header>
    <main>
      <App />
    </main>
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>,
)
