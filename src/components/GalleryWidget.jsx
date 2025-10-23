import { useState, useRef } from 'react';

const GalleryWidget = () => {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1618004652321-13a63e576b80?w=400&h=400&fit=crop'
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef(null);

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 3 ? prev + 1 : prev));
  };

  return (
    <div className="bg-[#363C43] rounded-[18px] shadow-[5px_5px_40px_rgba(0,0,0,0.4)] p-5 w-full">
      {/* Help Icon */}
      <div className="flex justify-start items-start mb-5">
        <div className="w-6 h-6 rounded-full bg-[#171717] flex items-center justify-center cursor-pointer hover:bg-[#252525] transition-colors">
          <svg className="w-4 h-4 text-[#4A4E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      {/* Gallery Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="bg-[#171717] rounded-[20px] px-6 py-3.5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]">
          <h2 className="text-white text-[18px] font-semibold">Gallery</h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAddImage}
            className="bg-white/[0.02] hover:bg-white/[0.08] text-white px-5 py-3 rounded-full text-[13px] font-semibold transition-all shadow-[4px_5px_30px_5px_rgba(16,18,19,0.5),0_0_5px_rgba(255,255,255,0.05)_inset] flex items-center gap-2 uppercase tracking-wide"
          >
            <span className="text-lg font-bold">+</span>
            Add Image
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-[4px_5px_30px_5px_rgba(16,18,19,0.5),0_0_5px_rgba(255,255,255,0.05)_inset] ${
              currentIndex === 0
                ? 'bg-gradient-to-b from-[#303439] to-[#161718] text-[#4A4E54] cursor-not-allowed'
                : 'bg-gradient-to-b from-[#303439] to-[#161718] hover:from-[#3a3e43] hover:to-[#202328] text-[#6F787C]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= images.length - 3}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-[4px_5px_30px_5px_rgba(16,18,19,0.5),0_0_5px_rgba(255,255,255,0.05)_inset] ${
              currentIndex >= images.length - 3
                ? 'bg-gradient-to-b from-[#303439] to-[#161718] text-[#4A4E54] cursor-not-allowed'
                : 'bg-gradient-to-b from-[#303439] to-[#161718] hover:from-[#3a3e43] hover:to-[#202328] text-[#6F787C]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[4px] bg-gradient-to-r from-transparent via-[#5B5F66]/30 to-transparent mb-5 rounded-full shadow-sm"></div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-3 overflow-hidden">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div
            key={currentIndex + index}
            className="aspect-square rounded-[24px] overflow-hidden hover:scale-[1.02] hover:rotate-1 transition-all duration-300 cursor-pointer"
          >
            <img
              src={image}
              alt={`Gallery image ${currentIndex + index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
