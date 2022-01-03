import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import style from "./style";
import Column from "../Column/index";

interface Props extends WithStyles<typeof style> {}

const Chart = ({ classes }: Props) => {
  const planetNames = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"];
  return (
    <Container maxWidth="md" className={classes.mainContainer}>
      <div className={classes.chartContainer}>
        {planetNames.map((planetName: string) => {
          return <Column name={planetName} key={planetName} />;
        })}
      </div>
    </Container>
  );
};

export default withStyles(style)(Chart);
