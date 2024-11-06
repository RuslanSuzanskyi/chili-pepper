import { Box, Grid, Container, Typography, Divider } from "@mui/material";
import ProductList from "../../components/productList/ProductList";
import { products } from "../../utils/constants";

const Home = () => {
  const recommendedProducts = products.filter(product => product.recommended);
  const popularProducts = products.filter(product => product.popularity > 80);

  return (  
    <Container className="custom-container">
      <Box>
        <Box
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="h1"
            textAlign="left"
            fontFamily="var(--font-family-primary)"
            fontWeight="700"
            fontSize="36px"
            mb="24px"
          >
            Рекомендовані товари
          </Typography>
          <Grid
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              overflow: 'hidden'
            }}
          >
            <ProductList 
              products={recommendedProducts}
            />  
          </Grid>
        </Box>
        <Divider 
          sx={{
            my: 4,
            borderColor: 'var(--black-rgba-15-color)'
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="h1"
            textAlign="left"
            fontFamily="var(--font-family-primary)"
            fontWeight="700"
            mb="24px"
            fontSize="36px"
          >
            Популярні товари
          </Typography>
          <Grid
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              overflow: 'hidden'
            }}
          >
            <ProductList 
              products={popularProducts}
            />  
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
 
export default Home;