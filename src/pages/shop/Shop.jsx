import { Box, Container } from "@mui/material";
import { categories, products } from "../../utils/constants";
import CategoryList from "../../components/categoryList/CategoryList";
import { useState, useEffect } from "react";
import ProductList from "../../components/productList/ProductList";
import ProductSort from "../../components/productSort/ProductSort";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

const ProductsPerPage = 18;

const Shop = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSort, setSelectedSort] = useState('rating');

  // Filtrering products by categories
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.categoryId === selectedCategory)
    : products;

  // Sorting filtered products
  const sortFunctions = {
    rating: (a, b) => b.rating - a.rating,
    priceLow: (a, b) => a.price - b.price,
    priceHigh: (a, b) => b.price - a.price
  };
  const sortedProducts = [...filteredProducts].sort(sortFunctions[selectedSort] || (() => 0));

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / ProductsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * ProductsPerPage,
    currentPage * ProductsPerPage
  );

  // Refresh page in URL when page changes
  useEffect(() => {
    const newPath = currentPage > 1 ? `/shop/page/${currentPage}` : "/shop";
    if (window.location.pathname !== newPath) {
      navigate(newPath);
    }
  }, [currentPage, navigate]);

  // Page change handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (  
    <Container className="custom-container">
      <Box 
        display="flex" 
        justifyContent="flex-end"
        marginTop="16px"
        position="sticky"
      >
        <ProductSort selectedSort={selectedSort} onSortChange={setSelectedSort} />
      </Box>
      <Box 
        display="flex" 
        justifyContent="space-between"
        sx={{
          '@media (max-width: 768px)': {
            flexDirection: 'column'
          }
        }}
      >
        <Box position="relative">
          <CategoryList
            categories={categories}
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            selectedCategory={selectedCategory}
          />
        </Box>
        
        <Box
          width="80%"
          position="relative" 
          sx={{
            display: 'grid',
            overflow: 'hidden',
            gridTemplateColumns: 'repeat(3, 1fr)',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              width: '100%'
            },
            '@media (max-width: 600px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
          }}
        >
          <ProductList products={paginatedProducts} />
        </Box>
      </Box>

      {totalPages > 1 && (
        <Box
          display="flex" 
          justifyContent="center" 
          mt={3}
        >
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Box>
        
      )}
    </Container>
  );
};

export default Shop;
