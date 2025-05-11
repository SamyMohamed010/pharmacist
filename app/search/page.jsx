"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../public/images/logo-removebg-preview.png"
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import CartBtn from "../../components/CartBtn/page";
import Footer from "../../components/Footer/page";

function Search() {
    const [login, setLogin] = useState(false) 
    const [userEmail, setUserEmail] = useState('')
    const [products, setProducts] = useState([])
    const [filterd, setFilterd] = useState([])
    const [search, setSearch] = useState('')    
    useEffect(() => {
        if(typeof window !== "undefined") {
            const email = localStorage.getItem("email")
            if(email) {
                setUserEmail(email)
                setLogin(true)
            }else {
                setLogin(false)
            }
        }  
        const getAllData = async() => {
            const querySnapshot = await getDocs(collection(db, "products"))
            const productsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setProducts(productsData)
        }
        const filterdData = async() => {
            const q = query(collection(db, "products"), where("name", "==", search))
            const querySnapshot = await getDocs(q)
            const productsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setFilterd(productsData)
        }
        getAllData()
        filterdData()   
    }, [userEmail, search])

    return(
        <div className="main">
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.leftSide}>
                        <div className={styles.logoInfo}>
                            <div className={styles.logoImage}>
                                <Image src={logoImage} fill  style={{objectFit: "cover"}} alt="logoImage" />
                            </div>
                            <Link href={"/"} className={styles.logoLink}>pharmacist</Link>
                            <p> | </p>
                        </div>
                        <div className={styles.mobileIcons}>
                            {login ? 
                                <Link href={userEmail === 'admin' ? "/admin/products" : `/user/${encodeURIComponent(userEmail)}`} className={styles.headerLinks}>
                                    <span><GrNotes/></span>
                                </Link>
                                :
                                <Link href={"/login"} className={styles.headerLinks}>
                                    <span><BsPerson/></span>
                                </Link>
                            }
                            <Link href={"/cart"} className={styles.headerLinks}>
                                <span><LuShoppingCart/></span>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.middleSide}>
                        <input list="products" placeholder="Search here for your product" onChange={(e) => setSearch(e.target.value)}/>
                            <datalist id="products">
                                {products.map(product => {
                                    return(
                                        <option key={product.id} value={product.name} />
                                    )
                                })}
                            </datalist>
                        <p><CiSearch/></p>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.inputContainer}>
                            <input list="products"  placeholder="Search here for your product" onChange={(e) => setSearch(e.target.value)}/>
                            <datalist id="products">
                                {products.map(product => {
                                    return(
                                        <option key={product.id} value={product.name} />
                                    )
                                })}
                            </datalist>
                            <p><CiSearch/></p>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        {login ? 
                            <Link href={userEmail === 'admin' ? "/admin/products" : `/user/${encodeURIComponent(userEmail)}`} className={styles.headerLinks}>
                                <span><GrNotes/></span>
                                <span>account</span>
                            </Link>
                            :
                            <Link href={"/login"} className={styles.headerLinks}>
                                <span><BsPerson/></span>
                                <span>login</span>
                            </Link>
                        }
                        <Link href={"/cart"} className={styles.headerLinks}>
                            <span><LuShoppingCart/></span>
                            <span>cart</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.searchContent}>
                {filterd.map(product => {
                    return(
                        <div className="card">
                        <div className="cardHead">
                            <Link href={`/info/${encodeURIComponent(product.id)}`}>
                                <Image src={product.image} alt="ProductImage" width={150} height={150} />
                            </Link>
                        </div>
                        <div className="cardBody">
                            <p>{product.name}</p>
                            <div className="cardContent">
                                <CartBtn product={product}/>
                                <strong>EGP {product.price}</strong>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}

export default Search;