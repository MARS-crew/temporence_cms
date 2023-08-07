// ** Mui Imports
import { Dialog, DialogActions, Button, DialogContentText } from '@mui/material'

interface Props {
  state: boolean
  closeEvent(): void
  message: string
  event: any
  one?: string
  two?: string
}

const SelectModal = ({
  state,
  closeEvent,
  event,
  message,
  one,
  two,
}: Props) => {
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
      <DialogContentText sx={{ textAlign: 'center', pt: 5 }}>
        {message}
      </DialogContentText>
      <DialogActions>
        <Button onClick={event}>{one ? one : '확인'}</Button>
        <Button onClick={closeEvent} sx={{ color: 'grey' }}>
          {two ? two : '취소'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SelectModal
