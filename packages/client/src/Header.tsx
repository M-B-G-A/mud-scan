import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#ffffff" }} elevation={0}>
        <Toolbar style={{ height: "100px" }}>
            <img src="../resources/app_icon.png" style={{ height: "55px", width: "55px" }} />
            <Typography style={{ color: "#000000", marginLeft: "14px", verticalAlign: "center" }}>
                Mud SCAN
            </Typography>
        </Toolbar>
    </AppBar>
  );
};
