import React, { useState, useEffect } from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'
import ProductsList from '../components/products/ProductsList'
import ProductToolbar from '../components/products/ProductsToolBar'
import Head from 'next/head'
import Product from '../entities/Product'
import {
  getProducts,
  createProducts,
  CreateProductRequest
} from '../repository/ProductsRepository'
import AddProductDialog from '../components/products/AddProductDialog'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

const Products: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()
  const [products, setProducts] = useState<Array<Product>>([])

  const loadProducts = () => {
    getProducts().then(newProducts => {
      console.log(newProducts)
      setProducts(newProducts)
    })
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSave = (product: CreateProductRequest) => {
    createProducts(product).then(() => loadProducts())
  }

  return (
    <Box className={classes.root}>
      <Head>
        <title>Produtos</title>
      </Head>
      <Container maxWidth={false}>
        <ProductToolbar handleActionClicked={handleClickOpen} />
        <Box mt={3}>
          <ProductsList products={products} />
        </Box>
      </Container>
      <AddProductDialog
        open={open}
        handleClose={handleClose}
        handleSuccess={onSave}
      />
    </Box>
  )
}

export default Products
