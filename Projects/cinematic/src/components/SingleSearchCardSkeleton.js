import * as React from 'react';
import {Card, Stack, Skeleton, CardContent} from '@mui/material';


const SingleSearchCardSkeleton = _ => {
  
  return (
    <Card sx={{ display: 'flex' }}>
      <Skeleton variant="rectangular" width={126} height={180} animation="wave" />
      

        <CardContent>
          <Stack spacing={1} alignItems="flex-start"  justifyContent="flex-start">
             <Skeleton width="50ch" height="2.5rem" animation="wave" />
             <Skeleton width="50%" height="1.5rem" animation="wave" />
             <Skeleton width="10ch" height="2rem" animation="wave" />
          </Stack>
        </CardContent>
    </Card>
  );
}

export default SingleSearchCardSkeleton;