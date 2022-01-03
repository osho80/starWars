import { createTheme } from "@material-ui/core/styles";

export const colors = {
  primary: "#F6EBB3",
};
export const containerWidth = {
  normal: "800px",
};

export const container = {
  normal: {
    // width: containerWidth.normal,
    // margin: "0 20px",
    // marginBottom: "30px",
    // minWidth: containerWidth.normal,
    padding: "10px",
    border: `1px solid ${colors.primary}`,
    maxWidth: "95vw",
  },
};

export const theme = createTheme({});
