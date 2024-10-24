import { Box, Container } from "@mui/material";
import { categories, products } from "../../utils/constants";
import Category from "../../components/category/Category";
import { useState } from "react";
import ProductList from "../../components/productList/ProductList";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory 
  ? products.filter(product => product.categoryId === selectedCategory)
  : products;

  return (  
    <Container className="custom-container">
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box
          position="relative"
        >
          <Category 
            categories={categories}
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </Box>
        
        <ProductList 
          products={filteredProducts}
        />
      </Box>
    </Container>
  );
}
 
export default Shop;