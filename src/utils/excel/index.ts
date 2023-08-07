import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx'

interface Props {
  data: any[]
  filename: string
  colsSize: number[]
  colName?: string[]
}
const excelDownload = ({ data, colsSize, filename, colName }: Props) => {
  const excelFileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  const excelFileExtension = '.xlsx'
  const colArr = colName ? colName : Object.keys(data[0])
  const ws = XLSX.utils.aoa_to_sheet([colArr])

  data.map((item) => {
    XLSX.utils.sheet_add_aoa(ws, [Object.values(item)], { origin: -1 })
    ws[`!cols`] = colsSize.map((item) => ({ wpx: item }))

    return false
  })

  const wb: any = { Sheets: { data: ws }, SheetNames: ['data'] }
  const excelButter = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
  const excelFile = new Blob([excelButter], { type: excelFileType })
  FileSaver.saveAs(excelFile, filename + excelFileExtension)
}

export default excelDownload
