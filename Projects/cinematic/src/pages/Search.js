import { useEffect, useState } from 'react';
import { omdb } from '../utils';
import { useSearchParams } from 'react-router-dom';
import SingleSearchCard from '../components/SingleSearchCard';
import { Box, Stack, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

const Search = _ => {
  const [list, setList] = useState([]);
  const [params] = useSearchParams();
  const [totalRecords, setTotalRecords] = useState(0);
  const navigate = useNavigate();

  useEffect(_ => {
    if(params.has("q") && params.get("q") !== "") {
      setList([]);
    }
  }, [params]);

  const loadData = () => {
    (async _ => {
      const pageNo = Math.floor(list.length / 10) + 1;
      const response =  await omdb.get(`?s=${params.get("q")}&page=${pageNo}`);

      if(response.data.Response === "False") {
        if(pageNo === 1) {
          navigate("/404");
        } else {
          return;
        }
      }

      setTotalRecords(response.data.totalResults);
      setList((orignalList) => {
        return [ ...orignalList, ...response.data.Search ];
      });
    })();
  }

  return (
    <>
      <Box p={5}>
        <Typography>{totalRecords} results found</Typography>

        <InfiniteScroll
          pageStart={1}
          loadMore={loadData}
          hasMore={(totalRecords === 0) || (list.length < totalRecords)}
          loader={<Loader key={0} />}
        >
          <Stack spacing={3} mt={1} mb={3}>
          {list.map((e, idx) => {
            return <SingleSearchCard data={e} key={idx} />
          })}
          </Stack>
          </InfiniteScroll>
      </Box>
    </>
  )
}

export default Search;