import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./ContactPage.module.css";

function Contact() {
  return (
    <main className={styles.contactMain}>
      <ContactForm />
    </main>
  );
}

export default Contact;
