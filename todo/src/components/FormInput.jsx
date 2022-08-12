import  React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #ce4f46 30%, #eee790 90%)',
        border: 0,
        color: '#18470b',
        fontWeight : "bold",
        height: 30,
        padding: '0 10px',
        whiteSpace: 'nowrap',
        margin: '15px 0 0 20px',
    },
    label: {
        width: '80%'
    }
});


const TodoCreator = ({ theme, todo, setTodo, clearInput, inputRef, isInputEmpty, handleClick }) => {
    const classes = useStyles();

    return (
        <div className="form__input">
            <ThemeProvider theme={theme}>
                <FormControl   className={classes.label}>
                    <TextField
                        id="outlined-basic"
                        label="What's need to be done?" // better accessibility with Material UI
                        value={todo}
                        variant="outlined"
                        onChange={(e) => setTodo(e.target.value)}
                        onFocus={clearInput}
                        ref={inputRef}
                        area-describedby="component-error-text"
                    />

                    { isInputEmpty ?
                            
                         <>
                         <FormHelperText id="component-error-text" style={{color : "red", margin : "1px 1rem"}}>Task can't be empty</FormHelperText>
                     </>:
                        <></>
                    }
                </FormControl>
                <Button
                    type="submit"
                    alt="add-note"
                    className={classes.root}
                    onClick={handleClick}
                >
                    Add task
                </Button>
            </ThemeProvider>
        </div>
    )

}

export  default TodoCreator;