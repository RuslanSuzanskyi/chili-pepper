import { useParams } from "react-router-dom";
import { products } from "../../utils/constants";
import { Container, Box, Typography, Button, Divider } from "@mui/material";
import Stack from '@mui/material/Stack';
import LazyImage from "../../components/lazyImage/LazyImage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../components/stores/cart";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { FacebookShareButton, TelegramShareButton, ViberShareButton, TwitterShareButton, FacebookIcon, TelegramIcon, ViberIcon, XIcon} from "react-share";

const Product = () => {
  const {slug} = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const product = products.find(p => p.slug === slug);
  const productUrl = `http://${product.slug}`;
  const productTitle = product.title;

  if (!product) {
    return <p>Product not found</p>;
  };

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQunatity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: product.id,
      quantity: quantity
    }));
  };

  return (
    <main>
      <Container className="custom-container">
      <Box 
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'start',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1',
              maxWidth: '730px',
              pr: '24px',
              '@media (max-width: 768px)': {
                pr: '0',
                width: '100%',
              },
            }}
          >
            <div className="image__wrapper">
              <LazyImage 
                image={product.image}
              />
            </div>
            <Box
              sx={{
                border: '1px solid var(--black-rgba-15-color)',
                borderRadius: '8px',
                p: '20px'
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 'var(--font-weight-bold)',
                  fontFamily: 'var(--font-family-primary)'
                }}
              >
                Характеристики
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "18px",
                  fontFamily: "var(--font-family-primary)",
                }}
              >
                {product.description}
              </Typography>  
            </Box>
          </Box>
          <Box 
            sx={{
              flex: '1',
              maxWidth: '730px',
              textAlign: 'left',
              pl: '24px',
              '@media (max-width: 768px)': {
                pl: '0',
              },
            }}
          >
            <Stack
              spacing={2}
            >
              <Box
                sx={{
                  border: '1px solid var(--black-rgba-15-color)',
                  borderRadius: '8px',
                  p: '20px',
                  mb: 2
                }}  
              >
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    fontSize: "30px",
                    fontFamily: "var(--font-family-primary)",
                    mb: 2
                  }}
                >
                  {product.title}
                </Typography>
                  
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    fontSize: "18px",
                    fontFamily: "var(--font-family-primary)",
                    mb: 2
                  }}
                >
                  {product.categoryId}
                </Typography>
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    fontSize: "20px",
                    fontWeight: 'var(--font-weight-bold)',
                    fontFamily: 'var(--font-family-price)',
                    mb: 2
                  }}
                >
                  {`${product.price.toFixed(2)} ₴`}
                </Typography>
                <Divider 
                  sx={{
                    mb: 2,
                    borderColor: 'var(--black-rgba-15-color)'
                  }}
                />
                <Box
                  display='flex'
                  flexDirection='row'
                >
                  <Button 
                    onClick={handleMinusQuantity}
                    sx={{
                      minWidth: '40px',
                      minHeight: '40px',
                      padding: '0',
                      '&:hover': {
                        color: 'var(--white-90-color)'
                      }
                    }}
                  >
                    <RemoveIcon />
                  </Button>
                  <span className="cart-counter">{quantity}</span>
                  <Button 
                    onClick={handlePlusQunatity}
                    sx={{
                      minWidth: '40px',
                      minHeight: '40px',
                      padding: '0',
                      '&:hover': {
                        color: 'var(--white-90-color)'
                      }
                    }}
                  >
                    <AddIcon />
                  </Button>
                  <Button 
                    onClick={handleAddToCart}
                    variant="contained" 
                    sx={{
                      px: 2,
                      fontSize: '18px',
                      fontFamily: 'Open sans',
                      width: '238px',
                      padding: '0 16px',
                      backgroundColor:"var(--green-color)",
                      color: "var(--white-90-color)",
                      mx: "16px",
                      '&:hover': {
                        backgroundColor: "var(--green-color-rgba)"
                      }
                    }}
                  >
                    Додати в кошик
                  </Button>
                </Box>  
              </Box>
              <Box
                sx={{
                  border: '1px solid var(--black-rgba-15-color)',
                  borderRadius: '8px',
                  p: '20px'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 'var(--font-weight-bold)',
                    fontFamily: 'var(--font-family-primary)'
                  }}
                >
                  Опис
                </Typography>
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    fontSize: "18px",
                    fontFamily: "var(--font-family-primary)",
                  }}
                >
                  {product.description}
                </Typography>  
              </Box>
              <Box>
                <FacebookShareButton url={productUrl} quote={productTitle}>
                  <FacebookIcon />
                </FacebookShareButton>
                <TelegramShareButton url={productUrl} quote={productTitle}>
                  <TelegramIcon />
                </TelegramShareButton>
                <ViberShareButton url={productUrl} quote={productTitle}>
                  <ViberIcon />
                </ViberShareButton >
                <TwitterShareButton url={productUrl} quote={productTitle}>
                  <XIcon />
                </TwitterShareButton>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </main> 
  );
}
 
export default Product;