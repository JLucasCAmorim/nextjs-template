import styled from 'styled-components'
import theme, { rem } from '~/styles/theme'

export const Header = styled.header`
  padding-top: ${rem(62)};
  padding-bottom: ${rem(200)};
  background-color: #22185b;
  background-image: linear-gradient(to bottom, #000, #132548 80%, #081123);
  color: ${theme.colors.white};
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    background: url(/images/corte.jpg) no-repeat center center;
    background-size: cover;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.2;
    top: 0;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 30px 10px rgba(${theme.colors.blackDarkBlue2}, 0.1);
    z-index: 2;
  }
`
export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 2;
`

export const HeaderNav = styled.div`
  margin-bottom: ${rem(125)};

  @media (max-width: ${theme.mediaSizes.mdMaxWidth}) {
    margin-bottom: ${rem(100)};
  }

  @media (max-width: ${theme.mediaSizes.smMaxWidth}) {
    margin-bottom: ${rem(75)};
  }
`
export const HeaderTitle = styled.h1`
  font-size: ${rem(60)};
  font-weight: 900;
  color: ${theme.colors.white};
  margin-bottom: ${rem(40)};

  @media (max-width: ${theme.mediaSizes.mdMaxWidth}) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
  }

  @media (max-width: ${theme.mediaSizes.smMaxWidth}) {
    font-size: ${rem(55)};
  }

  @media (max-width: ${theme.mediaSizes.xsMaxWidth}) {
    width: 100%;
  }

  &-black {
    color: ${theme.colors.darkenPurple};
  }

  &-inner {
    margin-bottom: ${rem(60)};
  }
`

export const HeaderTitleNote = styled.div`
  font-size: ${rem(18)};
  line-height: ${rem(30)};
  margin-bottom: ${rem(40)};

  @media (max-width: ${theme.mediaSizes.mdMaxWidth}) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
  }

  @media (max-width: ${theme.mediaSizes.xsMaxWidth}) {
    width: 100%;
  }

  p {
    margin-bottom: 0;
  }

  b {
    font-weight: 700;
  }
`

export const HeaderPromo = styled.p`
  color: ${theme.colors.purpleGray};
  font-size: ${rem(18)};
  line-height: ${rem(30)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem(35)};

  @media (max-width: ${theme.mediaSizes.mdMaxWidth}) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
  }

  @media (max-width: ${theme.mediaSizes.xsMaxWidth}) {
    width: 100%;
  }

  &-inner {
    margin-bottom: ${rem(110)};
  }
`

export const HeaderImage = styled.div`
  position: relative;

  img {
    margin: -110px 0 -220px -250px;
    max-width: none;
  }
`
