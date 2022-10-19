import { CircularProgress, Card, Stack } from "@mui/material";
const Loader = _ => {
  return(
    <Card mt={3}>
      <Stack p={1} alignItems="center">
        <CircularProgress />
      </Stack>
    </Card>
  );
}

export default Loader;