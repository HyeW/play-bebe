import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CribIcon from '@mui/icons-material/Crib';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {MenuBarAction} from "./MenuBarReducer";

const pages = ['어디 갈까', '회원 리뷰'];
const settings = ['회원가입', '로그인'];

function MenuBar() {
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(MenuBarAction.setAnchorElementUser(event.currentTarget));
  };
  const handleCloseUserMenu = () => {
    dispatch(MenuBarAction.setAnchorElementUser(null));
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(MenuBarAction.setAnchorElementNav(event.currentTarget));
  };
  const handleCloseNavMenu = () => {
    dispatch(MenuBarAction.setAnchorElementNav(null));
  };

  return (
    <AppBar position="sticky" sx={{boxShadow: 0, borderBottom: "1px solid", borderBottomColor: "primary.dark"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoMD/>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}/>
          <NavMenuMD handleCloseNavMenu={handleCloseNavMenu}/>
          <UserMenuMD handleCloseUserMenu={handleCloseUserMenu}/>

          <NavMenuXS handleOpenNavMenu={handleOpenNavMenu} handleCloseNavMenu={handleCloseNavMenu}/>
          <LogoXS/>
          <UserMenuXS handleOpenUserMenu={handleOpenUserMenu} handleCloseUserMenu={handleCloseUserMenu}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const LogoMD = () => {
  return (
    <>
      <CribIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: {xs: 'none', md: 'flex'},
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        플레이베베
      </Typography>
    </>
  );
};

const LogoXS = () => {
  return (
    <>
      <CribIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: {xs: 'flex', md: 'none'},
          flexGrow: 1,
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        플레이베베
      </Typography>
    </>
  );
};

interface NavMenuProps {
  handleOpenNavMenu?: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
}

const NavMenuMD = ({handleCloseNavMenu}: NavMenuProps) => {
  return (
    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{mx: 3, my: 2, color: 'inherit', display: 'block'}}
        >
          <Typography>{page}</Typography>
        </Button>
      ))}
    </Box>
  );
};

const NavMenuXS = ({handleOpenNavMenu, handleCloseNavMenu}: NavMenuProps) => {
  const anchorElementNav = useSelector((state: RootState) => state.MenuBarReducer.anchorElementNav);

  return (
    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon/>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElementNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElementNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: {xs: 'block', md: 'none'},
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

interface UserMenuProps {
  handleOpenUserMenu?: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
}

const UserMenuMD = ({handleCloseUserMenu}: UserMenuProps) => {
  return (
    <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
      {settings.map((setting) => (
        <Button key={setting} onClick={handleCloseUserMenu}
                sx={{my: 2, color: 'inherit', display: 'block'}}>
          {setting}
        </Button>
      ))}
    </Box>
  );
};

const UserMenuXS = ({handleOpenUserMenu, handleCloseUserMenu}: UserMenuProps) => {
  const anchorElementUser = useSelector((state: RootState) => state.MenuBarReducer.anchorElementUser);

  return (
    <Box sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}}}>
      <IconButton
        size="large"
        onClick={handleOpenUserMenu}
        color="inherit"
      >
        <AccountCircle/>
      </IconButton>
      <Menu
        sx={{mt: '45px'}}
        id="menu-appbar"
        anchorEl={anchorElementUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElementUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MenuBar;