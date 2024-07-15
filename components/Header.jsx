'use client'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import MobileNavigaton from './MobileNavigaton'
import Nav from './Nav'
import ThemeToggler from './ThemeToggler'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    });
    return () => window.removeEventListener('scroll', scrollYPos);
  })
  return (
    <header className={`${ header ? 
    'py-2 bg-tertiary shadow-lg dark:bg-accent' : 
    'py-3 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Logo />
          <div className='flex items-center gap-x-6'>
            {/* Navbar Section */}
            <Nav 
            containerStyles='hidden xl:flex gap-x-8 items-center'
            linkStyles='relative hover:text-primary transition-all'
            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' 
            />
            {/* Theme Toggler */}
            <ThemeToggler />
            {/* Mobile Navbar Section */}
            <div className='xl:hidden'>
              <MobileNavigaton />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
