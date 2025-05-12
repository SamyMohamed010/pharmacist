"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { useState } from "react";
import { db } from "@/app/firebase";
import { addDoc, collection } from "firebase/firestore";

function Add() {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('Medicines')

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
        if(name !== "" && price > 0 && description !== "") {
            await addDoc(collection(db, "products"), {
                name,
                description,
                price,
                type,
                image,
            })
            alert("The product has been successfully added")
            setName("")
            setDescription("")
            setPrice("")
            setType("Medicines")
        }else {
            alert("An error occured while adding the product")
        }
    }

    return(
        <div className="main">
            <header className={styles.header}>
                <div className={styles.leftSide}>
                    <Link href={"/admin/products"} className={styles.headerLink}><MdKeyboardArrowLeft/></Link>
                </div>
                <div className={styles.middleSide}>
                    <h2>Add New Product</h2>
                </div>
                <div className={styles.rightSide}>
                    <Link href={"/"} onClick={() => typeof window !== "undefined" ? localStorage.removeItem("email") : ""} className={styles.headerLink}><RiLogoutCircleLine/></Link>
                </div>

            </header>
            <div className={styles.addContent}>
                <div className={styles.imageInput}>
                    <label htmlFor="productImage">
                        <span><FaImage/></span>
                        <span>Add Products Image</span>
                    </label>
                    <input type="file" id="productImage" hidden onChange={handleUploadImage} />
                </div>
                <div className="inputContainer">
                    <label>Name : </label>
                    <input value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder="Add Product Name"/>
                </div>
                <div className="inputContainer">
                    <label>Description</label>
                    <input value={description} type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Add Product Description"/>
                </div>
                <div className="inputContainer">
                    <label>Price : </label>
                    <input value={price} type="number" onChange={(e) => setPrice(e.target.value)} placeholder="Add Product Price"/>
                </div>
                <div className="inputContainer">
                    <label>Collection : </label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Medicines">Medicines</option>
                        <option value="Hair Care">Hair Care</option>
                        <option value="Skin Care">Skin Care</option>
                        <option value="Baby Food">Baby Food</option>
                        <option value="Makeup">Makeup</option>
                        <option value="Vitamins">Vitamins</option>
                        <option value="Deals">Deals</option>
                    </select>
                </div>
                <button className={styles.addBtn} onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
    )
}

export default Add;