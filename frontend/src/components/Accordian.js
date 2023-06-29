import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Hvordan booker jeg et lokale?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Når du er logget ind med en bruger, kan du booke et lokale ved at trykke på ny booking. 
            Her vil du finde en oversigt over lokaler på dit universitet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Hvordan laver jeg en bruger?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Du kan i øjeblikket ikke lave en bruger gennem BookIT. 
            Du kan bruge dit universitets login, til at logge ind på BookIT.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Hvordan ser jeg hvilke lokaler, der er ledige?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Under oversigt, eller ny booking, kan du se alle universitets lokaler. Hvert lokale vil have angivet hvor mange tidsintervaller, der er ledige. 
            Derudover fremgår det på lokaledetaljer, hvilke tidsrum lokalet er ledigt den pågældende dag.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Hvor kan jeg finde information om lokalet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Du kan se information om et lokale ved at trække på et ønsket lokale i oversigten.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Hvor kan jeg se hvor mange lokaler, jeg kan booke??</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Du kan booke et lokale i én time ad gangen, og højst booke 3 lokaler om dagen.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
