import React from 'react';
import Paper from '@material-ui/core/Paper';

export default function SimplePaper(props) {
  return (
      <Paper elevation={2} style={{width: '90%', margin: '0 auto'}}> 
        {props.children}
      </Paper>
  );
}
