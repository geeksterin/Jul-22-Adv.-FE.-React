import useLocalStorage from "use-local-storage";
import FavouriteMovieCard from "../components/FavouriteMovieCard";
import { Box, Typography } from "@mui/material";
import Masonry from '@mui/lab/Masonry';

const Home = _ => {
  const [favourites] = useLocalStorage("favourites", "[]");

  return (
    <>
      <Box p={4}>
        <Typography variant="h5" textAlign="center">Welcome to My Collection</Typography>
        <hr />
        <Masonry columns={4} spacing={2}>
          {JSON.parse(favourites).map((e, i) => {
            return <FavouriteMovieCard id={e} key={i} />
          })}
        </Masonry>
      </Box>
    </>
  )
}

export default Home;