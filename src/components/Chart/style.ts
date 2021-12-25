import { createStyles } from "@material-ui/core/styles";
import { container } from "../../theme/index";

const style = () =>
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
