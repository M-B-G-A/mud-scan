import { getComponentValue } from "@latticexyz/recs";
import { awaitStreamValue } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldSend, txReduced$, singletonEntity }: SetupNetworkResult,
  { Achievements, Avatar }: ClientComponents
) {
  const setAvatar = async (url: string) => {
    const tx = await worldSend("EmojiMon_AvatarSystem_setAvatar", [url]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Avatar, singletonEntity);
  };

  return {
    setAvatar,
  };
}
