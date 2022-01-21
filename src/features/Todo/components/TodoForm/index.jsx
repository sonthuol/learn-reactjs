import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/form-controll/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Please enter title")
      .min(5, "Title is too short"),
  });
  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    // console.log("Todo form: ", values);
    const { onSubmit } = props;
    if (!onSubmit) return;
    onSubmit(values);

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
