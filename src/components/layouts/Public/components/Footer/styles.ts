import styled from 'styled-components'
import theme, { rem } from '~/styles/theme'

export const FooterWrapper = styled.div`
  padding-top: ${rem(65)};
  padding-bottom: ${rem(40)};
  color: ${theme.colors.black};
  font-weight: 400;
  background-color: ${theme.colors.lightenGray5};
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: ${theme.mediaSizes.smMaxWidth}) {
    flex-direction: column;
  }
`
export const FooterCopyText = styled.span`
  display: block;
  margin-bottom: ${rem(17)};

  br {
    display: none;
  }

  @media screen and (max-width: ${theme.mediaSizes.xsMaxWidth}) {
    line-height: ${rem(30)};
    br {
      display: block;
    }
  }
`

export const FooterSupportText = styled.b`
  display: block;
  font-weight: 400;
  margin-bottom: ${rem(22)};
`

export const FooterLink = styled.a`
  color: ${theme.colors.black};

  .ctf-footer-link-underlined {
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.purple};
  }
`
export const FooterContactsWrapper = styled.div`
  @media screen and (max-width: ${theme.mediaSizes.smMaxWidth}) {
    order: -1;
    margin-bottom: ${rem(14)};
  }

  @media screen and (max-width: ${theme.mediaSizes.xsMaxWidth}) {
    margin-bottom: ${rem(20)};
  }
`
