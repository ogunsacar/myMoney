import { useEffect, useState } from "react"
import { projectAuth } from '../firebase/config'
import { useAuthContext } from "./useAuthContext";

export const useLogin = ()=>{
    const [isCancelled , setIsCancelled] = useState(false)
    const[error,setError] = useState(null)
    const[isPending,setIsPending] = useState(false)
    const { dispatch } = useAuthContext()
    
    const login = async (email,password) =>{
        setError(null)
        setIsPending(true)
        
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email,password)

            dispatch({type:'LOG_IN', payload : res.user})


            if(!isCancelled){
                setError(null)
                setIsPending(false)
            }

        } catch (err) {
            if(!isCancelled){
                console.log(err.message);
                setError(err.message)
                setIsPending(false)
            }
        }

    }

    useEffect(()=> {
        return () => setIsCancelled(true)
    },[])


    return {error,isPending,login}
}