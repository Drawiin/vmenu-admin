import React, { useState, useEffect } from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'
import { getProducts } from '@data/repository/ProductsRepository'
import Product from '@domain/entities/Product'
import ProductsList from '@presentation/components/products/ProductsList'
import ClientToolbar from '@presentation/components/tables/TablesToolbar'
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
        <title>Mesas</title>
      </Head>
      <Container maxWidth={false}>
        <ClientToolbar handleActionClicked={() => {}} />
        <Box mt={3}>
          <ProductsList products={products} onDelete={() => {}} />
        </Box>
      </Container>
    </Box>
  )
}

export default Tables
