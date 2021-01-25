import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Collapse } from 'reactstrap'
import { Navbar, NavbarToggler, Nav, NavItem, LinkTag } from './styles'

interface INavLink {
  title: string
  href: string
  custom?: string
}

const NavBar: React.FC = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const NavLink = ({ title, href, custom = '' }: INavLink) => {
    const activeClass = router.pathname === href ? 'active' : ''
    return (
      <Link href={href}>
        <LinkTag className={`${custom} ${activeClass}`}>{title}</LinkTag>
      </Link>
    )
  }

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <div>
      <Navbar
        color="transparent"
        className={`${scrolled ? 'scrolled' : ''}`}
        light
        expand="md"
      >
        <NavLink
          href="/"
          title="John Amorim"
          custom="navbar-brand navbar-brand-custom"
        />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/" title="Home" />
            </NavItem>
            <NavItem>
              <NavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem>
              <NavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem>
              <NavLink href="/login" title="Entrar" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
