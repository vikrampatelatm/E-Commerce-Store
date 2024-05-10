import { useState,useEffect } from "react";
import { useAuth } from '../../context/auth.jsx'
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute(){
    const [ok,setOk] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [auth,setAuth] = useAuth()

    useEffect(()=>{
        const authCheck = async()=>{
            const res = await axios({
                method: 'get',
                url: 'http://localhost:8080/auth/user-auth',
            });
            if(res.data.ok){
                setOk(true)
            }
            else{
                setOk(false)
            }
        }
        if(auth?.token) authCheck()
    },[auth?.token])

    return ok ?<Outlet/>: <Spinner path='/'/>;
}