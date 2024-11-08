import React from "react";
import { Box, Container, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = React.memo(() => {
  return (  
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid var(--black-rgba-15-color)',
        color: 'var(--black-80-color)',
        backgroundColor: 'transparent',
        padding: '20px',
        textAlign: 'center'
      }}
    >
      <Container className="custom-container">
        <Box
          mb={2}
        >
          <Link
            component={RouterLink}
          >
            footer
          </Link>
        </Box>
      </Container>
    </Box>
  );
})
 
export default Footer;