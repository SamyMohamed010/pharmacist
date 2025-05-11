"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Nav from "@/components/Nav/page";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import { db } from "../firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";

function Create() {
    const [openNav, setOpenNav] = useState(false)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleAddUser = async() => {
        if(userName !== "" && email !== "" && password !== "") {
            const userRef = collection(db, "users")
            const q = query(userRef, where("email", "==", email))
            const querySnapshot = await getDocs(q)  
            if(querySnapshot.empty) {
                await addDoc(userRef, {userName, email, password})
                alert("User has been added successfully")
                setUserName("")
                setEmail("")
                setPassword("")
                router.push('/login')
            }else {
                alert("User is aleady exists")
                setUserName("")
                setEmail("")
                setPassword("")
            }
        }
    }

    return(
        <div className="main">
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            <div className="formContent">
                <div className="inputContainer">
                    <label>Name :</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter Your Name" />
                </div>
                <div className="inputContainer">
                    <label>Email : </label>
                    <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email"/>
                </div>
                <div className="inputContainer">
                    <label>Password : </label>
                    <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Passwor"/>
                </div>
                <button onClick={handleAddUser} className={styles.btn}>Creat New Account</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Create;