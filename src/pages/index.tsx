import React, { useState, useEffect } from 'react'
import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import ProductsList from '../components/products/ProductsList'
import ProductToolbar from '../components/products/ProductsToolBar'
import Head from 'next/head'
import Product from '../entities/Product'
import { getProducts } from '../repository/ProductsRepository'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Head>
        <title>Produtos</title>
      </Head>
      <Container maxWidth={false}>
        <ProductToolbar handleActionClicked={() => {}} />
        <Box
          mt={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          alignContent="center"
        ></Box>
        <Typography variant="h1" align="center">
          Bem Vindo Ao Seu Painel de Administrador
        </Typography>
        <Typography variant="h6" align="center">
          use A Barra Lateral Para Navegar
        </Typography>
      </Container>
    </Box>
  )
}

export default Products
