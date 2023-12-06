import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNews from "@/assets/topnews.png"
import topNews2 from "@/assets/topnews2.png"
import Image from 'next/image';
import { getAllNews } from '@/utils/getAllNews';

const LatestNews = async() => {
  const{data} = await getAllNews();
    return (
        <Box className="mt-6">
        <Card>
      <CardActionArea>
        <CardMedia><Image src={data[0].thumbnail_url} alt='top news' width={800} height={500}></Image>
        </CardMedia>
        <CardContent>
            <p className='w-[100px] text-center rounded-lg p-1 bg-red-500 text-white'>
            {data[0].category}
            </p>
          <Typography gutterBottom variant='h5'>
          {data[0].title}
          </Typography>
          <Typography className='my-3' color="text.secondary">
          By {data[0].author.name} - {data[0].author.published_date}
          </Typography>
          <Typography>
          {data[0].details.length>200? data[0].details.slice(0,200)+"......":data[0].details}
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
        {/* cards */}
        <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

{
  data.slice(0,4).map(news=>(
    <Grid key={news._id} item xs={6}>
    <Card>
 <CardActionArea>
   <CardMedia><Image src={news.thumbnail_url} alt='top news' width={800} height={300}></Image>
   </CardMedia>
   <CardContent>
       <p className='w-[100px] text-center rounded-lg p-1 bg-red-500 text-white'>

       </p>
     <Typography gutterBottom >
     {news.category}
     </Typography>
     <Typography className='my-3' color="text.secondary">
     By {news.title} - Mar 18 2023
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
    </Box>
    );
};

export default LatestNews;