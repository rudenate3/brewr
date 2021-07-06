import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Card from '@simple/card/Card'

import { filterCurrentBrewery, randomizeBreweries } from '@utils/brewery'

import { CardShelfContainer } from './CardShelf.styles'

const CardShelf = ({
  breweries,
  currentBreweryId
}: {
  breweries: Array<IBreweryAttrs>
  currentBreweryId: number
}) => {
  const [breweriesToShow, setBreweriesToShow] = useState([])

  useEffect(() => {
    const filteredBreweries = filterCurrentBrewery(breweries, currentBreweryId)
    const randomizedBreweries = randomizeBreweries(filteredBreweries, 4)
    setBreweriesToShow(randomizedBreweries)
  }, [breweries])

  return (
    <CardShelfContainer>
      {breweriesToShow.map((brewery: IBreweryAttrs) => (
        <Card brewery={brewery} key={uuidv4()} />
      ))}
    </CardShelfContainer>
  )
}

export default CardShelf
