import * as React from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const buttonColor = {
  500: "#ffffff",
  600: "#000000",
};

const CustomButton = styled(ButtonUnstyled)`
  font-family: Cera Pro, sans-serif;
  font-weight: 500;
  font-size: 1.5vw;
  line-height: 1.5625rem;
  margin-top: 2.25vh;
  background-color: ${buttonColor[500]};
  padding: 0.625rem 0.9375rem;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${buttonColor[600]};
    color: black;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function UnstyledButtonsSimple() {
  return (<div className="bannerButton"><Stack spacing={2} direction="row">
    <CustomButton style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      Compra ora {<ArrowForwardIosIcon style={{ width: "18px", height: "18px" }} />}
    </CustomButton>
  </Stack></div>

  );
}
