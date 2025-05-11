"use client";
import styles from "./styles.module.css";
import { FaExchangeAlt } from "react-icons/fa";

function ChangeBtn() {
    return(
        <button className={styles.btn}><FaExchangeAlt/></button>
    )
}
export default ChangeBtn;