import styled, { css } from 'styled-components'

const headerComponent = css`
  align-items: center;
  color: ${({ theme }) => theme.headerTextColor};
  cursor: pointer;
  display: flex;
  text-decoration: none;
  svg {
    margin-right: 5px;
  }
`

export const Brand = styled.div`
  ${headerComponent}
  font-size: ${({ theme }) => theme.typography.brand};
`

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
`

export const Search = styled.div`
  ${headerComponent}
  font-size:  ${({ theme }) => theme.typography.search};
`
