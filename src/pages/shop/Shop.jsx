import { Box, Container } from "@mui/material";
import { categories, products } from "../../utils/constants";
import CategoryList from "../../components/categoryList/CategoryList";
import { useState } from "react";
import ProductList from "../../components/productList/ProductList";
import ProductSort from "../../components/productSort/ProductSort";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSort, setSelectedSort] = useState('rating');

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.categoryId === selectedCategory)
    : products;

  const sortFunctions = {
    rating: (a, b) => b.rating - a.rating,
    priceLow: (a, b) => a.price - b.price,
    priceHigh: (a, b) => b.price - a.price
  };

  const sortedProducts = [...filteredProducts].sort(sortFunctions[selectedSort] || (() => 0));

  return (  
    <Container className="custom-container">
      <Box 
        display="flex"
        justifyContent="flex-end"
      >
        <ProductSort selectedSort={selectedSort} onSortChange={setSelectedSort} />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box position="relative">
          <CategoryList
            categories={categories}
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </Box>
        
        <Box
          width="80%"
          position="relative" 
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
        
      </Box>
    </Container>
  );
}

export default Shop;
