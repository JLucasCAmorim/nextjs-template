import styled from 'styled-components'
import { rem } from '../theme'

export const Section = styled.section`
  margin-top: ${rem(80)};
  margin-bottom: ${rem(80)};

  @media (max-width: ${props => props.theme.mediaSizes.mdMaxWidth}) {
    margin-bottom: 0;
  }
`
export const SectionTitle = styled.h1`
  font-size: 2.57143rem;
  font-weight: 900;
  color: #161635;
  display: block;

  position: relative;
  display: block;
  padding-bottom: 40px;
  margin-bottom: 3.57143rem;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 15px;
    border-radius: 5px;
    background-color: #ffd300;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
  }
`

export const SectionDescription = styled.p`
  margin-bottom: 3.21429rem;
  color: #5c6689;
  font-size: 1.28571rem;
  line-height: 2.14286rem;
  max-width: 57.14286rem;

  b {
    font-weight: 900;
    color: #1616;
  }
`
export const ServiceTitle = styled.h2`
  margin-bottom: 3.57143rem;
  position: relative;
  color: #161635;
  font-size: 2.57143rem;
  font-weight: 900;
  margin-bottom: 5rem;
  padding-bottom: 40px;

  @media (max-width: ${props => props.theme.mediaSizes.smMaxWidth}) {
    margin-bottom: 0;
  }

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 15px;
    border-radius: 5px;
    background-color: #ffd300;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
  }
`

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 2.14286rem;
`

export const ServiceItemTitle = styled.h4`
  color: #161635;
  font-size: 1.71429rem;
  font-weight: 700;
  font-style: italic;
  padding-top: 0.71429rem;
  margin-bottom: 1.07143rem;
  margin-left: 5px;
`

export const ServiceItemText = styled.p`
  color: #5c6689;
  font-size: 1.28571rem;
  line-height: 1.71429rem;
`

export const ServiceImageContainer = styled.div`
  padding-top: 3.57143rem;
  padding-left: 0.71429rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;

  @media (max-width: ${props => props.theme.mediaSizes.mdMaxWidth}) {
    align-items: center;
  }

  @media (max-width: ${props => props.theme.mediaSizes.smMaxWidth}) {
    align-items: flex-start;
    padding-top: 0;
    padding-left: 0;
    margin-bottom: 2.14286rem;
  }
`
export const ReviewItem = styled.blockquote`
  background-color: #fff;
  border: 1px solid #e8f0f1;
  border-radius: 5px;
  padding-top: 2.07143rem;
  padding-left: 2.64286rem;
  padding-right: 3rem;
  padding-bottom: 2.14286rem;
  position: relative;
  overflow: hidden;
  transition: color 0.2s ease-in;

  @media (max-width: ${props => props.theme.mediaSizes.mdMaxWidth}) {
    margin-bottom: 2.85714rem;
    padding-top: 1.42857rem;
    padding-left: 2.28571rem;
    padding-right: 2.64286rem;
    padding-bottom: 1.42857rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #6555dc;
    -webkit-transform: translate3d(calc(-100% - 1px), 0, 0);
    transform: translate3d(calc(-100% - 1px), 0, 0);
    transition: -webkit-transform 0.2s ease-in;
    transition: transform 0.2s ease-in;
    transition: transform 0.2s ease-in, -webkit-transform 0.2s ease-in;
    will-change: transform;
  }

  &:hover,
  &:focus {
    color: #fff;
  }

  &:hover cite {
    color: #fff;
  }

  &:hover::before,
  &:focus::before {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`
export const ReviewItemWrapper = styled.div`
  position: relative;
  z-index: 1;
`

export const ReviewItemSource = styled.p`
  font-size: 1.14286rem;
  font-style: italic;
  margin-bottom: 2rem;
`
export const ReviewItemAuthor = styled.cite`
  display: block;
  font-size: 1.71429rem;
  line-height: 2.57143rem;
  margin-bottom: 0.35714rem;
  font-weight: 400;
  font-style: normal;
  color: #000;
  transition: color 0.2s ease-in;
`
export const ReviewItemRating = styled.div`
  width: 161px;
  height: 25px;
  margin-bottom: 2.57143rem;
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
  background-image: url('/images/5-stars.png');
  will-change: filter;
`
export const ReviewItemQuote = styled.div`
  font-size: 1.14286rem;
  line-height: 1.71429rem;
  letter-spacing: 0.5px;
`
export const ReviewItemPunch = styled.b`
  display: block;
  font-weight: 700;
  margin-top: 1.78571rem;
`
