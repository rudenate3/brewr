import Link from 'next/link'
import { FaBeer, FaSearch } from 'react-icons/fa'

import { Brand, HeaderContainer, Search } from './Header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <Brand>
          <FaBeer /> Brewr
        </Brand>
      </Link>
      <Link href="/search" passHref>
        <Search>
          <FaSearch /> Search
        </Search>
      </Link>
    </HeaderContainer>
  )
}

export default Header
