import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material";
import { categories, products } from "../../utils/constants";
import { useNavigate, useParams, Link as RouterLink } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import ProductList from "../../components/productList/ProductList";
import ProductSort from "../../components/productSort/ProductSort";
import Pagination from "../../components/pagination/Pagination";

const ProductsPerPage = 18;

const Category = () => {
  const { slug } = useParams();
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [selectedSort, setSelectedSort] = useState('rating');
  const category = categories.find((cat) => cat.slug === slug);

  // Filtrering products by categories
  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.categoryId === category.id);
  }, [category]);

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
    const newPath = currentPage > 1 ? `/shop/category/${slug}/page/${currentPage}` : `/shop/category/${slug}`;
    if (window.location.pathname !== newPath) {
      navigate(newPath);
    }
  }, [currentPage, navigate, slug]);

  // Page change handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
      <Container className="custom-container">
        <Breadcrumbs 
          aria-label="breadcrumb" 
          sx={{ 
            my: 2 
          }}
        >
          <Link 
            component={RouterLink} 
            to="/shop" 
            underline="none" 
            color="inherit"
            fontFamily="var(--font-family-primary)"
          >
            Магазин
          </Link>
          <Typography 
            color="text.primary"
            fontFamily="var(--font-family-primary)"
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
            overflow: 'hidden',
            gridTemplateColumns: 'repeat(3, 1fr)',
            '@media (max-width: 600px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
          }}
        >
          <ProductList 
            products={paginatedProducts}
          />
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

export default Category;
