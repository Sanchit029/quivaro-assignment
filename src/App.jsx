import './App.css'
import AboutWidget from './components/AboutWidget'
import GalleryWidget from './components/GalleryWidget'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1F1F] via-[#2D2D2D] to-[#1F1F1F] flex">
      {/* Left Side Icon Panel - Only visible on larger screens */}
      <div className="hidden md:flex flex-col items-center py-8 px-4 gap-6">
        {/* Icon Buttons */}
        <div className="flex flex-col gap-6">
          {/* Home/Dashboard Icon */}
          <button className="w-12 h-12 rounded-xl bg-[#2D2D2D] hover:bg-[#3D3D3D] flex items-center justify-center transition-colors">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          
          {/* User/Profile Icon */}
          <button className="w-12 h-12 rounded-xl bg-[#2D2D2D] hover:bg-[#3D3D3D] flex items-center justify-center transition-colors">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 h-screen flex items-center justify-center px-4">
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
