import React, { useEffect, useState } from "react";
import { AppBar, Container, List, ListItem, Link, Box, IconButton, Badge, Drawer} from "@mui/material";
import { menu } from "../../utils/constants";
import SearchBar from "./components/SearchBar";
import { ShoppingCart } from "@mui/icons-material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/abstacts/_variables.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/cart";

const Header = React.memo(() => {
  const carts = useSelector(store => store.cart.items);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [carts]);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 15) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {  
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (  
    <AppBar 
      className={`header !important ${scrolled ? 'scrolled' : ''}`}
      position="sticky"
      elevation={0}
      sx={{
        zIndex: '100',
        color: 'var(--black-80-color)',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.7)' : 'rgb(0, 0, 0)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out',
      }}
    >
      <Container className="custom-container">
        <nav>
          <Box display="flex" justifyContent="space-between">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <List>
              <Box 
                display="flex" 
                justifyContent="space-between"
                sx={{
                  display: { xs: 'none', md: 'flex'},
                  alignItems: 'center',
                  mr: 2
                }}
              >
                {menu.map(({ link, name }) =>
                  <ListItem
                    sx={{
                      alignItems: 'center',
                      px: '0',
                      '& + &': {
                        marginLeft: '32px',
                      },
                    }}
                  >
                    <Link 
                      href={`/${link}`}
                      underline="none"
                      sx={{
                        margin: '0',
                        color: 'var(--white-90-color)',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: "var(--orange-color)"
                        },
                      }}
                    >
                      { name }
                    </Link>
                  </ListItem>
                )} 
              </Box>
            </List>
            <Drawer
              anchor="left" 
              open={open} 
              onClose={handleDrawerClose}
            >
              <IconButton
                edge="start"
                onClick={handleDrawerClose}
              >
                <MenuIcon />
              </IconButton>
              <List>
                {menu.map(({ link, name }) =>
                  <ListItem
                    sx={{
                      padding: '8px 32px'
                    }}
                  >
                    <Link 
                      href={`/${link}`}
                      underline="none"
                    >
                      { name }
                    </Link>
                  </ListItem>
                )}  
              </List>
            </Drawer>
            <SearchBar />
            <Box 
              display="flex" 
              justifyContent="space-between"
              sx={{
                ml: 2
              }}
            >
              <IconButton
                onClick={handleOpenTabCart}
                sx={{
                  borderRadius: '0',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'var(--white-rgba-25-color)'
                  }
                }}
              >
                <Badge badgeContent={totalQuantity}
                  showZero
                  sx={{
                    color: 'var(--white-90-color)',
                  }}
                >
                  <ShoppingCart
                    fontSize="large" 
                    sx={{
                      color: 'var(--white-90-color)',
                    }}
                  />
                </Badge>
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: '0',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'var(--white-rgba-25-color)'
                  }
                }}
              >
                <PermIdentityOutlinedIcon
                  fontSize="large" 
                  sx={{
                    color: 'var(--white-90-color)',
                  }}
                />
              </IconButton>    
            </Box >
          </Box>
        </nav>
      </Container>
    </AppBar>
  );
})
 
export default Header;