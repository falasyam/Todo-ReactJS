import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import './index.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import reportWebVitals from './reportWebVitals';


const App = () => {
  const { todos, addTodo, deleteTodo} = useTodoState([]);
  return(
    <div className="App">
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Todo</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container>
          <div className="align-center">
            <div className="pt-4"></div>
            <Typography component="h1" variant="h2">Todo List ReactJS</Typography>
            <TodoForm saveTodo={todoText => {
              const trimmedText = todoText.trim();
              if (trimmedText.length > 0) {
                addTodo(trimmedText);
              }
            }}
            />

            <TodoList todos={todos} deleteTodo={deleteTodo}/>
          </div>
        </Container>
      </main>
    </div>
  )
}
ReactDOM.render(
  <App />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
