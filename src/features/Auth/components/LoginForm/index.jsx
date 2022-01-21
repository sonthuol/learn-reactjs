import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import InputField from "components/form-controll/InputField";
import LinearProgress from "@material-ui/core/LinearProgress";
import PasswordField from "components/form-controll/PasswordField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "10px",
  },
  avatar: {
    margin: "0 auto",
    backgroundColor: "rgb(220, 0, 78)",
  },
  title: {
    margin: "5px 0px 10px 0px",
    textAlign: "center",
  },
  submit: {
    margin: "10px 0",
  },
  progress: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email"),

    password: yup.string().required("Please enter your password"),
  });
  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (!onSubmit) return;
    await onSubmit(values);
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        sign in
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
