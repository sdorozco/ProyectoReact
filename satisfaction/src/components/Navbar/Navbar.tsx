import { AppProps } from "@/redux/store";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useSelector } from "react-redux";
import CustomDialog, { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { FavoriteTable } from "./FavoriteTable";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  const stateFavorite = useSelector((store: AppProps) => store.favorites);


  const handleClick = () =>{
    dialogOpenSubject$.setSubject = true
  }
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Programing Test
          </Typography>
          <Button onClick={handleClick} variant="contained" aria-label="favorites" startIcon={<FavoriteIcon />}>
            open Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
