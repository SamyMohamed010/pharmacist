"use client";
import { useState } from "react";
import Header from "../../components/Header/page";
import Nav from "../../components/Nav/page";
import styles from "./styles.module.css";
import Link from "next/link";
import Footer from "../../components/Footer/page";
import { useRouter } from "next/navigation";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function Login() {
    const [openNav, setOpenNav] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = async() => {
        const q = query(collection(db, "users"), where("email", "==", email))
        const querySnapshot = await getDocs(q)
        if(querySnapshot.empty) {
            alert("There is a problem with the email")
        }else {
            const userDoc = querySnapshot.docs[0]
            const userData = userDoc.data()
            if(userData.password !== password) {
                alert("Password is invalid")
            }else {
                if(typeof window !== "undefined") {
                    localStorage.setItem("name", userData.userName)
                    localStorage.setItem("email", userData.email)
                }
            }
            if(email === "admin") {
                router.push("/admin/products")
            }else {
                router.push(`/`)
            }
        }
        
    }

    return(
        <div className="main">
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            <div className="formContent">
                <div className="inputContainer">
                    <label>Email : </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email"/>
                </div>
                <div className="inputContainer">
                    <label>Password : </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password"/>
                </div>
                <div className={styles.btnContainer}>
                    <button onClick={handleLogin}>Login</button>
                    <Link href={"/create"} className={styles.btn}>
                        <span>Do not Have Acccount? </span>
                        <span>create new account</span>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;