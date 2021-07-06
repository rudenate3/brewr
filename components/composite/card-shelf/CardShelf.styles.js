import styled from 'styled-components'
import { device } from '@consts/breakpoints'

export const CardShelfContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  margin-top: 15px;

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`
