import React, {useState} from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Todos from './components/Todos'
import {Context} from './Context';
import uuid from 'uuid';
import Paper from './components/Paper'

function App() {

  // Todo items are stored in state.
  let [state, setState] = useState(
    [

      { // Todo #1
        name: 'First todo',
        id: 1,
        completed: false,
      },
      { // Todo #2
        name: 'Second todo',
        id: 2,
        completed: false,
      }
    ]
)
  
  let addTodo = (val) => {
    setState([...state, {
      name: val,
      id: uuid.v4(),
      completed: false,
    }])
  }

  let todoButtons = {
    // remove todo item when trashcan icon is clicked:
    deleteTodo(key){
      setState(state.filter(item=>{
        return item.id !== key;
      }))
    },
    // toggle completed value when checkbox is checked so todo can be modified accordingly
    markToggle(key){
      setState(state.map(item => {
        if (item.id === key){
          item.completed = !item.completed;
        }
        return item;
      }))
    }
  }


  return (
    <React.Fragment>
      <Header/>
      <Paper>
      <Input addTodo={addTodo}/>
        <Context.Provider value={todoButtons}>
          <Todos todos={state}/><br/><br/>
        </Context.Provider>
      </Paper>
    </React.Fragment>
  );
}

export default App;
