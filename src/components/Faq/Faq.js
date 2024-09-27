"use client"

import React, { useState } from 'react'
import styles from "./faq.module.css"
import AddIcon from '@mui/icons-material/Add';
import { faq } from '@/utils/faqUtils';

const Faq = () => {

  const [ isVisible, setIsVisible ] = useState(false)
  // const [ isrotate, setIsrotate ] = useState(false)
  const [ activeIndex, setActiveIndex ] = useState(null)
  
  const handleVisibility = (index) => {    
    setIsVisible(!isVisible) 
    // setIsrotate(!isrotate)
    setActiveIndex( activeIndex === index ? null : index)
  }

  return (
    <div className={styles.container}>  
      <h1 className='text-[25px] font-semibold mt-7'>Frequently Asked Questions</h1> 

          
              {faq.map((item, index, Array) => (
              <div className={styles.eachSection}> 
                <div className='flex justify-between'>
                  <h1>{item.title}</h1> 
                  <AddIcon className={`${activeIndex === index ? styles.rotate : ""} cursor-pointer`} onClick={() => handleVisibility(index)}/>    
                </div>                 
        

        <div>  
            {activeIndex === index && (
                <p className={styles.description}>   
                  {item.desc}
                </p>
              )}
        </div> 

      </div>
    )
  
  )}  


    </div>
  )
}

export default Faq    
