import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material";
import { categories, products } from "../../utils/constants";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useMemo, useState } from "react";
import ProductList from "../../components/productList/ProductList";
import ProductSort from "../../components/productSort/ProductSort";

const Category = () => {
  const { slug } = useParams();
  const [selectedSort, setSelectedSort] = useState('rating');

  const category = categories.find((cat) => cat.slug === slug);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.categoryId === category.id);
  }, [category]);

  const sortFunctions = {
    rating: (a, b) => b.rating - a.rating,
    priceLow: (a, b) => a.price - b.price,
    priceHigh: (a, b) => b.price - a.price
  };

  const sortedProducts = [...filteredProducts].sort(sortFunctions[selectedSort] || (() => 0));

  return (
    <Box>
      <Container className="custom-container">
        <Breadcrumbs 
          aria-label="breadcrumb" 
          sx={{ my: 2 }}
        >
          <Link 
            component={RouterLink} 
            to="/shop" 
            underline="none" 
            color="inherit"
          >
            Магазин
          </Link>
          <Typography 
            color="text.primary"
          >
            {category.name}
          </Typography>
        </Breadcrumbs>

        <Typography 
          variant="h1"
          textAlign="left"
          fontFamily="var(--font-family-primary)"
          fontWeight="700"
          mb="24px"
          fontSize="36px"
        >
          {category.name}
        </Typography>

        <Box 
          display="flex"
          justifyContent="flex-end"
        >
          <ProductSort selectedSort={selectedSort} onSortChange={setSelectedSort} />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            overflow: 'hidden'
          }}
        >
          <ProductList 
            products={sortedProducts}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Category;
