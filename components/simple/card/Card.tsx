import Link from 'next/link'

import { IBreweryAttrs } from '../../../@types/Brewery'

import { BREWERY_TYPE_MAP } from '@consts/brewery-types'

import { CardBody, CardContainer, CardHeader } from './Card.styles'

const Card = ({ brewery }: { brewery: IBreweryAttrs }) => {
  return (
    <Link href={`/${brewery.id}`} passHref>
      <CardContainer>
        <CardHeader>
          <span>{brewery.name}</span>
        </CardHeader>
        <CardBody>
          <span>{BREWERY_TYPE_MAP[brewery.brewery_type]}</span>
          <br />
          <span>
            {brewery.city} - {brewery.state}
          </span>
        </CardBody>
      </CardContainer>
    </Link>
  )
}

export default Card
