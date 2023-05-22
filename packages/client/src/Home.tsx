import { Container, List, ListItem, ListItemText, alpha } from '@mui/material';
import { useMUD } from "./MUDContext";
import { useComponentValue, useRows } from "@latticexyz/react";
import { TopUser } from "./TopUser";
import { RecentlyPlayedGame } from "./RecentlyPlayedGame";


export const Home = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Container>
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "74px" }}>
                    {/* ======== Recently Played Game ======== */}
                    <div style={{ width: "48%", margin: "0 2%" }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <div style={{
                                textAlign: "center",
                                lineHeight: "65px",
                                width: "265px",
                                height: "65px",
                                background: "#345FCE",
                                borderRadius: "39px",
                                color: "#ffffff"
                            }}>
                                Recently Played Game
                            </div>
                        </div>
                        <RecentlyPlayedGame />
                    </div>
                    {/* ======== Top User ======== */}
                    <div style={{ width: "48%" }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <div style={{
                                textAlign: "center",
                                lineHeight: "65px",
                                width: "265px",
                                height: "65px",
                                background: "#345FCE",
                                borderRadius: "39px",
                                color: "#ffffff"
                            }}>
                                Top Users
                            </div>
                        </div>
                        <TopUser />
                    </div>
                </div>
            </Container>
        </div>
    );
};
