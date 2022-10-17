import { useEffect, useState } from "react";
import { omdb } from "../utils";
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

const FavouriteMovieCard = ({ id }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(_ => {
    (async _ => {
      const response = await omdb.get(`?i=${id}`);
      setData(response.data);
      console.log(response.data);
    })();
  }, [id]);

  const clicked = _ => {
    navigate(`/detail/${id}`);
  }

  return (
    <>
      <Grid item xs={3}>
        <Card>
          <CardActionArea onClick={clicked}>
            <CardMedia component="img" image={data.Poster} />
            <CardContent>
              <Typography variant="h6">
                {data.Title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  )
}

export default FavouriteMovieCard;