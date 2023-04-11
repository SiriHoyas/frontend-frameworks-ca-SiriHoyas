import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../UI/Button/Button";
import { Inputs } from "../types";
import { Link } from "react-router-dom";
import styles from "./ContactForm.module.css";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

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
  const [isValidated, setIsValidated] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const submitForm: SubmitHandler<Inputs> = (form) => {
    console.log(form);
    setIsValidated(true);
  };

  if (isValidated) {
    return (
      <section className={styles.sentSuccessContainer}>
        <h1 className={styles.title}>Thanks!</h1>
        <p>We have recieved your message.</p>
        <Link to={"/"}>
          <Button label="Home" className={"primary"} type="button" />
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.contactFormContainer}>
      <h1 className={styles.title}>Contact us</h1>
      <form className={styles.contactForm} onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="fullName">Name:</label>
        <input type="text" placeholder="You name" {...register("fullName")} />
        <p className={styles.formError}>{errors.fullName?.message}</p>
        <label htmlFor="subject">Subject:</label>
        <input type="text" placeholder="subject" {...register("subject")} />
        <p className={styles.formError}>{errors.subject?.message}</p>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="email" {...register("email")} />
        <p className={styles.formError}>{errors.email?.message}</p>
        <label htmlFor="body">Message:</label>
        <textarea {...register("body")} />
        <p className={styles.formError}>{errors.body?.message}</p>
        <Button type="submit" className={"primary"} label="Send" />
      </form>
    </section>
  );
}

export default ContactForm;
