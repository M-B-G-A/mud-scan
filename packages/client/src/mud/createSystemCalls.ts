import { getComponentValue } from "@latticexyz/recs";
import { awaitStreamValue } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldSend, txReduced$, singletonEntity }: SetupNetworkResult,
  { Achievements }: ClientComponents
) {
  const setAchievement = async (address: string, score: number, nth: number) => {
    const tx = await worldSend("setAchievement", [address, score, nth]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Achievements, singletonEntity);
  };

  return {
    setAchievement,
  };
}
