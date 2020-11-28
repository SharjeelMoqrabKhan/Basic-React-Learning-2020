import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 36,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const [num, setnum] = useState(0);

  const increment = () => {
    return setnum(num + 1);
  };

  const decrement = () => {
    if (num == 0) {
      return alert("Reach minimam value of decrement");
    }
    setnum(num - 1);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {num}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={increment}>
          Increment
        </Button>
        <Button size="small" onClick={decrement}>
          Decrement
        </Button>
      </CardActions>
    </Card>
  );
}
