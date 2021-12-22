import { createStyles, Theme } from "@material-ui/core/styles";

const style = (theme: Theme) =>
  createStyles({
    chartContainer: {
      display: "flex",
      backgroundColor: "lightgrey",
      justifyContent: "space-around",
      width: "700px",
      margin: "0 auto",
    },
  });

export default style;
