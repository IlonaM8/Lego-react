import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Link } from '@mui/material';


const steps = [
  {
    description: `Novità! Add On Pack VIP - Fun and Funky* `,
  },
  {

    description:
      'Consegna GRATUITA sugli ordini superiori a 55 €!* ',
  },
  {
    description: `Ordina entro le ore 23:59 del 19/12 per la spedizione standard. `,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx = {{
      display: { xs: "none", sm: "none", md: "flex"}
       }}>
    <Box sx={{ maxWidth: "100%", display: "flex", flexDirection: "row"}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.default',
        }}
      >
      </Paper>

      <MobileStepper
        variant="none"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >


            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
      <Box sx={{ height: 20, maxWidth: "100%", width: '100%', p: 2, fontSize: 12 }}>

        {steps[activeStep].description}
        <Link sx={{textDecoration: 'none', paddingLeft: 1, cursor: 'pointer'}}>Scopri di più</Link>
      </Box>




<MobileStepper
        variant="none"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}

          </Button>
        }
      />
    </Box>
    </Box>
  );
}
