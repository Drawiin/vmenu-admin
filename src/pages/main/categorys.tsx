import React, { useState, useEffect } from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'

import Head from 'next/head'
import Category from '@domain/entities/Category'
import AddCategoryDialog from '@presentation/components/category/AddCategoryDialog'
import CategoryList from '@presentation/components/category/CategoryList'
import CategoryToolbar from '@presentation/components/products/ProductsToolBar'
import GetCategorys from '@domain/usecases/categorys/GetCategorys'
import CreateCategory from '@domain/usecases/categorys/CreateCategory'
import DeletCategory from '@domain/usecases/categorys/DeletCategory'
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

const Categorys: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [categorys, setCategorys] = useState<Array<Category>>([])
  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const loadCategorys = () => {
    GetCategorys().then(newCategorys => {
      console.log(newCategorys)
      setCategorys(newCategorys)
    })
  }

  const onSave = (name: string) => {
    CreateCategory(name).then(() => loadCategorys())
  }

  const onDelete = (id: number) => {
    DeletCategory(id).then(() => loadCategorys())
  }

  useEffect(() => {
    loadCategorys()
  }, [])

  return (
    <Box className={classes.root}>
      <Head>
        <title>Categorias</title>
      </Head>
      <Container maxWidth={false}>
        <CategoryToolbar handleActionClicked={handleClickOpen} />
        <Box mt={3}>
          <CategoryList categorys={categorys} onDelete={onDelete} />
        </Box>
      </Container>
      <AddCategoryDialog
        open={open}
        handleClose={handleClose}
        handleSuccess={onSave}
      />
    </Box>
  )
}

export default Categorys
