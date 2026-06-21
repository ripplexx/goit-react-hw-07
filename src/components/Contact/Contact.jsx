import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./Contact.module.css";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.text}>👤 {name}</p>
        <p className={styles.text}>📞 {number}</p>
      </div>
      <button 
        className={styles.btn} 
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}