"use client";

import React, { useState } from 'react'
import Mobilenav from './mobilenav'
import Nav from './nav'

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const handleNavShow = () => setShowNav(true);
    const handleCloseNav = () => setShowNav(false);
  return (
    <div>
        <Nav openNav={handleNavShow} />
        <Mobilenav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  )
}

export default ResponsiveNav