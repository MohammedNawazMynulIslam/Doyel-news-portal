import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNews from "@/assets/topnews.png"
import topNews2 from "@/assets/topnews2.png"
import Image from 'next/image';

const LatestNews = () => {
    return (
        <Box className="mt-6">
        <Card>
      <CardActionArea>
        <CardMedia><Image src={topNews} alt='top news' width={800}></Image>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] text-center rounded-lg p-1 bg-red-500 text-white'>
            Technology
            </p>
          <Typography gutterBottom variant='h5'>
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
        {/* cards */}
        <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

  <Grid item xs={6}>
         <Card>
      <CardActionArea>
        <CardMedia><Image src={topNews2} alt='top news' width={800}></Image>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] text-center rounded-lg p-1 bg-red-500 text-white'>
            Technology
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

  <Grid item xs={6}>
         <Card>
      <CardActionArea>
        <CardMedia><Image src={topNews2} alt='top news' width={800}></Image>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] text-center rounded-lg p-1 bg-red-500 text-white'>
            Technology
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

  <Grid item xs={6}>
         <Card>
      <CardActionArea>
        <CardMedia><Image src={topNews2} alt='top news' width={800}></Image>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] text-center rounded-lg p-1 bg-red-500 text-white'>
            Technology
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

  <Grid item xs={6}>
         <Card>
      <CardActionArea>
        <CardMedia><Image src={topNews2} alt='top news' width={800}></Image>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] text-center rounded-lg p-1 bg-red-500 text-white'>
            Technology
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

        </Grid>
    </Box>
    );
};

export default LatestNews;