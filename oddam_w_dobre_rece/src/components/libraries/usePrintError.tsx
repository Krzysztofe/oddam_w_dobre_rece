import React, {useEffect, useState} from 'react';

const usePrintError = () => {
    const [printError, setPrintError] = useState(false)
    const [buttonClick, setButtonClick] = useState(false)

    const usePrintChange = () => {
        useEffect(() => {
            const timeId = setTimeout(() => {
                setPrintError(false)
            }, 4000)
            return () => {
                clearTimeout(timeId)
            }
        }, [buttonClick])
    }

    return {printError, setPrintError, setButtonClick, usePrintChange}
};

export default usePrintError;