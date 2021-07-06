import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { IBreweryAttrs } from '../../../@types/Brewery'

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
  const [breweriesToShow, setBreweriesToShow] = useState<Array<IBreweryAttrs>>(
    []
  )

  useEffect(() => {
    const filteredBreweries: Array<IBreweryAttrs> = filterCurrentBrewery(
      breweries,
      currentBreweryId
    )

    const randomizedBreweries: Array<IBreweryAttrs> = randomizeBreweries(
      filteredBreweries,
      4
    )

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
