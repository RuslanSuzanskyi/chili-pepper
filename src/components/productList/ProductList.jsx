import { Box } from '@mui/material';
import ProductCard from '../productCard/ProductCard';

const ProductList = ({ products }) => {
  return (  
    <Box
      maxWidth="80%"
      position="relative" 
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {products.map((product, key)=> (
        <ProductCard
          data={product}
          key={key}
        />
      ))}
    </Box>
  );
}
 
export default ProductList;