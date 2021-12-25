import React, { useState, useEffect } from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./style";
import { Planet } from "../../types/types";
import { lightSaborSound } from "../../service/audioService";
import { getPlanet } from "../../service/getPlanet";
import { getColumnHeight } from "../../utils/getColumnHeight";

interface Props extends WithStyles<typeof style> {
  name: string;
}

const Column = ({ classes, name }: Props) => {
  const [planet, setPlanet] = useState<null | Planet>(null);
  const [height, setHeight] = useState<null | string>(null);
  useEffect(() => {
    getPlanet(name).then(setPlanet);
  }, [name]);
  useEffect(() => {
    if (planet) {
      const columnHeight = getColumnHeight(parseInt(planet.population, 10));
      setHeight(columnHeight);
    }
  }, [planet]);

  return (
    planet && (
      <div className={classes.columnContainer}>
        <p className={classes.dataField}>{planet.population}</p>
        <div className={classes.columnBottom}>
          {height && (
            <div
              className={classes.columnFill}
              style={{ height }}
              onMouseEnter={() => lightSaborSound.play()}
            />
          )}
          <p className={classes.dataField}>{planet.name}</p>
        </div>
      </div>
    )
  );
};

export default withStyles(style)(Column);
