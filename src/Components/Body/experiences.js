import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import WebIcon from '@material-ui/icons/Web';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Experience() {
  const classes = useStyles();

  return (
      <div className="experience">
          <h1 id="hexp"> Expérience </h1>
    <Timeline align="alternate" className="timeline">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          Août 2020 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <WebIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Développeur Front-End ( Intégrateur Web )
            </Typography>
            <Typography id="lieu"> Polydev Digital Tunisia </Typography>
            <Typography> - Découpage des éléments graphiques a partir d’une maquette en Psd. <br/> - Création et maintenance des sites interne avec HTML 5, CSS 3 (responsive) et JavaScript.
<br/> - Installation, configuration et maintenance de thème et d’extension Wordpress.
 </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Dec 2019 - Mai 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Project Freelance 
            </Typography>
            <Typography id="lieu"> DropPro </Typography>
            <Typography> Application web simplifie tout le travail de gestion et automatiser votre entreprise de livraison directe et de découvrir à quel point la livraison directe peut étre exellente. Par exemple ('Dropified, Oberlo'), mais à cause de COVID 19 ce projet s'arréte. </Typography>
            <Typography id="lieu"> Zone4code </Typography>
            <Typography> Création une plateforme éducative par (ReactJS, NodeJS)  </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          Avr 2019 - Août 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <AssignmentIndIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Chef De Production
            </Typography>
            <Typography id="lieu"> Saida Group (Sotuchoc) </Typography>
            <Typography> Organisation et planification de la production par un systéme automatique du mélange (tous les types du chocolat), je suis le responsable sur 4 groupes (magasiniers, machinistes, ingrédients et récyclages) </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          Jan 2017 - Juin 2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <CastForEducationIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Projet Fon d'étude
            </Typography>
            <Typography id="lieu"> Aiventu </Typography>
            <Typography> Application android de comptage d'inventaire (Conception et Réalisation), environnement technique: "Zxing-Scanner, Android Studio" </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}
