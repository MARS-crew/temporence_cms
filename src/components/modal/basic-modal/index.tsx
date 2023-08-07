// ** Mui Imports
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContentText,
} from '@mui/material'

interface Props {
  state: boolean
  closeEvent(): void
  message: string
  title: string
}

const BasicModal = ({ state, closeEvent, message, title }: Props) => {
  return (
    <Dialog
      open={state}
      disableEscapeKeyDown
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          closeEvent()
        }
      }}
      fullWidth
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContentText>{message}</DialogContentText>
      <DialogActions>
        <Button onClick={closeEvent}>확인</Button>
      </DialogActions>
    </Dialog>
  )
}

export default BasicModal
