import styled from 'styled-components'

export const CardBody = styled.div`
  font-size: ${({ theme }) => theme.typography.cardBody};
  text-align: center;
`

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 15px;
  box-shadow: 2px 2px 7px black;
  padding: 10px;
  cursor: pointer;
`

export const CardHeader = styled.div`
  background: ${({ theme }) => theme.cardHeader};
  border-radius: 5px;
  color: #000000;
  font-size: ${({ theme }) => theme.typography.cardHeader};
  margin-bottom: 15px;
  padding: 15px;
  text-align: center;
`
