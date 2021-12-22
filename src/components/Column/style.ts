import { createStyles, Theme } from "@material-ui/core/styles";

const style = (theme: Theme) =>
  createStyles({
    columnContainer: {
      //   position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    population: {},
    columnBottom: {},
    columnFill: {
      backgroundColor: "pink",
    },
    name: {},
  });

export default style;
