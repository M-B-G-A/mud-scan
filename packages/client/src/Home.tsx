import { Container, List, ListItem, ListItemText, alpha } from '@mui/material';
import { useMUD } from "./MUDContext";
import { useComponentValue, useRows } from "@latticexyz/react";
import { TopUser } from "./TopUser";;


export const Home = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Container>
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "74px" }}>
                    {/* ======== Top User ======== */}
                    <div style={{ width: "50%" }}>
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
