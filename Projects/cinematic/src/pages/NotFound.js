import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

const NotFound = _ => {
  return (
    <Stack alignItems="center" mt={20} mb={20}>
      <Typography variant="h4">Page not found</Typography>
      <Link to="/">Go to home</Link>
    </Stack>
  )
}

export default NotFound;