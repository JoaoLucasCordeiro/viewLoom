import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack direction="row"
      alingItems="center"
      p={2} sx={{ position: 'stick', background: '#000', top: 0, justifyContent: 'space-between' }}>

      <Link to="/" style={{ display: 'flex', alingItems: 'center' }}>
        <img src={logo} alt='Logo' height={45} />
      </Link>

      <SearchBar/>

    </Stack>
  )
}

export default Navbar