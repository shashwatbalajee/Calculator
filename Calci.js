import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const handleClear = (e) => {
    setResult('');
  };

  const handleCalci = () => {
    setResult(eval(result).toString());
  };
  return (
    <Grid align="center">
      <TextField
        variant="outlined"
        defaultValue="0"
        style={{ width: '20%', height: '10%', textAlign: 'rigjt' }}
        value={result}
      ></TextField>
      <Grid container spacing={2} style={{ padding: '2%' }}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            onClick={handleClear}
            value="c"
            style={{ width: '2%', borderRadius: '50%', marginLeft: '38rem' }}
          >
            c
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="()"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '27rem' }}
          >
            ()
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="%"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '16rem' }}
          >
            %
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="/"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%' }}
          >
            /
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="9"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '40rem' }}
          >
            9
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="8"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '28rem' }}
          >
            8
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="7"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '17rem' }}
          >
            7
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="*"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%' }}
          >
            *
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ padding: '2%' }}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="6"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '38rem' }}
          >
            6
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="5"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '27rem' }}
          >
            5
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="4"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '16rem' }}
          >
            4
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="-"
            onClick={handleClick}
            style={{ width: '5%', borderRadius: '50%' }}
          >
            -
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="3"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '40rem' }}
          >
            3
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="2"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '28rem' }}
          >
            2
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="1"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '17rem' }}
          >
            1
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="+"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%' }}
          >
            +
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ padding: '2%' }}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="0"
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '38rem' }}
          >
            0
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            value="."
            onClick={handleClick}
            style={{ width: '2%', borderRadius: '50%', marginLeft: '27rem' }}
          >
            .
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            onClick={handleCalci}
            value="="
            style={{ width: '60%', borderRadius: '10%', marginLeft: '16rem' }}
          >
            =
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Calculator;
