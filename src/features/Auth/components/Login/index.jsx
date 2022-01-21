import { login } from "features/Auth/userSlide";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm";
import PropTypes from "prop-types";
Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handelSubmit = async (values) => {
    try {
      //auto set username  - enamil
      const action = login(values);
      await dispatch(action).unwrap();

      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      console.log("failed to login", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handelSubmit} />
    </div>
  );
}

export default Login;
