"use client";
import Header from "../components/Header/page";
import { useEffect, useState } from "react";
import Nav from "../components/Nav/page";
import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Hero from "@/components/Hero/page";
import Categorie from "@/components/Categorie/page";
import medicineImage from "../public/images/medicine.PNG";
import supImage from "../public/images/sup.PNG";
import hairImage from "../public/images/hairCare.PNG";
import skincare from "../public/images/skinCare.PNG";
import makeupImage from "../public/images/makeup.PNG";
import babyFoodImage from "../public/images/babyFood.PNG";
import Deals from "@/components/deals/page";
import Banner from "@/components/Banner/page";
import ChangeSection from "@/components/ChangeSection/page";
import Cards from "@/components/Cards/page";
import ProductsCollection from "@/components/ProductsCollection/page";
import Reviews from "@/components/Reviews/page";
import Questions from "@/components/Questions/page";
import Footer from "@/components/Footer/page";
import Donations from "../components/Donations/page"

export default function Home() {
  const productsCollection = collection(db, "products")
  const [openNav, setOpenNav] = useState(false)
  const [products, setProducts] = useState([])
  const [userProducts, setUserProducts] = useState([])
  const [categories, setCategories] = useState([
    {
      id: 1,
      text: "Medicines",
      image: medicineImage
    },
    {
      id: 2,
      text: "Hair Care",
      image: hairImage
    },  
    {
      id: 3,
      text: "Skin Care",
      image: skincare
    },
    {
      id: 4,
      text: "Makeup",
      image: makeupImage
    },
    {
      id: 5,
      text: "Vitamins",
      image: supImage
    },
    {
      id: 6,
      text: "Baby Food",
      image: babyFoodImage
    },
  ])
  
  useEffect(() => {
    const getAllProducts = async() => {
      const productsSnapshot = await getDocs(productsCollection)
      const productsList = productsSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
      setProducts(productsList)
    }
    getAllProducts()
      const getUserProducts = async() => {
        const querySnapshot = await getDocs(collection(db, "userProducts"))
        const userProductsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
        setUserProducts(userProductsData)
      }
      getUserProducts()
  }, [productsCollection])

  return (
      <main className="main">
        <Nav openNav={openNav} setOpenNav={setOpenNav}/>
        <Header openNav={openNav} setOpenNav={setOpenNav}/>
        <Hero/>
        <Categorie categories={categories} setCategories={setCategories}/>
        <Deals products={products} setProducts={setProducts}/>
        <Banner/>
        <ChangeSection userProducts={userProducts} setUserProducts={setUserProducts}/>
        <Donations userProducts={userProducts} setUserProducts={setUserProducts}/>
        <Cards/>
        <ProductsCollection products={products} setProducts={setProducts}/>
        <Reviews/>
        <Questions/>
        <Footer/>
      </main>
  );
}
