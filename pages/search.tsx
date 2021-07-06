import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import CardGrid from '@composite/card-grid/CardGrid'
import Input from '@simple/input/Input'

import { axiosClient } from '@utils/axios-client'

const Search = () => {
  const [breweries, setBreweries] = useState([])

  const onChange = async (event: {
    preventDefault: () => {}
    target: { value: string }
  }) => {
    event.preventDefault()

    const response = await axiosClient.get(
      `/breweries/search?query=${event.target.value}`
    )

    setBreweries(response.data)
  }

  return (
    <div>
      <h3>
        <FaSearch /> Search
      </h3>
      <Input onChange={onChange} />
      <CardGrid breweries={breweries} />
    </div>
  )
}

export default Search
