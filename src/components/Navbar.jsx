import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import logo from '../utils/images/ViewLoomLogo.png'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack direction="row"
      alingItems="center"
      p={2} sx={{ position: 'stick', background: '#000', top: 0, justifyContent: 'space-between' }}>


      <Link to="/" style={{ display: 'flex', alingItems: 'center', marginLeft: '25px' }}>
        <img src={logo} alt='Logo' height={100} />
      </Link>

      <div style={{marginTop: '40px'}}>
        <SearchBar />
      </div>
    </Stack>
  )
}

export default Navbar