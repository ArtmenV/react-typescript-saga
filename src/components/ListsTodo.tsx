import React, { FC, useEffect } from "react";
import {
  withStyles,
  WithStyles,
  Theme,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Link,
  Checkbox
} from "@material-ui/core";
import { createStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import ITodos, * as moduleITodos from "./../model/ITodos";
import { updateStatusData, deleteData } from "./../redux/actions";
import Delete from './../assets/delete.svg';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: theme.spacing(4, 0, 2)
    },
    marginLeft: {
      margin: theme.spacing(0, 5, 0)
    },
    lineThrough: {
      textDecoration: 'line-through'
    }
  });

interface IItems {
  id: string;
  descriptions: string;
  isComplete: boolean;
}

interface IProps extends WithStyles<typeof styles> {
  items: IItems[];
}

function generate(classes: any, items: any, handleUpdateStatusData: any, handleDeleteData: any) {
  return items && items.map((value: any) => (
    <ListItem key={value.id} button onClick={() => handleUpdateStatusData(items, value)}>
      <Checkbox
          checked={value.isComplete}
          value="checkedA"
          inputProps={{
            'aria-label': 'primary checkbox',
          }}
          className={classes.marginLeft}
      />
      <ListItemText 
      primary={value.descriptions} 
      className={value.isComplete ? classes.lineThrough : ''}
      />
      <ListItemSecondaryAction>
      <Link
        component="button"
        variant="body2"
        onClick={() => handleDeleteData(items, value)}
      >
        <img src={Delete}/>
      </Link>
      </ListItemSecondaryAction>
    </ListItem>
  ));
}

const ListTodo: FC<any> = ({ items, updateStatusData, deleteData, classes }) => {
  useEffect(() => {
    console.log(items)
  },[items])


  const handleUpdateStatusData = (items: ITodos, item: moduleITodos.IItems) => {
    updateStatusData({ items, item })
  }

  const handleDeleteData = (items: ITodos, item: moduleITodos.IItems) => {
    deleteData({ items, item })
  }

  return (
    <>
      <Grid container={true}>
        <Grid item={true} xs={12} md={2}></Grid>
        <Grid item={true} xs={12} md={8}>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <div className={classes.demo}>
            <List>{generate(classes, items, handleUpdateStatusData, handleDeleteData)}</List>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: ITodos) => {
  const { items } = state
  return { items }
}

const mapDispatchToProps = {
  updateStatusData,
  deleteData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ListTodo));
