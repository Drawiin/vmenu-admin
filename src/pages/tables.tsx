import { Box, Container, makeStyles } from '@material-ui/core'

import Head from 'next/head'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

const Tables: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Head>
        <title>Mesas</title>
      </Head>
      <Container maxWidth={false}>
        <h1>mesa</h1>
      </Container>
    </Box>
  )
}

export default Tables
