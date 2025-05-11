"use client"; 
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header/page";
import Nav from "../../components/Nav/page";
import Image from "next/image";
import Link from "next/link";
import { FaRegTrashCan } from "react-icons/fa6";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

function Cart() {
    const [openNav, setOpenNav] = useState(false)
    const [products, setProducts] = useState([])
    const [hasProducts, setHasProducts] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [qty, setQty] = useState({})
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if(typeof window !== "undefined") {
            const email = localStorage.getItem("email")
            if(email) {
                setUserEmail(email)
            }
        }
        const getAllData = async() => {
            const q = query(collection(db, "cart"), where("email", "==", userEmail))
            const querySnapshot = await getDocs(q)
            const productsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setProducts(productsData)
        }
        getAllData()
        if(products.length > 0) {
            setHasProducts(true)
        }else {
            setHasProducts(false)
        }
        const subTotal = products.reduce((acc, product) => {
            return acc + (Number(product.price) * Number(qty[product.id]?.productQty || 1))
        }, 0)
        setTotal(subTotal)
    }, [userEmail, products, qty])

    const handleQtyChange = (id, newQty) => {
        setQty(prev => ({...prev, [id] : {productQty: Number(newQty) || 1}}))
    }
    const handleDeleteProduct = async(id) => {
        const delVal = doc(collection(db, "cart"), id) 
        await deleteDoc(delVal)
    }

    return(
        <div className="main">
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <div className={styles.cartContent}>
                <div className={styles.title}>
                    <h2>Cart Page</h2>
                </div>
                {hasProducts ? 
                    <>
                        <div className={styles.productsContainer}>
                            <h2>Products</h2>
                                {products.map(product => {
                                    return(
                                        <div className={styles.card} key={product.id}>
                                            <div className={styles.rightSide}>
                                                <Image src={product.image} width={80} height={80} alt="image" className={styles.cardImage} />
                                            </div>
                                            <div className={styles.middleSide}>
                                                <p>{product.name}</p>
                                                <input type="number" value={qty[product.id]?.productQty || 1} min={1} onChange={(e) => handleQtyChange(product.id, e.target.value)}/>
                                            </div>
                                            <div className={styles.leftSide}>
                                                <button className={styles.clearBtn} onClick={() => handleDeleteProduct(product.id)}><FaRegTrashCan/></button>
                                                <strong>{product.price * (qty[product.id]?.productQty || 1)} EGP</strong>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                        <div className={styles.priceContainer}>
                            <h2>Payment Summary</h2>
                            <div className={styles.priceInfo}>
                                <div className={styles.topSide}>
                                    <div className={styles.text}>
                                        <strong>suptotal</strong>
                                        <strong>{total} EGP</strong>
                                    </div>
                                    <div className={styles.text}>
                                        <strong>Delivery</strong>
                                        <strong style={{color: "#0078ac"}}>10 EGP</strong>
                                    </div>
                                </div>
                                <hr />
                                <div className={styles.bottomSide}>
                                    <h2>Total : {total + 10}</h2>
                                </div>
                            </div>
                        </div>
                        <div className={styles.btn}>
                            <button>Completing The Process</button>
                        </div>
                    </>
                    :
                    <div className={styles.shopText}>
                        <h2>The Shopping Cart Is Empty</h2>
                        <Link href={"/"} className={styles.shopLink}>Continue Shoping</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;