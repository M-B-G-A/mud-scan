import { List, ListItem } from '@mui/material';
import { useMUD } from "./MUDContext";
import { truncateMiddle } from "./Utils";
import { useRows } from "@latticexyz/react";
import React from 'react';

export const TopUser = () => {
    const {
        network: { storeCache },
    } = useMUD();

    const achievements = useRows(storeCache, { table: "Achievements" });

    function getMedal(number: number): string {
        if (number === 1) {
            return "🥇";
        } else if (number === 2) {
            return "🥈";
        } else if (number === 3) {
            return "🥉";
        } else {
            return number.toString();
        }
    }

    function formatValue(value: string): string {
        return value.replace(/^0x0+/, '0x');
    }

    return (
        <List style={{ 
            width: "100%", 
            height: "100%", 
            backgroundColor: "#ffffff", 
            marginTop: "21px", 
            borderRadius: "15px" 
        }}>
            {achievements.sort((a, b) => { return b.value.total - a.value.total })
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
                            width: "56px", 
                            height: "56px", 
                            borderRadius: "35.5px", 
                            backgroundColor: "#ffffff", 
                            textAlign: "center",
                            lineHeight: "56px", 
                            fontSize: "20px"
                        }}>
                            { getMedal(index + 1) }
                        </div>
                        <div style={{ 
                            flex: "1",
                             marginLeft: "35px", 
                             textOverflow: "ellipsis" 
                        }}>
                            { truncateMiddle(formatValue(data.key.key), 20) }
                        </div>
                        <div style={{ 
                            flexBasis: "10%", 
                            textAlign: "right" 
                        }}>
                            { data.value.total }
                        </div>
                    </ListItem>
                ))}
        </List>
    );
};
