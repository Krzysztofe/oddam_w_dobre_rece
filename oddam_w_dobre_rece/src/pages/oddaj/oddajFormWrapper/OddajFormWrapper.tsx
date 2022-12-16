import React, {FC} from 'react';
import {motion} from "framer-motion";

interface Props{
   children: React.ReactNode
}

const OddajFormWrapper:FC <Props> = ({children}) => {

    return (
        <>
            <motion.main className='oddajFormWrapper'
                         initial={{opacity: 0, y: -40}}
                         animate={{opacity: 1, y: 0}}
                         transition={{delay: 0.1}}>

                {children}

            </motion.main>
        </>
    );
};

export default OddajFormWrapper;