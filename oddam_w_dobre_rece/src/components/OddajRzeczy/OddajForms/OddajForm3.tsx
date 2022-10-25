import React, {FC, useContext} from "react";
import {motion} from "framer-motion";
import {GlobalContext} from "../OddajContext/GlobalContextProv";

interface Props{
    children: React.ReactNode
}

const OddajForm3:FC<Props> = ({children}) => {

    return (
        <motion.main className='oddajForm__inputs'
                     initial={{opacity: 0, y: -40}}
                     animate={{opacity: 1, y: 0}}
                     transition={{delay: 0.1}}>

            {children}

        </motion.main>
    );
};

export default OddajForm3;