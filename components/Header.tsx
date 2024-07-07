import React from 'react'

const Header = () => {
  return (
    <>
      <header className="fixed top-0 border w-full text-white min-h-14 flex justify-between items-center">
        <div className="text-slate-800 text-center">
          left
        </div>
        <div className="text-slate-800 flex-1 text-center">
          Center
        </div>
        <div className="text-slate-800  text-center">
          right
        </div>
      </header>
      <div className="pt-14"></div>
    </>
  )
}

export default Header