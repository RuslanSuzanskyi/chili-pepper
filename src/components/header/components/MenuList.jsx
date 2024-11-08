import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { menu } from "../../../utils/constants";

const MenuList = () => {
  return (
    <>
      {menu.length === 0 ? (
        <p>{`Щось не працює :(`}</p>
      ) : (
        menu.map(({ link, name }) =>
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
              component={RouterLink}
              to={`/${link}`}
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
        ) 
      )}
    </>  
    
  );
}
 
export default MenuList;