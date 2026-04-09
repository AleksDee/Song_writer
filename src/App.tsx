import Header from './components/Header'
import Footer from './components/Footer'
import SongGenerator from './components/SongGenerator'

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <SongGenerator />
      </main>
      <Footer />
    </div>
  )
}

export default App
