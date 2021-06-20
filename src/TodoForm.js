import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const TodoForm = ({saveTodo}) => {
    const { value, reset, onChange} = useInputState('');

    return(
        <form
            onSubmit={(event)=> {
                event.preventDefault();
                saveTodo(value);
                reset(value);
            }}
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Add Todo" variant="outlined" margin="normal"
                onChange={onChange}
                value={value}
            />
        </form>
    );
};

export default TodoForm;