import { useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import { toggleStatusTab } from "../stores/cart";
import { products } from "../../utils/constants";
import Icon from "../icon/Icon";

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  }

  useEffect(() => {
    if (statusTab) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [statusTab]);

  if (!statusTab) return null;

  const totalPrice = carts.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    return total + (product.price * item.quantity);
  }, 0).toFixed(2);
  
  return (  
    <Box
      display="flex"
      position="fixed"
      left="0"
      right="0"
      top="0"
      bottom="0"
      alignItems="center"
      justifyContent="center"
      padding="0 16px"
      zIndex="100"
      margin="0 auto"
      sx={{
        backgroundColor: '#00000080',
        animation: '_show 0.2s ease-in-out',
      }}
    >
      <Container
        className="cart-tab__container"
        position="relative"
        sx={{
          backgroundColor: "var(--white-color)",
          borderRadius: '8px',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="space-between"
          borderBottom="1px solid var(--black-rgba-15-color)"
          position="sticky"
          zIndex="101"
          sx={{
            top: 0,
            backgroundColor: 'var(--white-color)',
            borderTopRightRadius: '8px',
            borderTopLeftRadius: '8px',
          }}
        >
          <Typography
            variant="h2"
            textAlign="start"
            fontFamily="Open Sans"
            sx={{
              padding: "16px 24px",
              fontSize: "24px",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            Кошик
          </Typography>
          <Button onClick={handleCloseTabCart}
            sx={{
              backgroundColor: 'transparent',
              minWidth: '60px',
              minHeight: '60px',
              padding: '0',
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'var(--red-color)'
              }
            }}
          >
            <CloseIcon />
          </Button>
        </Box>
        <Box
          display="flex"
          alignItems="start"
          justifyContent="space-between"
          flexDirection="column"
          position="relative"
          sx={{
            overflow: 'auto',
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              padding: "16px 16px",
              width: "100%",
              maxHeight: '90vh',
            }}
          >
            {Array.isArray(carts) && carts.length > 0 ? (
              <>
                {carts.map((item, key) => <CartItem key={key} data={item} />)}

                  <Box
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    mt={3}
                    position="sticky"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      pt: "16px",
                      pb: "24px",
                      position: 'sticky',
                      bottom: 0,
                      zIndex: "101",
                      backgroundColor: 'var(--white-color)',
                    }}
                  >
                    <Button onClick={handleCloseTabCart}
                      sx={{
                        textTransform: 'none',
                        fontSize: '16px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '8px',
                        padding: '1px 16px',
                        height: '40px',
                        '&:hover': {
                          backgroundColor: '#f5f5f5'
                        }
                      }}
                    >
                      Продовжити покупки
                    </Button>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      padding="24px"
                      border="1px solid var(--green-color)"
                      backgroundColor="var(--green-color-rgba-10)"
                      borderRadius='8px'
                    >
                      <Typography
                        variant="h4"
                        fontFamily="var(--font-family-price)"
                        sx={{
                          fontWeight: "400",
                          fontSize: "36px",
                          mr: 3
                        }}
                      >
                        {totalPrice} ₴
                      </Typography>
                      <Button 
                        variant="contained" 
                        sx={{
                          px: 2,
                          fontSize: '18px',
                          fontFamily: 'Open sans',
                          backgroundColor:"var(--green-color)",
                          color: "var(--white-90-color)",
                          '&:hover': {
                            backgroundColor: "var(--green-color-rgba)"
                          }
                        }}
                      >
                        Оформити замовлення
                      </Button>  
                    </Box>
                  </Box>  
              </>
            ) : (
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Icon   
                  name="cart-empty"
                  maxWidth="240px"
                  height="240px"
                  fill="var(--green-color)"
                />
                <Typography
                  variant="h4"
                  fontSize="24px"
                  fontWeight="var(--font-weight-bold)"
                  fontFamily="Open Sans"
                  textAlign="center"
                  sx={{
                    mb: 2,
                  }}
                >
                  Кошик порожній
                </Typography> 
              </Box>
            )}
          </Box>
        </Box> 
      </Container>
    </Box>
  );
}
 
export default CartTab;