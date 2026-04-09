import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <p>Welcome to Writer — your rap song generator.</p>
      </main>
      <Footer />
    </div>
  )
}

export default App
