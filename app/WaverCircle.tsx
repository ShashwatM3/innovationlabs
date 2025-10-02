import React from 'react'

function WaverCircle() {
  return (
    <div className="relative w-4 h-4">
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-pulse-slow"></div>
    </div>
  )
}

export default WaverCircle