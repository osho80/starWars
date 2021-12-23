import { createStyles, Theme } from "@material-ui/core/styles";
import { container } from "../../theme/index";

const style = (theme: Theme) =>
  createStyles({
    mainContainer: container.normal,
    chartContainer: {
      display: "flex",
      justifyContent: "space-around",
    },
    title: {
      fontFamily: '"Audiowide", sans-serif',
    },
  });

export default style;
