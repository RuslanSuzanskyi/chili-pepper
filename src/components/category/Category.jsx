import React from 'react';
import { Toolbar, Typography, Button, List, ListItem } from '@mui/material';

const Category = ({ categories, onSelectCategory, selectedCategory }) => {
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
          }}
        >
          <ListItem
            sx={{
              p: '0'
            }}
          >
            <Button
              onClick={() => onSelectCategory(null)}
              className={selectedCategory === null ? 'active' : ''}
              sx={{
                backgroundColor: selectedCategory === null ? 'var(--black-rgba-15-color)' : 'transparent',
                color: 'var(--black-80-color)',
                p: '4 12px !imporant',
                width: '100%',
                justifyContent: 'start',
                textTransform: 'none',
                fontSize: '18px',
                fontFamily: 'var(--font-famiry-primary)',
                '&:hover': {
                  backgroundColor: 'var(--black-rgba-15-color)'
                }
              }}
            >
              Усі товари
            </Button>
          </ListItem> 
          {categories.map((category) => (
            <ListItem
              sx={{
                p: '0'
              }}
            >
              <Button
                key={category.id}
                sx={{
                  backgroundColor: selectedCategory === category.id ? 'var(--black-rgba-15-color)' : 'transparent',
                  color: 'var(--black-80-color)',
                  p: '4 12px',
                  width: '100%',
                  justifyContent: 'start',
                  textTransform: 'none',
                  fontSize: '18px',
                  fontFamily: 'var(--font-famiry-primary)',
                  '&:hover': {
                    backgroundColor: 'var(--black-rgba-15-color)'
                  }
                }}
                onClick={() => onSelectCategory(category.id)}
                className={selectedCategory === category.id ? 'active' : ''}
              >
                {category.name}
              </Button>  
            </ListItem>
          ))}
        </List>
      </Toolbar>
  );
};

export default Category;
