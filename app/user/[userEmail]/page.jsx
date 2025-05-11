"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase";
import { collection, getDocs, query, where,deleteDoc, doc, onSnapshot } from "firebase/firestore";

function UserEmail({params}) {
    const userEmail = decodeURIComponent(params.userEmail)
    const [userData, setUserData] = useState([])
    const [userProducts, setUserProducts] = useState([])

    useEffect(() => {
        const getUserData = async() => {
            const q = query(collection(db, "users"), where("email", "==", userEmail))
            const querySnapshot = await getDocs(q)
            const userList = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setUserData(userList)
        }
        const q = query(collection(db, "userProducts"), where("email", "==", userEmail))
        const unSubscribe = onSnapshot(q, (querySnapshot) => {
            const productsArray = []
            querySnapshot.forEach((doc) => {
                productsArray.push({...doc.data(), id: doc.id})
            })
            setUserProducts(productsArray)
        })
        getUserData()
        return () => unSubscribe()
    }, [userEmail])

    const handleDelete = async(id) => {
        const delValue = doc(collection(db, "userProducts"), id)
        await deleteDoc(delValue)
    }

    return(
        <div className="main">
            <header className={styles.header}>
                <div className={styles.leftSide}>
                    <Link href={"/"} className={styles.headerLink}><MdKeyboardArrowLeft/></Link>
                </div>
                <div className={styles.middleSide}>
                    {userData.map(user => {return(<h2 key={user.id}>Welcome : {user.userName}</h2>)})}
                </div>
                <div className={styles.rightSide}>
                    <Link href={"/"} onClick={() => typeof window !== "undefined" ? localStorage.removeItem("email") : ""} className={styles.headerLink}><RiLogoutCircleLine/></Link>
                </div>
            </header>
            <div className={styles.productsContent}>
                {userProducts.map(product => {
                    return(
                        <div className="card">
                            <div className="cardHead">
                                <Image src={product.image} alt="testImage" width={150} height={150} />
                            </div>
                            <div className="cardBody">
                                <p>{product.name}</p>
                                <div className="cardContent">
                                    <button className={styles.btn} onClick={() => handleDelete(product.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Link href={`/userAdd/${encodeURIComponent(userEmail)}`} className={styles.addBtn}>
                <span><FaPlus/></span>
                <span>Add New Product</span>
            </Link>
        </div>
    )
}

export default UserEmail;