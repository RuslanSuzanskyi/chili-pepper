import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (  
    <Container className="custom-container">
      <Box 
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <Link to='shop'>
          hello
        </Link>
      </Box>
    </Container>
  );
}
 
export default Home;