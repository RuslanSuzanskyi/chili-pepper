import React from 'react';
import { Toolbar, Typography, List, ListItem, Link  } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

const Category = ({ categories, selectedCategory}) => {
  return (
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 !important',
          position: 'sticky',
          top: '10vh',
        }}
      >
        <Typography variant="h5" 
          sx={{
            p: '4 12px !imporant'
          }}
        >
          Категорії товарів
        </Typography>
        <List
          sx={{ 
            display: 'flex',
            flexDirection: 'column', 
            '@media (max-width: 768px)': {
              flexDirection: 'row'
            }
          }}
        > 
          {categories.map(({name, id, slug}) => (
            <ListItem
              sx={{
                p: '0'
              }}
            >
              <Link
                component={RouterLink}
                to={id === null ? "/shop" : `category/${slug}`}
                sx={{
                  textDecoration: 'none',
                  height: '32px',
                  backgroundColor: selectedCategory === id ? 'var(--black-rgba-15-color)' : 'transparent',
                  color: 'var(--black-80-color)',
                  p: '4px 12px !important',
                  width: '100%',
                  justifyContent: 'start',
                  textTransform: 'none',
                  fontSize: '18px',
                  fontFamily: 'var(--font-famiry-primary)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'var(--black-rgba-15-color)',
                  }
                }}
              >
                {name}
              </Link>    
            </ListItem>
          ))}
        </List>
      </Toolbar>
  );
};

export default Category;
