export interface IBreweryAttrs {
  id: number
  name: string
  brewery_type: string
  street: string
  address_2: string
  address_3: string
  city: string
  state: string
  county_province: string
  postal_code: string
  country: string
  longitude: string
  latitude: string
  phone: string
  website_url: string
  updated_at: string
  created_at: string
}

export interface IBreweryProps {
  breweries: Array<IBreweryAttrs>
}

export type IBreweryTypes =
  | 'micro'
  | 'nano'
  | 'regional'
  | 'brewpub'
  | 'large'
  | 'planning'
  | 'bar'
  | 'contract'
  | 'proprietor'
  | 'closed'
