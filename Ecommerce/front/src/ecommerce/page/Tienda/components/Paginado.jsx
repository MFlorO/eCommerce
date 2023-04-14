import { Stack, Pagination } from "@mui/material"


const Paginado = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
    </Stack>
  )
}

export default Paginado