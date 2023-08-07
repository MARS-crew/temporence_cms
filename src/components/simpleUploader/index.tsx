// ** React Imports
import { useRef } from 'react'

// ** Mui Imports
import { Button, TextField } from '@mui/material'

// ** Config Imports
import {} from '../../config'
import { S3 } from 'aws-sdk'

interface Props {
  type: string
  file?: string
  setName?: any
  setPath?: any
}
const SimpleUploader = ({ type, setName, setPath, file }: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFileUpload = (e: any) => {
    // const file = e.target.files[0]
    // if (!file) return
    // const s3 = new S3({
    //   region: REACT_APP_S3_BUCKET_REGION || '',
    //   credentials: {
    //     accessKeyId: REACT_APP_S3_BUCKET_ACCESSKEY || '',
    //     secretAccessKey: REACT_APP_S3_BUCKET_SECRETKEY || '',
    //   },
    // })
    // const fileObject = {
    //   Bucket: REACT_APP_S3_BUCKET_NAME || '',
    //   Key: file.name,
    //   Body: file,
    //   ContentType: file.type,
    // }
    // s3.upload(fileObject, (err: any, data: any) => {
    //   if (err) {
    //     console.error('Error uploading file:', err)
    //   } else {
    //     setPath && setPath(data.Location)
    //     setName && setName(data.Key.replace(/^.*?file\//, ''))
    //   }
    // })
  }

  const handleAddFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <>
      <TextField disabled value={file} sx={{ width: '60%' }} />
      <Button
        variant="contained"
        onClick={handleAddFileButtonClick}
        sx={{ ml: 3, width: '30%' }}
      >
        파일 추가
      </Button>
      <input
        type={type}
        onChange={handleFileUpload}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
    </>
  )
}

export default SimpleUploader
