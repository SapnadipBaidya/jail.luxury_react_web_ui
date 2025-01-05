import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import GenericBtns from './../buttons/GenericBtns';
import { styled } from '@mui/material/styles';

const NavLink = styled(Typography)(({ theme }) => ({
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      fontWeight: "bold",
    },
  }));

export default function OrdersListViewAccordian() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Description
          </Typography>
          <NavLink variant="body1" component={Link} to={"/track-orders"}> <GenericBtns type="primary" btnText="Tracking" /></NavLink>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
