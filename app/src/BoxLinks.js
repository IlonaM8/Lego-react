import React from "react";
import { Box } from "@mui/system";
import useLinks from "./useLinks";
import "./footer.css";

const href = "#";

function BoxLinks() {
  const links = useLinks();
  const boxes = links.map((link) => (
    <Box
      sx={{
        flex: "1 1 0%",
        paddingLeft: "0.625rem",
        marginRight: "1.25rem",
      }}
    >
      <h4 className="footer-link-title">{link.title}</h4>

      <ul className="footer-links">
        {link.link.map((link) => (
          <li className="footer-single-link" key={link.toString()}>
            <a href={href} className="footer-single-href">{link}</a>
          </li>
        ))}
      </ul>
    </Box>
  ));

  return <>{boxes}</>;
}

export default BoxLinks;
