import React, { FC, useState } from "react";
import {
  Grid,
  Paper,
  withStyles,
  Theme,
  TextField,
  WithStyles
} from "@material-ui/core";
import { createStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import ITodos from "./../model/ITodos";
import { addNewData } from './../redux/actions';
const uuidv4 = require('uuid/v4');

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  });

  interface IItems {
    id: string;
    descriptions: string;
    isComplete: boolean;
  }
  
  interface IProps extends WithStyles<any> {
    items: IItems[];
    addNewData: () => any;
  }

const FormTodo: FC<any> = ({ addNewData, items, classes }) => {

    const [descriptions, setDescriptions] = useState('')

    const handleAddNewData = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      if(!descriptions) return;
      let id: string = uuidv4();
      const isComplete = false;
      addNewData({ items: items, item:{ id, descriptions, isComplete } })
      setDescriptions('')
    }

    const handleTextfieldChange = (func: (value: string) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      func(value)
    }

    return (
      <Grid container={true}>
        <Grid item={true} xs={12} md={12}>
          <Paper className={classes.paper}>
            <form onSubmit={handleAddNewData}>
              <TextField
                id="standard-name"
                label="Please, enter your task!"
                margin="normal"
                name="task"
                value={descriptions}
                onChange={handleTextfieldChange(setDescriptions)}
              />
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
}

const mapStateToProps = (state: ITodos) => {
  const { items } = state
  return { items }
}

const mapDispatchToProps = {
  addNewData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FormTodo));
