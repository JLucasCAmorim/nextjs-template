import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  .navbar-brand-custom {
    font-family: 'Anton', sans-serif;
    color: #EE673A !important;
    border: 2px solid #EE673A !important;
    padding: 5px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .self-typed {
    font-size: 31px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fff;
  }

  // Index -----------
  .cover {
    background-image: linear-gradient(45deg,#EE673A 0%,#ffb74d 100%);
    overflow: hidden;
    position: relative;
  }

  .wrapper {
    min-height: 100vh;
    min-width: 100vw;
    margin-top: 0;
    position: relative;
  }

  .main-section {
    top: 150px;
    width: 100%;
    padding: 150px 0 0;
  }

  .hero-section{
    h2 {
      color: white;
      font-weight: bold;
      margin-bottom: 10px;
    }

    perspective: 1000px;
    color: white;
    width: 400px;
    position: relative;

    &-content {
      position: absolute;
      bottom: 20px;
      width: 360px;
      left: 6%;
      z-index: 1;

      &-intro {
        font-size: 17px;
      }
    }
  }

  .image {
    width: auto;
    max-width: 100%;
  }

  .hero-welcome-text > h1 {
    color: white;
    text-transform: uppercase;
    font-size: 27px;
    margin-top: 80px;
  }

  .hero-welcome-bio {
    margin-top: 20px;
    color: white;

    .fa-stack {
      font-size: 28px;
    }

    .list-inline-item {
      > a {
        color: #373737;
      }
    }
  }

  .hero-welcome-wrapper {
    justify-content: flex-end;

  }

  @media (max-width: 991px) {
    .hero-section {
      width: 341px;

      &-content {
        width: 341px;
      }
    }

    .hero-welcome-text > h1 {
      margin-top: 0px;
    }
  }

  .background-image {
    position: absolute;
    width: 1762px;
    height: 493px;
  }

  .shadow-custom {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-shadow: -17px 13px 41px #F06732;
    border: 2px solid #3bace5;

    .shadow-inner {
      width: 100%;
      height: 100%;
      box-shadow: -17px 13px 13px rgba(0,0,0,0.09);
    }
  }

  .shadow-custom-2 {
    border: 2px solid #f37d49;
    box-shadow: -17px 13px 41px rgba(13,78,158,0.3);
  }

  // Header

  .port-navbar.port-default {
    width: 100%;
    z-index: 15;
    padding: 40px;

    .port-navbar {
      &-brand {
        color: white;
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;

        &-item {
          margin-left: 10px;
          margin-right: 10px;
        }

        &-link{
          color: white;
          font-weight: bold;
          letter-spacing: 0.8px;
          font-size: 18px;
          text-transform: uppercase;

          &.active {
            color: #dba919;
          }

          &:hover, &:focus {
            color: #dba919;
          }
        }
      }
    }
  }

`
