import { useFormik } from "formik";
import * as Yup from "yup";

const useTodoForm = (addTodo) => {
  const formik = useFormik({
    initialValues: {
      task: "",
    },
    validationSchema: Yup.object().shape({
      task: Yup.string().required("Task is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      addTodo(values.task);
      resetForm();
    },
  });

  return formik;
};

export default useTodoForm;
