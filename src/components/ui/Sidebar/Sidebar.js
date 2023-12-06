"use client"
import { Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import sideBar from "@/assets/sidebar.png"
import styled from "@emotion/styled";
import sidenews from "@/assets/sidebarnews.png"
import newsimage from "@/assets/pic.png"

const Sidebar = () => {
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });
    return (
        <Box className="mt-6">
              <Card>
      <CardActionArea>
        <CardMedia><Image src={sideBar} alt='top news' width={800}></Image>
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
        {/* side news */}
        <Paper className="mt-6 mb-3"
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Image src={sidenews} alt='top news' width={100} >
          </Image>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle2" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography variant="body2" gutterBottom>
              Mar 18 2023
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
        </Paper>
        <hr/>
        <Paper className="mt-6 mb-3"
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Image src={sidenews} alt='top news' width={100} >
          </Image>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle2" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography variant="body2" gutterBottom>
              Mar 18 2023
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
        </Paper>
        <hr/>
        <Paper className="mt-6 mb-3"
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Image src={sidenews} alt='top news' width={100} >
          </Image>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle2" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography variant="body2" gutterBottom>
              Mar 18 2023
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
        </Paper>
        <hr/>
        <Paper className="mt-6 mb-3"
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Image src={sidenews} alt='top news' width={100} >
          </Image>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle2" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography variant="body2" gutterBottom>
              Mar 18 2023
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
        </Paper>
        <hr/>
        <Paper className="mt-6 mb-3"
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Image src={sidenews} alt='top news' width={100} >
          </Image>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle2" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography variant="body2" gutterBottom>
              Mar 18 2023
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
        </Paper>
        <hr/>
        <Image src={newsimage} width={280}  alt="image"></Image>

        </Box>
    );
};

export default Sidebar;