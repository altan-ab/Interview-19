import React, { useEffect, useState } from 'react'

const BASE_IMG_URL = 'https://picsum.photos/seed/sameimage/300'

function App() {
  return <CustomBlur />
}

const CustomBlur = () => {
  const [blur, setBlur] = useState(1) // Başlangıç bulanıklığı: 1

  // Kaydırıcı hareket ettikçe blur seviyesini güncelleyen fonksiyon
  const handleBlurChange = (event) => {
    setBlur(event.target.value)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src={`${BASE_IMG_URL}?blur=${blur}`}
        alt="Random forest"
        className="rounded-md shadow-lg"
      />
      <p className="mt-4">Blur için kaydırın</p>
      <input
        type="range"
        min="1"
        max="10"
        value={blur}
        onChange={handleBlurChange}
        className="mt-2"
      />
    </div>
  )
}

export default App
