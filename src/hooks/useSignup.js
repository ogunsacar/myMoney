import { useState,useEffect } from "react"
import { projectAuth } from '../firebase/config'
import { useAuthContext } from "./useAuthContext";


export const useSignup = ()=>{
    const [isCancelled , setIsCancelled] = useState(false)
    const[error,setError] = useState(null)
    const[isPending,setIsPending] = useState(false)
    const { dispatch } = useAuthContext()
    
    const signup = async (email,password,displayName) =>{
        setError(null)
        setIsPending(true)
        
        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email,password)

            if(!res){
                throw new Error('Could not complete sign up!')
            }

            await res.user.updateProfile({displayName: displayName})

            dispatch({type:'LOG_IN' , payload: res.user})

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



    return {error,isPending,signup}
}