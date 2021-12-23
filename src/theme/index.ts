import { createTheme } from "@material-ui/core";

export const colors = {
  primary: "#F6EBB3",
};
export const containerWidth = {
  normal: "800px",
};

export const container = {
  normal: {
    width: containerWidth.normal,
    margin: "0 auto",
    marginBottom: "30px",
    padding: "10px",
    border: `1px solid ${colors.primary}`,
  },
};
const theme = createTheme({});
