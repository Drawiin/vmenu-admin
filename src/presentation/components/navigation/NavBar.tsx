import React from 'react'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core'
import {
  MenuBookOutlined,
  Category,
  TableChartOutlined,
  Home
} from '@material-ui/icons'
import NavItem, { NavItemProps } from './NavItem'

const user = {
  jobTitle: 'Admin',
  name: 'Restaurante Miguéis'
}

const items: Array<NavItemProps> = [
  {
    href: '/',
    icon: Home,
    title: 'Inicio'
  },
  {
    href: '/categorys',
    icon: Category,
    title: 'Categorias'
  },
  {
    href: '/product',
    icon: MenuBookOutlined,
    title: 'Produtos'
  },
  {
    href: '/tables',
    icon: TableChartOutlined,
    title: 'Mesas'
  }
]

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}))

interface NavBarProps {
  onMobileClose: () => void
  openMobile: boolean
}

const NavBar: React.FC<NavBarProps> = ({ onMobileClose, openMobile }) => {
  const classes = useStyles()

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} />

        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map(item => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  )

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  )
}

export default NavBar
