import Link from 'next/link'
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'

interface INavLink {
  title: string
  href: string
  custom?: string
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const NavLink = ({
    title,
    href,
    custom = 'nav-link port-navbar-link',
  }: INavLink) => {
    return (
      <Link href={href}>
        <a className={custom}>{title}</a>
      </Link>
    )
  }

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="trnaparent"
        dark
        expand="md"
      >
        <NavLink
          href="/"
          title="John Amorim"
          custom="navbar-brand navbar-brand-custom"
        />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <NavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <NavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <NavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <NavLink href="/cv" title="CV" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
