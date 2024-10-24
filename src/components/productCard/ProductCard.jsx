import React, { useState, useEffect } from 'react';
import { categories } from '../../utils/constants';
import { Card, Typography, Box, CardMedia, IconButton } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import LazyImage from "../lazyImage/LazyImage";
import { useInView } from "react-intersection-observer";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCard = (props) => {
  const { title, price, image, slug, categoryId, id } = props.data;

  const carts = useSelector(store => store.cart.items);
  console.log(carts);
  const isProductInCart = carts.some(item => item.productId === id);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isAdded, setIsAdded] = useState(isProductInCart);

  const getCategoryNames = (categoryId) => {
    const category = categories.find(category => category.id === categoryId);
    return category ? category.name : 'Неизвестная категория';
  };

  useEffect(() => {
    setIsAdded(isProductInCart);
  }, [isProductInCart]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if(!isAdded) {
      dispatch(addToCart({
        productId: id,
        quantity: 1,
        price: price,
        image: image,
        category: categoryId
      }))
    }
    ;
    setIsAdded(true);
  };

  useEffect(() => {
    if (inView && !isLoaded) {
      setIsLoaded(true);
    }
  }, [inView, isLoaded]);

  const categoryNames = getCategoryNames(categoryId);

  return (
    <Box
      ref={ref}
      sx={{
        border: '1px solid transparent',

        '&:hover': {
          borderColor: 'rgba(0, 0, 0, 0.15)'
        },

        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out, border 0.3s ease-in-out',
        mb: 3,
        width: 'calc(100% / 3)',
        '@media (max-width: 768px)': {
          width: 'calc(100% / 2)',
        },
        '@media (max-width: 320px)': {
          width: 'calc(100% / 1)',
        }, 
      }}
    >
      <Card
        className='card'
        sx={{
          boxShadow: 'none',
        }}
      >
        <CardContent
          sx={{
            '&:last-child': {
              padding: 1,
            },
          }}
        >
          <Link key={slug} to={`/${slug}`} replace>
            <CardMedia
              sx={{
                width: "100%",
                height: "auto",
                aspectRatio: "1/1",
                objectFit: "cover",
                overflow: "hidden",
                mb: "10px"
              }}
            >
              <LazyImage
                image={image}
              />
            </CardMedia>
            <Typography
              sx={{
                width: "100%",
                textAlign: "left",
                minHeight: "24px",
                fontSize: "14",
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: "ellipsis",
                fontWeight: "bold",
                fontFamily: "Open Sans",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                width: "100%",
                textAlign: "left",
                minHeight: "24px",
                fontSize: "14",
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: "ellipsis",
              }}
            >
              {categoryNames}
            </Typography>
          </Link>
            <Box 
              display="flex" 
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "16",
                  textWrap: "nowrap",
                  fontWeight: "bold",
                  fontFamily: "Open Sans",
                }}
              >
                {`${price.toFixed(2)} грн`}
              </Typography>
              <IconButton
                sx={{
                  px: 1,
                  color: 'var(--white-90-color)',
                  borderRadius: '0'
                }}
                onClick={handleAddToCart}
              >
                {isAdded ? (
                  <ShoppingCartRoundedIcon 
                    sx={{ 
                      fontSize: 24,
                      fill: "var(--black-color)" 
                    }} 
                  />
                  ) : (
                  <ShoppingCartOutlinedIcon 
                    sx={{ 
                      fontSize: 24, 
                      fill: "var(--black-color)"
                    }} 
                  />
                )}
              </IconButton>
            </Box>  
          </CardContent>  
        </Card>
    </Box>  
  );
}
 
export default ProductCard;
