import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions'
import DialogProps from '@domain/entities/DialogProps'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface AddCategoryDialog extends DialogProps {
  handleSuccess: (name: string) => void
}

const AddCategoryDialog: React.FC<AddCategoryDialog> = ({
  handleClose,
  open,
  handleSuccess
}) => {
  const [productName, setProductName] = useState('')

  const handleSave = () => {
    handleSuccess && handleSuccess(productName)
    setProductName('')
    handleClose()
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
          Entre com o nome da nova categoria de produtos.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nome da categoria"
          type="name"
          value={productName}
          onChange={e => setProductName(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddCategoryDialog
