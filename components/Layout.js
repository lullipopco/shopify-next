import React from 'react'
import Nav from './Nav'

export default function layout() {
  return (
    <div>
        <div className="flex flex-col justify-between min-h-screen">
            <Nav />
            <main>
                {children}
            </main>
            <footer>
                footer
            </footer>    
        </div>
    </div>
  )
}
