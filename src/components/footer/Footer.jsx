import { Box, Container } from "@mui/material";
import React from "react";

const Footer = React.memo(() => {
  return (  
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid var(--black-rgba-15-color)',
        py: '80px'
      }}
    >
      <Container className="custom-container">
        <h1>footer</h1>
      </Container>
    </Box>
  );
})
 
export default Footer;