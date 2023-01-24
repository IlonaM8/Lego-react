import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import useLinks from "./useLinks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./footer.css";

const href = "#";

function BoxAccordions() {
  const links = useLinks();
  const boxes = links.map((link) => (
    <div>
      <Accordion style={{ backgroundColor: "#201d48", color: "white" }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "white", height: "30px", width: "30px" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{link.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="footer-links">
              {link.link.map((link) => (
                <li className="footer-single-link" key={link.toString()}>
                  <a href={href} className="footer-single-href">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ));

  return <div className="footer-accordion">{boxes}</div>;
}

export default BoxAccordions;
