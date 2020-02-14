import React, {useState, useRef} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Input(props) {
    let [state, setState] = useState('')
    let myRef = useRef();

    let handleChange = (e) => {
        setState(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (state){
            props.addTodo(state);
            setState('');
        }
        myRef.current.focus();
    }

  return (
    <form style={mainStyle} onSubmit={handleSubmit}>
        <TextField
        autoComplete="off" 
        id="standard-basic" 
        label="Add Todo" 
        style={inputStyle} 
        ref={myRef}
        value={state}
        onChange={handleChange}
        />
        <Button variant="contained" 
        color="primary" 
        style={addStyle} 
        type="submit">
        Add
        </Button>
    </form>
  );
}

let inputStyle = {
    marginBottom: '10px',
    marginTop: '10px',
}

let addStyle = {
    width: '25%',
    margin: '0 auto',
    marginBottom: '20px',
    background: '#1A76D2'
}

let mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    margin: '0 auto'
}