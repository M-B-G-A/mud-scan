import { Container, List, ListItem, ListItemText, alpha } from '@mui/material';
import { useMUD } from "./MUDContext";
import { useComponentValue, useRows } from "@latticexyz/react";
import React from 'react';

export const RecentlyPlayedGame = () => {
    return (
        <List style={{ width: "100%", height: "100%", backgroundColor: "#ffffff", marginTop: "21px", borderRadius: "15px" }}>
            <ListItem style={{
                height: "119px",
                width: "90%",
                backgroundColor: "rgba(230, 233, 241, 0.35)",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginLeft: "24px",
                marginTop: "16px",
                padding: "24px 21px",
                fontSize: "15px",
            }}>
                <div style={{
                    width: "71px",
                    height: "71px",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        width: "51px",
                        height: "38px",  
                        display: '-webkit-box',
                        '-webkit-line-clamp': 2, 
                        '-webkit-box-orient': 'vertical',  
                        overflow: 'hidden',
                    }}>
                        hashhashhashhash
                    </div>
                </div>
                <div style={{
                    display: "table",
                    width: "331px",
                    maxWidth: "331px"
                }}>
                    <div style={{
                        display: "table-row"
                    }}>
                        <div style={{
                            display: "table-cell",
                            width: "25px",
                        }}>
                            #
                        </div>
                        <div style={{
                            display: "table-cell",
                            width: "98px",
                            minWidth: "98px",
                            maxWidth: "98px",
                            textAlign: "right",
                            whiteSpace: "nowrap", 
                            overflow: 'hidden',   
                            textOverflow: 'ellipsis',
                            fontWeight: 600,
                        }}>
                            17,343,342
                        </div>
                        <div style={{
                            display: "table-cell",
                            width: "41px",
                            minWidth: "41px",
                            maxWidth: "41px"
                        }}/>
                        <div style={{
                            display: "table-cell",
                            width: "79px",
                            minWidth: "79px",
                            maxWidth: "79px"
                        }}>
                            World ID
                        </div>
                        <div style={{
                            display: "table-cell",
                            width: "88px",
                            textAlign: "right",
                            minWidth: "88px",
                            maxWidth: "88px",
                            whiteSpace: "nowrap", 
                            overflow: 'hidden',   
                            textOverflow: 'ellipsis',
                            fontWeight: 600,
                        }}>
                            173,321
                        </div>
                    </div>
                    <div style={{
                        display: "table-row",
                        height: "16px",
                    }}></div>
                    <div style={{
                        display: "table-row"
                    }}>
                        <div style={{
                            display: "table-cell",
                            width: "25px",
                            minWidth: "25px",
                            maxWidth: "25px",
                        }} />
                        <div style={{
                            display: "table-cell",
                            width: "98px",
                            minWidth: "98px",
                            maxWidth: "98px",
                        }}>
                            24minute ago
                        </div>
                        <div style={{
                            display: "table-cell",
                            width: "41px",
                            minWidth: "41px",
                            maxWidth: "41px",
                        }}/>
                        <div style={{
                            display: "table-cell",
                            width: "79px",
                            minWidth: "79px",
                            maxWidth: "79px",
                        }}>
                            Addr
                        </div>
                        <div style={{
                            display: "table-cell",
                            width: "88px",
                            textAlign: "right",
                            maxWidth: "88px",
                            whiteSpace: "nowrap", 
                            overflow: 'hidden',   
                            textOverflow: 'ellipsis',
                            fontWeight: 600,
                        }}>
                            0x123423131231232231321312323213213123131312ffff
                        </div>
                    </div>
                </div>
            </ListItem>
        </List>
    );
};
