import { Container, List, ListItem, ListItemText, alpha } from '@mui/material';
import { useMUD } from "./MUDContext";
import { useComponentValue, useRows } from "@latticexyz/react";
import { createStore } from "zustand";
import React, { useState, useEffect } from "react";

export class PlayedGame {
    type: string;
    blockNumber: number;
    txHash: string;
    table: string;
    gameName: string;
    userId: string;
    timestamp: number;

    constructor(
        type: string,
        blockNumber: number,
        txHash: string,
        table: string,
        gameName: string,
        userId: string,
        timestamp: number
    ) {
        this.type = type;
        this.blockNumber = blockNumber;
        this.txHash = txHash;
        this.table = table;
        this.gameName = gameName;
        this.userId = userId;
        this.timestamp = timestamp;
    }
}

export const RecentlyPlayedGame = () => {
    const [games, setGames] = useState<PlayedGame[]>([]);

    const {
        components: { Achievements },
        systemCalls: { setAchievement },
        network: { ecsEvent$ },
    } = useMUD();

    ecsEvent$.subscribe((event) => {
        console.log(event);
        if (event.type == 'NetworkComponentUpdate' && event.table == 'Achievements') {
            let item = new PlayedGame(
                event.type,
                event.blockNumber,
                event.txHash,
                event.table,
                event.namespace,
                event.entity,
                0
            );
            setGames(games.concat(item));
            console.log(event);
        }
    });

    return (
        <List style={{ width: "100%", height: "100%", backgroundColor: "#ffffff", marginTop: "21px", borderRadius: "15px" }}>
            {games
                .map((data, index) => (
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
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}>
                                {data.txHash}
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
                                    {data.blockNumber}
                                </div>
                                <div style={{
                                    display: "table-cell",
                                    width: "41px",
                                    minWidth: "41px",
                                    maxWidth: "41px"
                                }} />
                                <div style={{
                                    display: "table-cell",
                                    width: "79px",
                                    minWidth: "79px",
                                    maxWidth: "79px"
                                }}>
                                    Game
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
                                    {data.gameName}
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
                                    {data.timestamp}
                                </div>
                                <div style={{
                                    display: "table-cell",
                                    width: "41px",
                                    minWidth: "41px",
                                    maxWidth: "41px",
                                }} />
                                <div style={{
                                    display: "table-cell",
                                    width: "79px",
                                    minWidth: "79px",
                                    maxWidth: "79px",
                                }}>
                                    User
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
                                    {data.userId}
                                </div>
                            </div>
                        </div>
                    </ListItem>
                ))}
        </List>
    );
};
