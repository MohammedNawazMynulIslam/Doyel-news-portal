import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png"
import { getCurrentDate } from "../ui/getCurrentDate";

const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box className="w-full ">
            <Container>
                <Image src={headingImage} width={500} height={500} alt="logo" className="mx-auto text-center"></Image>
                <Typography className="text-center">
                    The Dragon News is a digital news outlet that focuses on the latest trends and events in the world of technology. We provide you
                </Typography>
                <Typography className="text-center">
                {currentDate}
                </Typography>
            </Container>

        </Box>
    );
};

export default Header;