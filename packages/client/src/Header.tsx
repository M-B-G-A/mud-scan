import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useFilePicker } from 'use-file-picker';
import { useEffect } from "react";
import { storeFiles } from "./FileUtil";

export const Header = () => {

  const [openFileSelector, { plainFiles }] = useFilePicker({
    accept: 'image/*',
    multiple: false,
  });
  const {
    components: { Avatar },
    systemCalls: { setAvatar },
    network: { playerEntity, network, storeCache },
  } = useMUD();

  const avatar = useComponentValue(Avatar, playerEntity)?.value;

  useEffect(() => {
    // console.log(plainFiles)
    if(plainFiles.length) {
      storeFiles([plainFiles[0]]).then((filename) => {
        console.log(filename);
        setAvatar(filename);
      });
    }
  }, [plainFiles]);

  return (
    <AppBar position="static" style={{ backgroundColor: "#ffffff" }} elevation={0}>
        <Toolbar style={{ height: "100px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{display: "flex", height: "100px", flexDirection: "row", alignItems: "center"}}>
              <img src="../resources/app_icon.png" style={{ height: "55px", width: "55px" }} />
              <Typography style={{ color: "#000000", marginLeft: "14px", verticalAlign: "center", fontSize: "24px" }}>
                  Mud SCAN
              </Typography>
            </div>
            <div>
              <>
                { avatar ? 
                  <img src={avatar} width="56" height="56" onClick={() => {
                      openFileSelector();
                    }} 
                    style={{
                      borderRadius: '16px',
                      cursor: 'pointer'
                    }}
                  />
                  : <button 
                      style={{ 
                        color: 'black', 
                        width: "56px", 
                        height: "56px", 
                        backgroundColor: "#C4D1F1",
                        fontSize: "30px",
                        border: 'none',
                        borderRadius: '16px',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        openFileSelector();
                      }}>
                      +
                    </button>
                }
              </>
            </div>
        </Toolbar>
    </AppBar>
  );
};
