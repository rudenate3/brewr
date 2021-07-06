import { useEffect, useState } from 'react'
import { OptionTypeBase } from 'react-select'

import { IBreweryAttrs } from '../@types/Brewery'

import CardGrid from '@composite/card-grid/CardGrid'
import Featured from '@simple/featured/Featured'
import Select from '@composite/select/Select'

import { BREWERY_TYPES } from '@consts/brewery-types'

import { axiosClient } from '@utils/axios-client'
import { randomizeBreweries } from '@utils/brewery'

const Home = ({
  initialBreweries
}: {
  initialBreweries: Array<IBreweryAttrs>
}) => {
  const [breweries, setBreweries] = useState<Array<IBreweryAttrs>>([])
  const [breweryType, setBreweryType] = useState('')
  const [featuredBrewery, setFeaturedBrewery] = useState<IBreweryAttrs>({
    id: 0,
    name: '',
    brewery_type: '',
    street: '',
    address_2: '',
    address_3: '',
    city: '',
    state: '',
    county_province: '',
    postal_code: '',
    country: '',
    longitude: '',
    latitude: '',
    phone: '',
    website_url: '',
    updated_at: '',
    created_at: ''
  })

  useEffect(() => {
    setBreweries(initialBreweries)
    setFeaturedBrewery(randomizeBreweries(initialBreweries, 1)[0])
  }, [])

  useEffect(() => {
    if (breweryType === '') return

    axiosClient
      .get(`breweries?by_type=${breweryType}`)
      .then((res) => setBreweries(res.data))
      .catch((err) => console.error(err))
  }, [breweryType])

  const onChange = (typeObj: OptionTypeBase | null): void =>
    setBreweryType(typeObj!.value)

  return (
    <div>
      <Featured brewery={featuredBrewery} />
      <Select onChange={onChange} options={BREWERY_TYPES} />
      <CardGrid breweries={breweries} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await axiosClient.get('breweries')

  return { props: { initialBreweries: response.data } }
}

export default Home
