import React, { useState, useEffect } from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'
import ProductsList from '../components/ProductsList'
import Toolbar from '../components/Toolbar'
import Head from 'next/head'
import Product from '../entities/Product'
import { getProducts } from '../repository/ProductsRepository'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

const Products: React.FC = () => {
  const classes = useStyles()
  const [products, setProducts] = useState<Array<Product>>([])

  useEffect(() => {
    getProducts().then(newProducts => {
      console.log(newProducts)
      setProducts([...products, ...newProducts])
    })
  }, [])

  return (
    <Box className={classes.root}>
      <Head>
        <title>Produtos</title>
      </Head>
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <ProductsList products={products} />
        </Box>
      </Container>
    </Box>
  )
}

export default Products
