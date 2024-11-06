import { Select, MenuItem, FormControl } from '@mui/material';

const ProductSort = ({ selectedSort, onSortChange }) => {
  const sortLabels = {
    rating: 'За рейтингом',
    priceLow: 'Від дешевих до дорогих',
    priceHigh: 'Від дорогих до дешевих',
  };

  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <FormControl
      variant='standard'
      fullWidth 
      sx={{ 
        mb: 2,
        maxWidth: '220px',
      }}
    >
      <Select
        value={selectedSort}
        onChange={(e) => onSortChange(e.target.value)}
        label='Сортувати'
        width='100%'
      >
        <MenuItem value="rating">{sortLabels.rating}</MenuItem>
        <MenuItem value="priceLow">{sortLabels.priceLow}</MenuItem>
        <MenuItem value="priceHigh">{sortLabels.priceHigh}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ProductSort;
