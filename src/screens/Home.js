import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Home() {
  const [count, setCount] = useState(0);

  const useStyles = makeStyles({
    home: {
      width: '100%',
    },
  });

  const classes = useStyles();

  return (
    <Container className={classes.home}>
      <h1>Hello World! {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </Container>
  );
}

export default Home;
