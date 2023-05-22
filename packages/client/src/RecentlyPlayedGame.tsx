import { Container, List, ListItem, ListItemText, alpha } from '@mui/material';
import { useMUD } from "./MUDContext";
import { useComponentValue, useRows } from "@latticexyz/react";
import React from 'react';

function truncateMiddle(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text;
    }

    const ellipsis = '...';
    const truncatedLength = maxLength - ellipsis.length;
    const startLength = Math.ceil(truncatedLength / 2);
    const endLength = Math.floor(truncatedLength / 2);

    const truncatedText =
        text.substr(0, startLength) + ellipsis + text.substr(-endLength);

    return truncatedText;
}

export const RecentlyPlayedGame = () => {
    const {
        components: { Achievements },
        systemCalls: { setAchievement },
        network: { playerEntity, network, storeCache },
    } = useMUD();

    const achievements = useRows(storeCache, { table: "Achievements" });

    return (
        <List style={{ width: "100%", height: "100%", backgroundColor: "#ffffff", marginTop: "21px", borderRadius: "15px" }}>

        </List>
    );
};
