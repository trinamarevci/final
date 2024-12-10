import React from 'react'
import './index.scss'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Finexo. All Rights Reserved.</p>
    </footer>
    </div>
  )
}

export default Footer