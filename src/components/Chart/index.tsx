import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./style";
import Column from "../Column/index";
import { PopularVehicle, Planet } from "../../types/types";
import { getColumnHeight } from "../../utils/getColumnHeight";

interface Props extends WithStyles<typeof style> {
  // data: Planet[];
}

const Chart = ({ classes }: Props) => {
  const planetNames = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"];
  return (
    <div className={classes.mainContainer}>
      <h3 className={classes.title}>Exercise 2</h3>
      <div className={classes.chartContainer}>
        {planetNames.map((planetName: string) => {
          // const columnHeight = getColumnHeight(parseInt(planet.population, 10));
          // return <Column data={planet} height={columnHeight} />;
          return <Column name={planetName} />;
        })}
      </div>
    </div>
  );
};

export default withStyles(style)(Chart);
