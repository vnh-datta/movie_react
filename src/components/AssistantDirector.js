import { Button, IconButton, Typography, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import React from "react";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  main: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    maxHeight: "300px",
    width: "30%",
    margin: "1rem",
    display: 'flex',
    flexDirection: 'column'
  },
  cardHeader: {
    height: '65px'
  },
  cardContent: {
    overflow: "auto",
    flex: 1,
    boxSizing: 'border-box',
  },
  cardActions: {
    height: '65px'
  },
  cardContentContainer: {
    height: "100%",
    width: "100%",
    overflow: "auto",
    boxSizing: 'border-box',
  },
  cardItem: {
    boxSizing: 'border-box',
    width: "95%",
    height: '75px',
    background: 'teal',
    margin: '.2rem auto',
  },
  graphContainer: {},
}));

const AssistantDirector = function() {
  const classes = useStyles();
  const cards = [{
    title: 'Submitted Scenes',
    subHeader: ''
  }, {
    title: 'Submitted Characters',
    subHeader: ''
  }, {
    title: 'Submitted Locations',
    subHeader: ''
  }];

  return (
    <div className="main">
      <div className={classes.appBarSpacer} />
      <div className={classes.content}>
        <div className={classes.cardsContainer}>
          {cards.map((card) => (
            <Card className={classes.card}>
              <CardHeader
                className={classes.cardHeader}
                title={card.title}
                subheader={card.subHeader}
              />
              <CardContent className={classes.cardContent}>
                <CardContentContainer card={card} />
              </CardContent>
              <CardActions disableSpacing className={classes.cardActions}>
                <Button
                    variant="contained"
                    color="primary"
                    component="span">
                        More
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
        <div className={classes.graphContainer}></div>
      </div>
    </div>
  );
}

const CardContentContainer = function({card}) {
    const classes = useStyles();
    return <div className={classes.cardContentContainer}>
        {
            [1,2,3,4,5,6,7,8,9,10].map((item) => {
                return <div className={classes.cardItem}>

                </div>
            })
        }
    </div>
}

export default AssistantDirector;
