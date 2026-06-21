import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        // Yeni bir kişi oluştururken ID eklememize gerek yok, MockAPI kendisi atayacak.
        dispatch(addContact({ name: values.name, number: values.number }));
        actions.resetForm();
      }}
    >
      <Form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" className={styles.input} />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" id="number" className={styles.input} />
          <ErrorMessage name="number" component="span" className={styles.error} />
        </div>

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}