import './App.css'
import AboutWidget from './components/AboutWidget'
import GalleryWidget from './components/GalleryWidget'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1F1F] via-[#2D2D2D] to-[#1F1F1F]">
      <div className="h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Half - Empty but responsive for laptop (≥768px) */}
          <div className="hidden md:block"></div>
          
          {/* Right Half - Widgets */}
          <div className="flex flex-col gap-6 w-full">
            <AboutWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
