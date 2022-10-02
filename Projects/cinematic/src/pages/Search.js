import { useEffect, useState } from 'react';
import { omdb } from '../utils';
import { useSearchParams } from 'react-router-dom';
import SingleSearchCard from '../components/SingleSearchCard';
import { Box, Stack, Typography } from '@mui/material';

const Search = _ => {
  const [list, setList] = useState([]);
  const [params, setParams] = useSearchParams();
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(_ => {
    if(params.has("q") && params.get("q") !== "") {
      (async _ => {
        const response =  await omdb.get(`?s=${params.get("q")}`);
        setTotalRecords(response.data.totalResults);
        setList(response.data.Search);
      })();
    }
  }, [params])

  return (
    <>
      <Box p={5}>
        <Typography>{totalRecords} results found</Typography>

        <Stack spacing={3} mt={1}>
          {list.map((e, idx) => {
            console.log(e);
            // return <p key={idx}>{e.Title}</p>
            return <SingleSearchCard data={e} key={idx} />
          })}
        </Stack>
      </Box>
    </>
  )
}

export default Search;