import {useRef} from "react";

const useInputRef = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const inputFocus = () =>{
        inputRef.current?.focus()
    }
    return{inputRef, inputFocus}

}

export default useInputRef