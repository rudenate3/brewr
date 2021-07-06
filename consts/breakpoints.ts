const size = {
  laptop: '1024px',
  tablet: '768px'
}

export const device = {
  laptop: `(min-width: ${size.laptop})`,
  mobile: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet})`
}
