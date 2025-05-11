"use client";
import { useState } from "react";
import styles from "./styles.module.css"
import { useRouter } from "next/navigation";
import { db } from "../../app/firebase";
import { collection, addDoc } from "firebase/firestore";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";

function CartBtn({product}) {
    const [addedToCart, setAddedToCart] = useState(false)
    const router = useRouter()
    
    const handleAddToCart = async() => {
        if(typeof window !== "undefined") {
            const email = localStorage.getItem("email")
            if(email) {
                const cartRef = collection(db, 'cart')
                await addDoc(cartRef, {
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    description: product.description,
                    email
                })
                alert("تم اضافة المنتج الى العربة")
                setAddedToCart(true)
            }else {
                alert("يجب تسجيل الدخول قبل طلب المنتجات")
                router.push("/login")
            }
        }
    }

    return(
        <>
            {!addedToCart ? 
                <button onClick={handleAddToCart} className={styles.btn}>
                    <span><FaPlus/></span>
                    <span>Add to cart</span>
                </button> 
                :
                <button className={styles.added}><MdOutlineDone/></button>
            }
        </>
    )
}

export default CartBtn;