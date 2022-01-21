import { register } from "features/Auth/userSlide";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";
import PropTypes from "prop-types";
Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handelSubmit = async (values) => {
    try {
      //auto set username  - enamil
      values.username = values.email;
      const action = register(values);
      await dispatch(action).unwrap();

      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      enqueueSnackbar("Register successfully!!!", { variant: "success" });
    } catch (error) {
      console.log("failed to regiter", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handelSubmit} />
    </div>
  );
}

export default Register;
