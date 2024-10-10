import { createContext, useState } from "react";
import runChat from "../config/vitR";

export const Context = createContext();


const ContextProvider = (props) => {

    const[input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt]= useState("");
    const [prevPrompts,setprevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState("");
    const [resultData,setResultData] = useState("");
    

    const onSent = async(prompt)=>{
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
         const response = await runChat(input)
         setResultData(response)
         setLoading(false)
         setInput("")
         
    }

    const contextValue = {
        prevPrompts,
        setprevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput



    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>

    )
}

export default ContextProvider