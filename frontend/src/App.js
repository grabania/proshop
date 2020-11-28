import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <h1>Welcome to ProShop</h1>
      </main>
      <Footer />
    </Router>
  )
}

export default App
