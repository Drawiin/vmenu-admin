import React, { useState } from 'react'
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'
import Image from 'next/image'
import { useRouter } from 'next/router'
import SetUser from '@domain/usecases/user/SetUser'

interface TopBarProps {
  onMobileNavOpen: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onMobileNavOpen }) => {
  const [notifications] = useState([])
  const router = useRouter()

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <Image src="/logo.png" height="34" width="64" />
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton
            color="inherit"
            onClick={() => {
              SetUser(null)
              router.push('/')
            }}
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
