// ** React Imports
import React, { ChangeEvent, useState } from 'react'

// ** Mui Imports
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

const ImagePreview: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setSelectedImage(file)

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Grid container spacing={3} sx={{ alignItems: 'center' }}>
      <Grid item xs={3}>
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            style={{ width: '100%', height: 200 }}
          />
        ) : (
          <Box sx={{ border: 3, width: '100%', height: 200 }} />
        )}
      </Grid>
      <Grid item xs={8} sx={{ textAlign: 'left' }}>
        <Typography variant="h6">전송할 이미지를 첨부해주세요</Typography>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        <Typography variant="body2">
          (권장 이미지 : 500x500 / 100mb git, jpg, png, jpeg)
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ImagePreview
