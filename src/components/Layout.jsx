
import styled from '@emotion/styled';
import {jsx, css} from '@emotion/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { Link, Box } from '@chakra-ui/react'
import {Logo} from '../Logo.js'

const Layout = ({children}) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '0.2fr 1fr',
      gap: '1rem',
      minHeight: '100vh',
    }}>
      <nav style={{
        padding: '1rem'
      }}>
        <Logo boxSize="100px" />
        <Link href="/">Home</Link>
        <ColorModeSwitcher />
      </nav>
      <main style={{
        padding: '1rem'
      }}>
        {children}
      </main>
    </div>
  )
}

export default Layout;
