import { FaGlobe, FaPhoneAlt } from 'react-icons/fa'

import { axiosClient } from '@utils/axios-client'

import CardShelf from '@composite/card-shelf/CardShelf'

import { BREWERY_TYPE_MAP } from '@consts/brewery-types'

const Detail = ({
  brewery,
  nearby,
  similar
}: {
  brewery: IBreweryAttrs
  nearby: Array<IBreweryAttrs>
  similar: Array<IBreweryAttrs>
}) => {
  const {
    address_2,
    address_3,
    brewery_type,
    city,
    county_province,
    country,
    id,
    latitude,
    longitude,
    postal_code,
    name,
    phone,
    state,
    street,
    website_url
  } = brewery

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{name}</h1>
      <h3>{BREWERY_TYPE_MAP[brewery_type]}</h3>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h5>Address:</h5>
          {street && <span>{street}</span>}
          {address_2 && <span>{address_2}</span>}
          {address_3 && <span>{address_3}</span>}
          <span>
            {city && city}, {county_province && county_province}
            {state && state} {postal_code && postal_code}
          </span>
          {country && <span>{country}</span>}
          {longitude && <span>Longitude: {longitude}</span>}
          {latitude && <span>Latitude: {latitude}</span>}
        </div>
        {(phone || website_url) && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h5>Contact:</h5>
            {phone && (
              <span
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  marginBottom: '5px'
                }}
              >
                <FaPhoneAlt style={{ marginRight: '5px' }} /> {phone}
              </span>
            )}
            {website_url && (
              <a
                href={website_url}
                rel="noreferrer"
                style={{ alignItems: 'center', display: 'flex' }}
                target="_blank"
              >
                <FaGlobe style={{ marginRight: '5px' }} /> {website_url}
              </a>
            )}
          </div>
        )}
      </div>
      <div>
        <h3>Similar Breweries</h3>
        <CardShelf breweries={similar} currentBreweryId={id} />
      </div>
      {nearby.length > 0 && (
        <div>
          <h3>Nearby Breweries</h3>
          <CardShelf breweries={nearby} currentBreweryId={id} />
        </div>
      )}
    </div>
  )
}

export const getServerSideProps = async ({
  params: { id }
}: {
  params: { id: number }
}) => {
  const { data: brewery } = await axiosClient.get(`breweries/${id}`)

  const { data: similar } = await axiosClient.get(
    `breweries?by_type=${brewery.brewery_type}`
  )

  const nearby: Array<IBreweryAttrs> = []

  if (brewery.longitude && brewery.latitude) {
    const { data } = await axiosClient.get(
      `breweries?by_dist=${brewery.latitude},${brewery.longitude}`
    )

    data.forEach((brewery: IBreweryAttrs) => nearby.push(brewery))
  }
  return { props: { brewery, nearby, similar } }
}

export default Detail
