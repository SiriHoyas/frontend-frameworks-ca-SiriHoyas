import styles from "./ContactForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../UI/Button";
import { Inputs } from "../Types";
import { TextField } from "@mui/material";

const schema = yup.object().shape({
  fullName: yup.string().min(3, "Please enter your full name").required(),
  subject: yup.string().min(3, "The subject must be three or more characters").required(),
  email: yup
    .string()
    .email()
    .matches(/^([a-z0-9_\.\+-]+)@([\da-z-]+)(\.[a-z]{2,6})+$/, "Please enter a valid email")
    .required(),
  body: yup.string().min(3, "Your message must be three or more characters").required(),
});

function ContactForm() {
  let isValidated = false;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const submitForm: SubmitHandler<Inputs> = (form) => {
    console.log(form);
    isValidated = true;
  };

  return (
    <section className={styles.contactFormContainer}>
      <form className={styles.contactForm} onSubmit={handleSubmit(submitForm)}>
        <input type="text" placeholder="You name" {...register("fullName")} />
        <p className={styles.formError}>{errors.fullName?.message}</p>
        <input type="text" placeholder="subject" {...register("subject")} />
        <p className={styles.formError}>{errors.subject?.message}</p>
        <input type="email" placeholder="email" {...register("email")} />
        <p className={styles.formError}>{errors.email?.message}</p>
        <textarea {...register("body")} />
        <p className={styles.formError}>{errors.body?.message}</p>
        <input type="submit" />
      </form>
    </section>
  );
}

export default ContactForm;
