import { getSpecificNews } from '@/utils/getSpecificNews';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const NewsDetailPage = async({params}) => {
    const {data :news}= await getSpecificNews(params.newsId)
    // console.log(data);
    return (
        <Box className="my-5">
            <Container>
            <Grid container spacing={2}>
                <Grid item lg={6}>
                <Image src={news.thumbnail_url} height={500} width={800} alt='news img'></Image>

                <Grid container spacing={2} className='mt-2'>
                <Grid item lg={6}>
                <Image src={news.image_url} height={500} width={800} alt='news img'></Image>
                </Grid>
                <Grid item lg={6}>
                <Image src={news.image_url} height={500} width={800} alt='news img'></Image>
                </Grid>

            </Grid>
                </Grid>
                <Grid item lg={6}>
                <Typography variant='h5' component={"h2"}>{news.title}</Typography>
                <Box sx={{display:"flex",gap:3,alignItems:"center"}}>
                <Avatar alt="Remy Sharp" src={news.author.img} />
                <Typography >By {news.author.name}</Typography>
                <Typography >Published:-{news.author.published_date}</Typography>
                </Box>
                <Typography style={{textAlign:"justify", whiteSpace:"pre-line", margin:"10px 0px", color:"gray"}}>{news.details}</Typography>
                <Typography variant='h6'>
                    `` Many desktop publishing packages and web pages editor now use as their default modal text``
                </Typography>
                <Typography variant='h6'>--Mynul Islam</Typography>
                </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailPage;