import { Container, List, ListItem, ListItemText, alpha } from '@mui/material';
import { useMUD } from "./MUDContext";
import { useComponentValue, useRows } from "@latticexyz/react";
import React from 'react';

export const RecentlyPlayedGame = () => {
    return (
        <List style={{ width: "100%", height: "100%", backgroundColor: "#ffffff", marginTop: "21px", borderRadius: "15px" }}>
            <ListItem style={{
                height: "91px",
                width: "90%",
                backgroundColor: "rgba(230, 233, 241, 0.35)",
                borderRadius: "15px",
                display: "flex",
                marginLeft: "24px",
                marginTop: "16px"
            }}>
                {/* TODO */}
            </ListItem>
        </List>
    );
};
