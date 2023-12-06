import { getCategoryNews } from '@/utils/getCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const DynamicPage = async ({params,searchParams}) => {
    // console.log(searchParams);
    const {data} = await getCategoryNews(searchParams.category)
    console.log(data);
    // console.log(params.id);
    return (
        <div>
            <h1>Dynamic Page {searchParams.category} news:{data.length}</h1>

        {/* grid */}
        <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

  {
    data.map(news=>(
        <Grid key={news.id} item xs={6}>
         <Card>
      <CardActionArea>
        <CardMedia>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] text-center rounded-lg p-1 bg-red-500 text-white'>
            {news.category}
            </p>
          <Typography gutterBottom >
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography className='my-3' color="text.secondary">
          By Awlad Hossain - Mar 18 2023
          </Typography>
          <Typography>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
  </Grid>
    ))
  }



</Grid>


        </div>
    );
};

export default DynamicPage;