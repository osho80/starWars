import { createStyles, Theme } from "@material-ui/core/styles";

const style = (theme: Theme) =>
  createStyles({
    cardContainer: {
      display: "flex",
      padding: "20px",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column-reverse",
      },
    },
    details: {
      width: "400px",
      "& p": {
        "& span": {
          fontWeight: "bold",
        },
      },
      [theme.breakpoints.down("xs")]: {
        width: "fit-content",
      },
    },
    name: {
      fontFamily: '"Audiowide", sans-serif',
    },
    imageContainer: {
      width: "300px",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        width: "100%",
      },
    },

    image: {
      width: "-webkit-fill-available",
      borderRadius: "6px",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "250px",
        margin: "0 auto",
      },
    },
  });

export default style;
