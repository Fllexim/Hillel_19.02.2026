import { Formik, Form, Field } from "formik";
import { minLength } from "../validators/validators";

const TodoForm = ({ addTask }) => {
  const validate = (values) => {
    const errors = {};

    const error = minLength(values.task);

    if (error) {
      errors.task = error;
    }

    return errors;
  };

  const handleSubmit = (values, actions) => {
    addTask(values.task);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ task: "" }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ errors, submitCount }) => (
        <Form className="d-flex gap-2 align-items-start">
          <div className="flex-grow-1">
            <Field
              name="task"
              className="form-control"
              placeholder="Enter task"
            />

            {submitCount > 0 && errors.task && (
              <div className="text-danger mt-1">{errors.task}</div>
            )}
          </div>

          <button type="submit" className="btn btn-success">
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
