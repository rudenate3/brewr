import { v4 as uuidv4 } from 'uuid'

import { IBreweryAttrs, IBreweryProps } from '../../../@types/Brewery'

import Card from '@simple/card/Card'

import { CardGridContainer } from './CardGrid.styles'

const CardGrid = ({ breweries }: IBreweryProps) => (
  <CardGridContainer>
    {breweries.map((brewery: IBreweryAttrs) => (
      <Card brewery={brewery} key={uuidv4()} />
    ))}
  </CardGridContainer>
)

export default CardGrid
