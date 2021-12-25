import { createStyles } from "@material-ui/core/styles";

const style = () =>
  createStyles({
    cardContainer: {
      display: "flex",
      padding: "20px",
      alignItems: "center",
    },
    details: {
      width: "400px",
      "& p": {
        "& span": {
          fontWeight: "bold",
        },
      },
    },
    name: {
      fontFamily: '"Audiowide", sans-serif',
    },
    imageContainer: {
      width: "300px",
    },

    image: {
      width: "-webkit-fill-available",
      borderRadius: "6px",
    },
  });

export default style;
