"use client"
import { motion, AnimatePresence  } from "motion/react";
import { usePathname } from "next/navigation";

export default function Template ({children} ){
      const pathname = usePathname();
    return(
       
        <AnimatePresence mode="wait">

            <motion.div key="div1" className='fixed top-0 bottom-0 right-full w-screen h-screen z-140 bg-primary'
                initial={{x:"100%",width:"100%"}}
                animate={{x:"0%",width:"0%"}}
                transition={{duration:0.8,ease: [0.42, 0, 0.58, 1]}}
            />
            <motion.div key="div2" className='fixed top-0 bottom-0 right-full w-screen h-screen z-130 bg-primary-soft'
                initial={{x:"100%",width:"100%"}}
                animate={{x:"0%",width:"0%"}}
                transition={{delay:0.2,duration:0.8, ease: [0.42, 0, 0.58, 1]}}
            />
            {/* <motion.div key="div3" className='fixed top-0 bottom-0 right-full w-screen h-screen z-110 bg-background'
                initial={{x:"100%",width:"100%"}}
                animate={{x:"0%",width:"0%"}}
                transition={{delay:0.4,duration:0.8, ease: [0.42, 0, 0.58, 1]}}
            /> */}
        
                    <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: .5, delay: 0.5 }}
            >
            {children}
            </motion.div>
            
        
        </AnimatePresence>
    )
}
