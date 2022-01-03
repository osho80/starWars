import React, { useState, useEffect } from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { getPopularVehicle } from "../../service/getPopularVehicle";
import {
  Container,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import style from "./style";
import {
  PopularVehicle,
  PilotsPlanet,
  DetailedPilotObject,
  DetailedPlanetObject,
} from "../../types/types";
import Modal from "../Modal/index";

interface Props extends WithStyles<typeof style> {}

const PopularVehicleTable = ({ classes }: Props) => {
  const [popularVehicle, setPopularVehicle] = useState<null | PopularVehicle>(
    null
  );
  const [open, setOpen] = useState(false);
  const [isPilot, setIsPilot] = useState<{ isPilot: boolean }>({
    isPilot: true,
  });

  const [details, setDetails] = useState<
    DetailedPilotObject | DetailedPlanetObject | null
  >(null);

  useEffect(() => {
    getPopularVehicle().then(setPopularVehicle);
  }, []);

  const handleClickOpen = (
    details: DetailedPilotObject | DetailedPlanetObject,
    isPilot: boolean
  ) => {
    setOpen(true);
    setIsPilot({ isPilot });
    setDetails(details);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    // <div className={classes.tableContainer}>
    <Container maxWidth="md" className={classes.tableContainer}>
      {/* <h3 className={classes.title}>Exercise 1</h3> */}
      {!popularVehicle ? (
        <>
          <CircularProgress />
          <h3>Loading...</h3>
        </>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow key={"first"} className={classes.tableRow}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.rowText}
                >
                  {"Vehicle name with the largest sum"}
                </TableCell>
                <TableCell align="right" className={classes.rowText}>
                  {popularVehicle.name}
                </TableCell>
              </TableRow>
              <TableRow key={"second"} className={classes.tableRow}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.rowText}
                >
                  {"Related home planets and their respective population"}
                </TableCell>
                <TableCell align="right">
                  {popularVehicle.data.map((item: PilotsPlanet, idx) => {
                    const currPlanet = item.planet;
                    const populationInMillions = currPlanet
                      ? parseInt(currPlanet.population, 10) / 1000000
                      : 0;

                    return currPlanet ? (
                      <Typography
                        className={clsx(classes.rowText, classes.planetDetails)}
                        key={`planet-${idx}`}
                        onClick={() => handleClickOpen(currPlanet, false)}
                      >
                        {`${currPlanet.name}, ${populationInMillions + " M"}`}
                      </Typography>
                    ) : (
                      <Typography
                        className={classes.rowText}
                        key={`planet-${idx}`}
                      >
                        unknown
                      </Typography>
                    );
                  })}
                </TableCell>
              </TableRow>
              <TableRow key={"third"} className={classes.tableRow}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.rowText}
                >
                  {"Related pilot names"}
                </TableCell>
                <TableCell>
                  {popularVehicle.data.map((item: PilotsPlanet, idx) => {
                    const currPilot = item.pilot;
                    return currPilot ? (
                      <div
                        className={classes.pilotDetails}
                        key={`pilot-${idx}`}
                        onClick={() => handleClickOpen(currPilot, true)}
                      >
                        <Typography className={classes.rowText}>
                          {currPilot.name}
                        </Typography>
                        <img
                          src="../assets/images/Grievoushead.jpg"
                          alt="Pilot Profile"
                          className={classes.profileImage}
                        />
                      </div>
                    ) : (
                      <Typography
                        className={classes.rowText}
                        key={`pilot-${idx}`}
                      >
                        unknown
                      </Typography>
                    );
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Modal
        open={open}
        handleClickAway={handleClickAway}
        isPilot={isPilot}
        details={details}
      />
      {/* </div> */}
    </Container>
  );
};

export default withStyles(style)(PopularVehicleTable);
