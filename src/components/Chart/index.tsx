import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import style from "./style";
import Column from "../Column/index";

interface Props extends WithStyles<typeof style> {}

const Chart = ({ classes }: Props) => {
  const planetNames = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"];
  return (
    // <div className={classes.mainContainer}>
    <Container maxWidth="md" className={classes.mainContainer}>
      {/* <h3 className={classes.title}>Exercise 2</h3> */}
      <div className={classes.chartContainer}>
        {planetNames.map((planetName: string) => {
          return <Column name={planetName} key={planetName} />;
        })}
      </div>
      {/* </div> */}
    </Container>
  );
};

export default withStyles(style)(Chart);
