import styled from 'styled-components'
import {
  Navbar as NavBarComponent,
  NavbarToggler as NavbarTogglerComponent,
  Nav as NavComponent,
  NavItem as NavItemComponent,
} from 'reactstrap'
import theme, { rem } from '~/styles/theme'

export const Navbar = styled(NavBarComponent)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`

export const NavbarToggler = styled(NavbarTogglerComponent)`
  display: none;
  position: relative;
  z-index: 120;
  width: 50px;
  height: 50px;
  padding: 0 30px;
  cursor: pointer;
  font-size: 0;
  border: none;
  background-color: transparent;
  margin-left: auto;
  outline: none;

  @media (max-width: ${theme.mediaSizes.smMaxWidth}px) {
    display: block;
    right: ${rem(7)};
    top: ${rem(7)};
  }

  span {
    position: absolute;
    display: block;
    top: 23px;
    left: 13px;
    background-color: ${theme.colors.darkenPurple};
    width: 32px;
    height: 3px;
    border-radius: 1px;
    transition: background-color 0.2s;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 32px;
      height: 3px;
      border-radius: 1px;
      background-color: ${theme.colors.darkenPurple};
      transition: background-color 0.2s, top 0.2s, transform 0.2s;
      cursor: pointer;
    }

    &::before {
      top: -9px;
    }

    &::after {
      top: 9px;
    }
  }

  &-open {
    span {
      background-color: ${theme.colors.white};

      &::before,
      &::after {
        top: 0;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }
`
export const Nav = styled(NavComponent)`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  margin-left: auto;
  display: flex;
  flex-direction: row;

  @media (max-width: ${theme.mediaSizes.smMaxWidth}) {
    display: none;
    position: absolute;
    z-index: 110;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
    background-color: ${theme.colors.white};
    border-radius: 4px;
    flex-direction: column;
    padding: ${rem(25)};

    &-open {
      display: block;
    }
  }
`

export const NavItem = styled(NavItemComponent)`
  position: relative;
  margin-left: ${rem(25)};
  margin-right: ${rem(25)};

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${theme.mediaSizes.mdMaxWidth}) {
    margin-left: ${rem(13)};
    margin-right: ${rem(13)};
  }

  @media screen and (max-width: ${theme.mediaSizes.smMaxWidth}) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: ${rem(7)};
  }

  &-dropdown-toggle {
    @media screen and (max-width: ${theme.mediaSizes.smMaxWidth}) {
      margin-bottom: 0;
    }

    @media screen and (min-width: ${theme.mediaSizes.smMinWidth}) {
      overflow: hidden;

      &.hover {
        overflow: visible;
        .ctf-nav-sub-list-wrapper {
          height: auto;
          width: auto;
          overflow: visible;
          clip: initial;
          z-index: 10;
          padding-top: ${rem(73)};
          padding-left: ${rem(51)};
          padding-right: ${rem(66)};
          padding-bottom: ${rem(25)};
          top: ${rem(-27)};
          left: ${rem(-51)};
        }

        .ctf-nav-link {
          position: relative;
          z-index: 20;
          text-decoration: none;
        }
      }
    }
  }
`

export const LinkTag = styled.a`
  font-weight: 400;
  color: ${theme.colors.white};
  font-size: ${rem(16)};
  line-height: ${rem(30)};

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${theme.colors.white};
  }

  &:active {
    color: ${theme.colors.lightPurple};
  }

  @media screen and (max-width: ${theme.mediaSizes.smMaxWidth}) {
    display: inline-block;
    font-size: ${rem(21)};
    padding: ${rem(7)} 0;
    color: ${theme.colors.purple};
  }
`
