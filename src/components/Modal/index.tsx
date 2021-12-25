import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { ClickAwayListener, Dialog, Card } from "@material-ui/core";
import style from "./style";
// import { DetailedPilotObject, DetailedPlanetObject } from "../../types/types";

interface Props extends WithStyles<typeof style> {
  open: boolean;
  handleClickAway: () => void;
  isPilot: { isPilot: boolean };
  //   details: DetailedPilotObject & DetailedPlanetObject;
  details: any;
}

const Modal = ({ classes, open, handleClickAway, isPilot, details }: Props) => {
  const pilot = isPilot.isPilot;
  return (
    <Dialog open={open}>
      <ClickAwayListener onClickAway={handleClickAway}>
        {details && (
          <Card elevation={3} className={classes.cardContainer}>
            {!pilot && (
              <>
                <div className={classes.details}>
                  <h3 className={classes.name}>{details.name}</h3>
                  <p>
                    <span>Population: </span>
                    {details.population}
                  </p>
                  <p>
                    <span>Climate: </span>
                    {details.climate}
                  </p>
                  <p>
                    <span>Terrain: </span>
                    {details.terrain}
                  </p>
                  <p>
                    <span>Diameter: </span>
                    {details.diameter}
                  </p>
                  <p>
                    <span>Gravity: </span>
                    {details.gravity}
                  </p>
                  <p>
                    <span>Rotation Period: </span>
                    {details.rotation_period}
                  </p>
                </div>
                <div className={classes.imageContainer}>
                  <img
                    src="../assets/images/Planet_Kalee.jpg"
                    alt="Planet Kalee"
                    className={classes.image}
                  />
                </div>
              </>
            )}
            {pilot && (
              <>
                <div className={classes.details}>
                  <h3 className={classes.name}>{details.name}</h3>
                  <p>
                    <span>Birth Year: </span>
                    {details.birth_year}
                  </p>
                  <p>
                    <span>Gender: </span>
                    {details.gender}
                  </p>
                  <p>
                    <span>Height: </span>
                    {details.height}
                  </p>
                  <p>
                    <span>Mass: </span>
                    {details.mass}
                  </p>
                  <p>
                    <span>Eye Color: </span>
                    {details.eye_color}
                  </p>
                  <p>
                    <span>Hair Color: </span>
                    {details.hair_color}
                  </p>
                  <p>
                    <span>Skin Color: </span>
                    {details.skin_color}
                  </p>
                </div>
                <div className={classes.imageContainer}>
                  <img
                    src="../assets/images/Profile_General_Grievous.png"
                    alt="General Grievous"
                    className={classes.image}
                  />
                </div>
              </>
            )}
          </Card>
        )}
      </ClickAwayListener>
    </Dialog>
  );
};

export default withStyles(style)(Modal);
