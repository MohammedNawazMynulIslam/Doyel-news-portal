import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import React from 'react';
import { Instagram } from '@mui/icons-material';
import Link from 'next/link';

const Footer = () => {
    const navItems = [
        {
            route:"Home",
            pathname:"/",
        },
        {
            route:"Pages",
            pathname:"/pages",
        },
        {
            route:"Category",
            pathname:"/category",
        },
        {
            route:"News",
            pathname:"/news",
        },
        {
            route:"Post",
            pathname:"/post",
        },
        {
            route:"Contact",
            pathname:"/contact",
        }
    ];
    return (
        <Box className = "bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center" sx={{
            "& svg":{color:"white"},}}>


                <IconButton>
                <FacebookIcon/>
                </IconButton>
                <IconButton><Instagram/></IconButton>
                <IconButton><TwitterIcon/></IconButton>
                <IconButton><YouTubeIcon/></IconButton>
                <IconButton><LinkedInIcon/></IconButton>



                <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link href={item.pathname} key={item.route}>
                <Button  className = "text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          </Box>
          <Typography variant='body2' color="gray" textAlign="center">@2023 Doyal News. Design by Mynul Islam</Typography>
          </Container>
        </Box>
    );
};

export default Footer;