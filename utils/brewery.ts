import { IBreweryAttrs } from '../@types/Brewery'

const range = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const filterCurrentBrewery = (
  breweries: Array<IBreweryAttrs>,
  currentBreweryId: number
): Array<IBreweryAttrs> =>
  breweries.filter((brewery: IBreweryAttrs) => brewery.id !== currentBreweryId)

export const randomizeBreweries = (
  breweries: Array<IBreweryAttrs>,
  amount: number
): Array<IBreweryAttrs> => {
  const randomBreweries = Array.from(Array(amount), () => {
    const randomIndex = range(0, breweries.length - 1)
    const randomBrewery = breweries.slice(randomIndex, randomIndex + 1)[0]

    return randomBrewery
  })

  return randomBreweries
}
