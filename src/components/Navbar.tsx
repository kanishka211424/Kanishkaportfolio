import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MenuIcon, XIcon, ActivityIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About Me',
    href: '/#about'
  },
  {
    name: 'Education',
    href: '/#skills'
  },
  {
    name: 'Network',
    href: '/#projects'
  },
  {
    name: 'Work Experience',
    href: '/#experience'
  },
  {
    name: 'CV',
    href: '/#cv'
  },
  {
    name: 'Contact',
    href: '/contact'
  }];

  const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    if (href.startsWith('/#') && isHomePage) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
      setMobileMenuOpen(false);
    }
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-surface-light py-3' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-surface-light border border-accent-blue/50 flex items-center justify-center group-hover:glow-blue transition-all">
            <ActivityIcon className="w-5 h-5 text-accent-blue" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-none tracking-tight text-text-primary">
              KANISHKA
            </span>
            <span className="text-[10px] text-accent-teal font-mono tracking-widest uppercase">
            TMLE
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-sm font-mono text-text-secondary hover:text-accent-blue transition-colors">
            
              <span className="text-surface-light mr-1">{''}</span>
              {link.name}
            </Link>
          )}
          <Link
            to="/contact"
            className="px-4 py-2 text-sm font-mono text-white bg-accent-blue/10 border border-accent-blue rounded hover:bg-accent-blue/20 hover:glow-blue transition-all">
            
            INITIATE_CONTACT
          </Link>
        </nav>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          
          {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="absolute top-full left-0 right-0 bg-surface border-b border-surface-light p-6 flex flex-col gap-4 shadow-2xl md:hidden">
        
          {navLinks.map((link) =>
        <Link
          key={link.name}
          to={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className="text-lg font-display text-text-primary border-b border-surface-light pb-2">
          
              {link.name}
            </Link>
        )}
        </motion.div>
      }

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-teal origin-left"
        style={{
          scaleX
        }} />
      
    </header>);

}