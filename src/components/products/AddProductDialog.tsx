import React, { useState, useEffect, ChangeEvent } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions'
import DialogProps from '../../entities/DialogProps'
import Select from '@material-ui/core/Select'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import MenuItem from '@material-ui/core/MenuItem'
import { Box } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { getCategorys } from '../../repository/CategorysRepository'
import Category from '../../entities/Category'
import { CreateProductRequest } from '../../repository/ProductsRepository'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
)

interface AddProductDialogProps extends DialogProps {
  handleSuccess: (product: CreateProductRequest) => void
}

const AddProductDialog: React.FC<AddProductDialogProps> = ({
  handleClose,
  open,
  handleSuccess
}) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState<number>()
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState<number>()
  const [categoryOptions, setCategoryOptions] = useState<Category[]>([])
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const classes = useStyles()

  const loadCategorys = () => {
    getCategorys().then(newCategorys => {
      setCategoryOptions(newCategorys)
    })
  }

  useEffect(() => {
    loadCategorys()
  }, [])

  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: number }>
  ) => {
    setCategory(event.target.value)
  }

  const onSave = () => {
    const data: CreateProductRequest = {
      name,
      description,
      price,
      quantity: 1,
      category,
      photos: images
    }
    handleSuccess(data)
    handleClose()
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }

    const selectedImages = Array.from(event.target.files)

    setImages([...images, ...selectedImages])

    const selectedImagesPreview = selectedImages.map(image =>
      URL.createObjectURL(image)
    )

    setPreviewImages([...previewImages, ...selectedImagesPreview])
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {'Nova Categoria'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Entre com os dados da nova categoria de produtos.
        </DialogContentText>
        {/* oi */}
        <Box>
          <InputLabel htmlFor="images">Imagens</InputLabel>

          <Box
            display="grid"
            gridTemplateColumns="repeat(5, 1fr)"
            gridGap={16}
            marginTop={2}
          >
            {previewImages.map(image => (
              <img
                key={image}
                src={image}
                alt={name}
                style={{
                  width: '100%',
                  height: 96,
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
            ))}

            <label
              htmlFor="image[]"
              className="new-image"
              style={{
                width: '100%',
                minWidth: 96,
                height: 96,
                backgroundColor: '#fff',
                border: '1px dashed #FF2F07',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <AddPhotoAlternateIcon fontSize="large" color="primary" />
            </label>
          </Box>
          <input
            multiple
            onChange={handleSelectImages}
            type="file"
            id="image[]"
            style={{ display: 'none' }}
          />
        </Box>
        {/* oi */}
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nome do produto"
          type="name"
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
        />
        <Box display="flex">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Preço"
            type="number"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            fullWidth
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="category-label">Categoria</InputLabel>
            <Select
              labelId="category-label"
              id="category-label"
              value={category}
              onChange={handleCategoryChange}
            >
              {categoryOptions.map(({ name, id }) => {
                return (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Descrição"
          type="text"
          multiline
          value={description}
          onChange={e => setDescription(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button color="primary" onClick={onSave}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddProductDialog
