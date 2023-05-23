import { List, ListItem } from '@mui/material';
import { useMUD } from "./MUDContext";
import React, { useState } from "react";
import { truncateMiddle } from "./Utils";

class PlayedGame {
    type: string;
    blockNumber: number;
    txHash: string;
    table: string;
    gameName: string;
    userId: string;
    timestamp: number | null;

    constructor(
        type: string,
        blockNumber: number,
        txHash: string,
        table: string,
        gameName: string,
        userId: string,
        timestamp: number | null
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
        network: { ecsEvent$ },
    } = useMUD();

    ecsEvent$.subscribe((event) => {
        if (event.type == 'NetworkComponentUpdate' && event.table == 'Achievements') {
            let item = new PlayedGame(
                event.type,
                event.blockNumber,
                event.txHash,
                event.table,
                event.namespace,
                event.entity,
                event.txHash == 'cache' ? null : getCurrentTimestamp()
            );
            setGames([item].concat(games));
        }
    });

    function processNumber(num: number): string {
        const formattedNum = "#" + num.toString().padStart(14, '\u00A0');
        return formattedNum;
    }

    function getCurrentTimestamp(): number {
        const now = new Date();
        const timestamp = now.getTime();
        return timestamp;
    }

    function formatTimeAgo(timestamp: number): string {
        const currentTime = new Date().getTime();
        const diffInMillis = currentTime - timestamp;

        const diffInMinutes = Math.floor(diffInMillis / (1000 * 60));

        if (diffInMinutes < 1) {
            return "few seconds ago";
        } else if (diffInMinutes < 60) {
            return `${diffInMinutes} minutes ago`;
        } else {
            const diffInHours = Math.floor(diffInMinutes / 60);
            return `${diffInHours} hours ago`;
        }
    }

    return (
        <List style={{ 
            width: "100%", 
            height: "100%", 
            backgroundColor: "#ffffff", 
            marginTop: "21px", 
            borderRadius: "15px" 
        }}>
            { games
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
                            {data.txHash == 'cache' ?
                                <div style={{ fontSize: '24px' }}>
                                    📦
                                </div> :
                                <div style={{
                                    width: "51px",
                                    height: "38px",
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    wordBreak: 'break-all',
                                    fontSize: '15px'
                                }}>
                                    {truncateMiddle(data.txHash, 13)}
                                </div>}
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
                                    width: "50px",
                                    textAlign: "center"
                                }}>
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
                                    fontWeight: 600
                                }}>
                                    { processNumber(data.blockNumber) }
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
                            }}>
                                { /* nothing */ }
                            </div>
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
                                    width: "120px",
                                    minWidth: "120px",
                                    maxWidth: "120px",
                                    textAlign: "right"
                                }}>
                                    { data.timestamp == null ? '-' : formatTimeAgo(data.timestamp) }
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
                                    fontWeight: 600,
                                }}>
                                    { truncateMiddle(data.userId, 13) }
                                </div>
                            </div>
                        </div>
                    </ListItem>
                ))}
        </List>
    );
};
