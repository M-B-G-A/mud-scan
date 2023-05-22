import { useComponentValue, useRow } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { useState } from "react";

export const App = () => {
  const {
    components: { Achievements },
    systemCalls: { setAchievement },
    network: { playerEntity, network },
  } = useMUD();

  const achievement = useComponentValue(Achievements, playerEntity);
  const [stageNumber, setStageNumber] = useState('');
  const [stageScore, setStageScore] = useState('');

  const onChangeStageNumber = (e: any) => {
    setStageNumber(e.target.value);
  };

  const onChangeStageScore = (e: any) => {
    setStageScore(e.target.value);
  }

  const checkStage = (str: string) => {
    const result = [];
    let i = 0; 
    for(; i < str.length; i ++) {
      if(str[str.length - 1 - i] === '1') {
        result.push(i);
      }
    }
    return JSON.stringify(result);
  }

  return (
    <>
      <div>
        Total: <span>{achievement?.total ?? "0"}</span><br/>
        Stage Done: <span>{checkStage(achievement?.mask.toString(2) ?? "0")}</span>
      </div>
      <div>
        stage number(max 255): <input onChange={onChangeStageNumber} value={stageNumber}  />
      </div>
      <div>
        stage score: <input onChange={onChangeStageScore} value={stageScore}  />
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          const walletAddress = network.connectedAddress.get();
          if(walletAddress) await setAchievement(walletAddress, Number(stageScore), Number(stageNumber));
        }}
      >
        Update Achievement
      </button>
    </>
  );
};
