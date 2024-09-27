"use client"

import React from "react";
import Image from "next/image";
import { useState } from "react"; 
import styles from "./navbar.module.css" 



function Navbar() {
   return(

    <div className="w-full flex justify-between">  

     <Image src="/logo2.jpg" width={100} height={100} className={styles.image}/>    

     <button className="bg-red-700 h-[30px] p-3 rounded-md flex justify-items-center items-center text-white">Sign In</button>

    </div>
   )  
}

export default Navbar;    