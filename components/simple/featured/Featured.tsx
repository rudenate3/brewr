import Card from '@simple/card/Card'

import { FeaturedContainer } from './Featured.styles'

const Featured = ({ brewery }: { brewery: IBreweryAttrs }) => {
  console.log(brewery)
  return (
    <FeaturedContainer>
      <h5>Featured Brewery</h5>
      <Card brewery={brewery} />
    </FeaturedContainer>
  )
}

export default Featured
