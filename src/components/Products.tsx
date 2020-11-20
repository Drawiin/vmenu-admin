import React, { useState } from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'
import Page from 'src/components/Page'
import Results from './Results'
import Toolbar from './Toolbar'
import data from './data'
import Head from 'next/head'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

const Products: React.FC = () => {
  const classes = useStyles()
  const [customers] = useState(data)

  return (
    <Box className={classes.root}>
      <Head>
        <title>Produtos</title>
      </Head>
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Box>
  )
}

export default Products
