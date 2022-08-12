import { Button, makeStyles } from '@material-ui/core';
import './App.css';
import Form from "./components/Form";

const useStyles = makeStyles({
  root: {
      background: 'linear-gradient(45deg, gray 30%, grey 90%)',
      border: 0,
      color: 'white',
      height: 30,
      
      padding: '2rem 2rem',
      whiteSpace: 'nowrap',
      margin: '15px 0 50px 20px',
  },
  label: {
      width: '80%'
  }
});
function App() {
  const classes = useStyles();
  return (
    <div className="wrapper">
      <Button
                    type="submit"
                    alt="add-note"
                    className={classes.root}
                    
                > 
                  <h1>  Todo List</h1>
                </Button>
      <Form/>
    </div>
  );
}

export default App;
