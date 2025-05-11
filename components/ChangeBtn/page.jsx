"use client";
import styles from "./styles.module.css";
import { FaExchangeAlt } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

function ChangeBtn() {
    const [id, setId] = useState([])
    const [products, setProducts] = useState([])
    const router = useRouter()

    useEffect(() => {
        const getProductId = async() => {
            const querySnapshot = await getDocs(collection(db, 'userProducts'))
            const productDoc = querySnapshot.docs[0]
            const productId = productDoc.id
            const productRef = doc(db, 'userProducts', productId)
            setId(productRef)
        }
        getProductId()
    }, [])
    return(
        <button className={styles.btn} onClick={() =>router.push(`/changeInfo/${encodeURIComponent(id.id)}`)}><FaExchangeAlt/></button>
    )
}
export default ChangeBtn;