import React, {useContext} from 'react'
import {Context} from '../Context'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Delete from '@material-ui/icons/Delete';


export default function TodoItem(props) {
    let todoButtons = useContext(Context)
    let completed = props.completed;
    let getStyle = () => {
        return {
            textDecoration: completed ? 'line-through' : 'none',
            width: '50%',
            display: 'inline-flex',
            justifyContent: 'space-between',
            fontFamily: 'Roboto',
            alignItems: 'center',
        }
    }

   let handleChange = () => {
    todoButtons.markToggle(props.id)
   }

    return (
        <div style={getStyle()}>
            <Checkbox onChange={handleChange}/>
            {props.children}
            <Button style={{color: completed ? '#F50057' : 'black'}}
            onClick = {()=> todoButtons.deleteTodo(props.id)}>
                <Delete/>
            </Button>
        </div>
    );
}
