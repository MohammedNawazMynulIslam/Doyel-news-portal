import { Box, Container } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png"

const Header = () => {
    return (
        <Box>
            <Container>
                <Image src={headingImage} width={500} height={500} alt="logo"></Image>
            </Container>

        </Box>
    );
};

export default Header;