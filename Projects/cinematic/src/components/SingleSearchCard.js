import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SingleSearchCardSkeleton from './SingleSearchCardSkeleton';

const SingleSearchCard = ({ data }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  
  useEffect(_ => {
    setTimeout(_ => setShowSkeleton(false), 10000);
  });

  return (
    <>
    {showSkeleton ? <SingleSearchCardSkeleton /> : (
      <Card sx={{ display: 'flex' }}>
      <Link to={`/detail/${data.imdbID}`}>
        <CardMedia
          component="img"
          sx={{ width: 126 }}
          image={data.Poster !== "N/A" ? data.Poster : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
          alt="Live from space album cover"
        />
      </Link>

        <CardContent>
          <Stack spacing={1} alignItems="flex-start" justifyContent="flex-start">
            <Link to={`/detail/${data.imdbID}`}>
              <Typography component="div" variant="h5">
                {data.Title}
              </Typography>
            </Link>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Released {data.Year}
            </Typography>
            <Chip label={data.Type} sx={{textTransform: "capitalize"}}/>
          </Stack>
        </CardContent>
      </Card>
    )}
    </>
  );
}
export default SingleSearchCard;