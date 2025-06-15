"use client";
import styles from "./styles.module.css"
import Link from "next/link";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { db } from "@/app/firebase";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

function UserAdd({params}) {
    const userEmail = decodeURIComponent(params.userEmail)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price,setPrice]=useState("")
    const [change,setChange]=useState("")
    const [phone,setPhone]=useState("")
    const [userName,setUserName]=useState("")
    const [type, setType] = useState('Exchange')

    const  handleUploadImage = async(event) => {
        const file = event.target.files[0]
        if(!file) return
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "pharmastic")
        data.append("cloud_name", "drtdv4iyr")
        const res = await fetch("https://api.cloudinary.com/v1_1/drtdv4iyr/image/upload", {
            method: "POST",
            body: data
        })
        const uploadedImageUrl = await res.json()
        setImage(uploadedImageUrl.url)
    } 

    const handleAddProduct = async() => {
        if(name !== "" && description !== "" && change !== "") {
            await addDoc(collection(db, "userProducts"), {
                description,
                name,
                image,
                email: userEmail,
                price,
                change,
                phone,
                userName,
                type
            })
            alert("Product has been added successfully")
            setName("")
            setDescription("")
            setPrice("")
            setChange("")
            setUserName("")
            setPhone("")
            setType('Exchange')
        }
    }
    return(
        <div className="main">
            <header className={styles.header}>
                <div className={styles.leftSide}>
                    <Link href={`/user/${encodeURIComponent(userEmail)}`} className={styles.headerLink}><MdKeyboardArrowLeft/></Link>
                </div>
                <div className={styles.middleSide}>
                    <h2>Add New Product</h2>
                </div>
                <div className={styles.rightSide}>
                    <Link href={"/"} onClick={() => typeof window !== "undefined" ? localStorage.clear() : ""} className={styles.headerLink}><RiLogoutCircleLine/></Link>
                </div>
            </header>
            <div className={styles.addContent}>
                <div className={styles.imageInput}>
                    <label htmlFor="productImage">
                        <span><FaImage/></span>
                        <span>Add product Image</span>
                    </label>
                    <input type="file" id="productImage" hidden onChange={handleUploadImage} />
                </div>
                <div className="inputContainer">
                    <label>Name : </label>
                    <input value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder="Product Name"/>
                </div>
                <div className="inputContainer">
                    <label>Description</label>
                    <input value={description} type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Product Description"/>
                </div>
                <div className="inputContainer">
                    <label>Change With</label>
                    <input value={change} type="text" onChange={(e) => setChange(e.target.value)} placeholder="Change With"/>
                </div>
                <div className="inputContainer">
                    <label>Price</label>
                    <input value={price} type="number" onChange={(e) => setPrice(e.target.value)} placeholder="Price"/>
                </div>
                <div className="inputContainer">
                    <label>Phone </label>
                    <input value={phone} type="number" onChange={(e) => setPhone(e.target.value)} placeholder="phone"/>
                </div>
                <div className="inputContainer">
                    <label>User Name  </label>
                    <input value={userName} type="text" onChange={(e) => setUserName(e.target.value)} placeholder="userName"/>
                </div>
                <div className="inputContainer">
                    <label>Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Exchange">Exchange</option>
                        <option value="Donations">Donations</option>
                    </select>
                </div>
                <button className={styles.addBtn} onClick={handleAddProduct}>Add New Product</button>
            </div>
        </div>
    )
}

export default UserAdd;