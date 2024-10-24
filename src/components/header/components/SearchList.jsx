import { List, Link, ListItem } from "@mui/material";
import { products } from "../../../utils/constants";

const SearchList = ({ input, onSearch }) => {
  const filteredProducts = products.filter(item => {
    const searchTerm = input.toLowerCase();
    const fullName = item.title.toLowerCase();
    return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
  });

  const handleItemClick = (title) => {
    onSearch(title);
  };

  if (!input || filteredProducts.length === 0) {
    return null;
  }

  return (
    <List className="dropdown">
      {filteredProducts.map((item) => (
        <ListItem 
          onClick={() => handleItemClick(item.title)}
          key={item.id} 
          sx={{
            alignItems: "center",
            padding: "0",
            '&:hover': {
              backgroundColor: 'var(--black-rgba-15-color)'
            }
          }}
        >
          <Link
            onClick={() => onSearch(item.title)}
            href={`/${item.slug}`} 
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontFamily: "Open Sans",
              textAlign: "start",
              width: "100%",
              lineHeight: "32px",
              padding: "0 16px",
            }}
          >
            {item.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default SearchList;
