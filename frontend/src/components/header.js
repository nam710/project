import { AppBar, Button, IconButton, InputBase, Toolbar } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Header = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
    return(
        <AppBar position="static">
        <Toolbar>
            <IconButton>
                <MenuIcon/>
            </IconButton>

            <Button component={Link}sx={{ "&.MuiButtonBase-root:hover": {
                color:'white'}}}  variant='outline' to='/home'>Home</Button>

            <Button component={Link}sx={{ "&.MuiButtonBase-root:hover": {
                color:'white'}}}  variant='outline' to='/register'>Register</Button>
            <Button component={Link} sx={{ "&.MuiButtonBase-root:hover": {
                color:'white'}}} variant='outline' to='/login'>Login</Button>
           
       <Button component={Link} sx={{ "&.MuiButtonBase-root:hover": {
                color:'white'}}} variant='outline' to='/chat'>Chat</Button>
               <Search>
         <SearchIconWrapper>
           <SearchIcon />
         </SearchIconWrapper>
         <StyledInputBase
           
           placeholder="Search…"
           inputProps={{ 'aria-label': 'search' }}
         />
       </Search>
        </Toolbar>
    </AppBar>

        
    )
}
export default Header;