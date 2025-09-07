import { createContext, useState , useRef} from "react";
import runChat from "../config/gemini";

export const MyContext = createContext();

const MyProvider = ({children})=> {

  const inputRef = useRef(null);
  const [hide , setHide] = useState(true);
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [result ,setResult] = useState("");
  const[loader ,setLoader] = useState(false);


  const HandleOnClick = async() =>{
    const prompt = inputRef.current?.value.trim();
    if(!prompt) return;
      setHide(false)

      setLoader(true);
      const response =await runChat(prompt);
      setResult(response);
      setLoader(false);
    
    setPrevPrompts(prev=> [prompt, ...prev.slice(0,4)])
    inputRef.current.value = "";

    
  }

  return (  
    
    <MyContext.Provider value={{hide,setHide,HandleOnClick,inputRef,prevPrompts,result,loader}}>{children}</MyContext.Provider>
    )
}
export default MyProvider ; 
