import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
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
