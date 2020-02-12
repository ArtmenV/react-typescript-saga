import React, { FC, useEffect } from "react";
import FormTodo from "./../components/FormTodo";
import ListTodo from "./../components/ListsTodo";
import { withStyles, WithStyles } from "@material-ui/core";
import { createStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import ITodos from "./../model/ITodos";
import { getDataTodoListRequest } from './../redux/actions';

export const styles = createStyles({});

interface IItems {
  id: string;
  descriptions: string;
  isComplete: boolean;
}

interface IProps extends WithStyles<any> {
  items: IItems[];
  getDataTodoListRequest: () => void;
  addNewData: () => any;
}

const Todo: FC<any> = ({ getDataTodoListRequest }) => { // FC<IProps>
  useEffect(() => {
    getDataTodoListRequest();
  }, [])

  return (
    <>
      <FormTodo />
      <ListTodo />
    </>
  );
};

const mapStateToProps = (state: ITodos) => {
    const { items } = state;
    return { items };
}

const mapDispatchToProps = {
    getDataTodoListRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Todo));
