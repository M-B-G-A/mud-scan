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

export const TopUser = () => {
    const {
        components: { Achievements },
        systemCalls: { setAchievement },
        network: { playerEntity, network, storeCache },
    } = useMUD();

    const achievements = useRows(storeCache, { table: "Achievements" });

    return (
        <List style={{ width: "100%", height: "100%", backgroundColor: "#ffffff", marginTop: "21px", borderRadius: "15px" }}>
            {achievements.sort((a, b) => {
                return b.value.total - a.value.total
            })
                .map((data, index) => (
                    <ListItem style={{
                        height: "91px",
                        width: "90%",
                        backgroundColor: "rgba(230, 233, 241, 0.35)",
                        borderRadius: "15px",
                        display: "flex",
                        marginLeft: "24px",
                        marginTop: "16px"
                    }}>
                        <div style={{
                            width: "56px", height: "56px", borderRadius: "35.5px", backgroundColor: "#ffffff", textAlign: "center",
                            lineHeight: "56px",
                        }}>
                            {index + 1}
                        </div>
                        <div style={{ flex: "1", marginLeft: "35px", textOverflow: "ellipsis" }}>
                            {truncateMiddle(data.key.key, 13)}
                        </div>
                        <div style={{ flexBasis: "10%", textAlign: "right" }}>
                            {data.value.total}
                        </div>
                    </ListItem>
                ))}
        </List>
    );
};
