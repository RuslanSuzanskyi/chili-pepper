import { useState } from "react";
import { products } from "../../utils/constants";
import { Box, Button, TextField, Typography } from "@mui/material";
import LazyImage from "../lazyImage/LazyImage";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";
import { removeFromCart } from "../stores/cart";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CartItem = (props) => {
  const { productId, quantity } = props.data;

  const product = products.find(p => p.id === productId);

  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const handleMinusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity - 1
    }));
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1
    }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ 
      productId: productId, 
    }));
    setIsAdded(false);
  };

  const handleChangeQuantity = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value) || 1);
    dispatch(changeQuantity({
      productId: productId,
      quantity: newQuantity
    }));
  };

  return (  
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border="1px solid var(--black-rgba-15-color)"
      borderRadius="8px"
      sx={{
        padding: '24px 24px',
        '& + &': {
          mt: '24px'
        }
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        position="relative"
      >
        <div className="image__wrapper-cartTab">
          <LazyImage 
            image={product.image}
          /> 
        </div>
        
        <Typography
          variant="h3"
          fontFamily="Open Sans"
          sx={{
            fontSize: '14px'
          }}
        >
          {product.title}
        </Typography>
        <Button onClick={handleRemoveFromCart}
          sx={{
            position: 'absolute',
            top: '0',
            right: '0',
            backgroundColor: 'transparent',
            minWidth: '40px',
            minHeight: '40px',
            padding: '0',
            '&:hover': {
              backgroundColor: 'transparent',
              color: 'var(--red-color)'
            }
          }}
        >
          <DeleteForeverIcon />
        </Button>  
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          sx={{
            minWidth: '40px',
            minHeight: '40px',
            padding: '0',
            '&:hover': {
               color: quantity > 1 ? 'var(--white-90-color)' : 'inherit'
            },
            opacity: quantity > 1 ? 1 : 0.5,
          }} 
          onClick={handleMinusQuantity}
          disabled={quantity <= 1}
        >
          <RemoveIcon />
        </Button>
        <TextField
          className="cart-counter"
          type="number"
          value={quantity}
          onChange={handleChangeQuantity}
          sx={{
            margin: '0 4px',
            '& .MuiInputBase-input': {
              textAlign: 'center',
              '-webkit-appearance': 'none',
              '-moz-appearance': 'textfield',
            },
          }}
          inputProps={{
            min: 1,
            style: {
              textAlign: 'center',
              width: '40px',
              padding: '8px',
              border: 'none'
            }
          }}
        />
        <Button
          sx={{
            minWidth: '40px',
            minHeight: '40px',
            padding: '0',
            '&:hover': {
              color: 'var(--white-90-color)'
            }
          }} 
          onClick={handlePlusQuantity}
        >
          <AddIcon />
        </Button>
        <Typography
          variant="h3"
          fontSize="22px"
          padding="0 16px"
          fontFamily='var(--font-family-price)'
        >
          {`${(product.price * quantity).toFixed(2)} ₴`}
        </Typography>
      </Box>
    </Box>
  );
}
 
export default CartItem;