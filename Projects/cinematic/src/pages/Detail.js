import { useParams } from 'react-router-dom';
import { omdb } from '../utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import axios from 'axios';

const Detail = _ => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(_ => {
    (async _ => {
        const response = await omdb.get(`?i=${id}&plot=full`);
        if(response.data.Response === "False") {
          navigate("/404");
        } else {
          console.log(response.data);
          setData(response.data);
        }
    })();
  }, [id]);

  useEffect(_ => {
    if(data.Country?.length > 0) {
      (async _ => {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${data.Country}?fullText=true`);
        setFlag(response.data[0]?.flags?.svg);
      })()
    }
  }, [data])
  
  return (
    <>
      <Box p={5}>
        <Stack>
          <Stack direction="row" spacing={5}>
            <img src={data.Poster} />
            <Box>
              <Typography variant="h4">
                {data.Title}
              </Typography>
              <Typography>
                Released {data.Year}
              </Typography>
              <Typography variant="h5" mt={3} mb={1}>
                Crew
              </Typography>
              <Stack direction="row" gap={1} sx={{flexWrap: "wrap"}} justify-content="flex-start" align-items="flex-start">
                {data.Actors?.split(", ").map((e, i) => {
                  return <Chip key={i} label={e} />
                })}

                {data.Writer?.split(", ").map((e, i) => {
                  return <Chip key={i} label={e} />
                })}

                <Chip label={data.Director} />
              </Stack>
              <Stack mt={2} direction="row" spacing={2} alignItems="center">
                <img src={flag} height={40} style={{outline: "1px solid #1976d2", outlineOffset: "2px"}} />
                <Typography variant='overline'>
                  {data.Country}
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Typography variant='h4' mt={5} mb={2}>
            Plot:
          </Typography>
          <Typography align="justify">
            {data.Plot}
          </Typography>
        </Stack>
      </Box>
    </>
  )
}

export default Detail;