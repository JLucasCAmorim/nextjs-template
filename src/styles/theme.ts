const theme = {
  colors: {
    background: '#f8f9fe',
    text: '#5c6689',
    primary: '#8257e6',
    white: '#fff',
    black: '#000',
    blackDarkBlue: '#090f25',
    blackDarkBlue2: '#101624',
    gray: '#cdd2e2',
    lightenGray: '#e8f0f1',
    lightenGray2: '#f2f5fa',
    lightenGray3: '#eeeff3',
    lightenGray4: '#f0f2f6',
    lightenGray5: '#f6f7fa',
    lightenGray6: '#fefefe',
    lightenGray7: '#fbfbfd',
    lightenGray8: '#f5f7fa',
    lightenGray9: '#e5e7ed',
    lightGray: '#d0d2d9',
    purpleGray: '#5c6689',
    purpleGray2: '#676788',
    darkPurple: '#6051cc',
    darkenPurple: '#161635',
    purple: '#6555dc',
    lightPurple: '#7c70e1',
    lightenGreen: '#e8f0f1',
    green: '#17c383',
  },
  baseFontSize: 14,
  containerFluidMaxWidth: 1270,
  mediaSizes: {
    xxlMinWidth: 1600,
    xxlMaxWidth: 1599,
    xlMinWidth: 1200,
    xlMaxWidth: 1199,
    mdMinWidth: 992,
    mdMaxWidth: 991,
    smMinWidth: 768,
    smMaxWidth: 767,
    xsMinWidth: 544,
    xsMaxWidth: 543,
  },
}

export const rem = (px: number, base: number = theme.baseFontSize): string => {
  return `${px / base}rem`
}

export default theme
