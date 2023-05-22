import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  namespace: "MudScan",
  tables: {
    Avatar: "string",
    Achievements: {
      schema: {
        total: "uint32",
        mask: "uint256",
      },
    },
  },
});

export const rootConfig = mudConfig({
  namespace: "",
  tables: {
    Avatar: "string",
  },
});