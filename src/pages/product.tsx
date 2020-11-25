import React, { useState, useEffect } from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'

import Head from 'next/head'

import {
  getProducts,
  CreateProductRequest,
  createProducts,
  deleteProducts
} from '@data/repository/ProductsRepository'
import Product from '@domain/entities/Product'
import AddProductDialog from '@presentation/components/products/AddProductDialog'
import ProductsList from '@presentation/components/products/ProductsList'
import ProductToolBar from '@presentation/components/products/ProductsToolBar'

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

  const onDelete = (id: number) => {
    deleteProducts(id).then(() => loadProducts())
  }

  return (
    <Box className={classes.root}>
      <Head>
        <title>Produtos</title>
      </Head>
      <Container maxWidth={false}>
        <ProductToolBar handleActionClicked={handleClickOpen} />
        <Box mt={3}>
          <ProductsList products={products} onDelete={onDelete} />
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
