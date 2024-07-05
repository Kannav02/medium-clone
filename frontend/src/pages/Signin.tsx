import { Link, useNavigate } from "react-router-dom";
import { Quote } from "../components/Quote";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import {userSignInType} from "@kannav02/common";
import { useState } from "react";
import axios from "axios";
import {URL} from "../config"

export const Signin = () => {
    const navigate=useNavigate()
    const [isLoading,setLoading]=useState(false)
    const [postDetails,setPostDetails]=useState<userSignInType>({
        email:"",
        password:""

    })
    const sendReq=async(reqDetails:userSignInType)=>{
        setLoading(true)
        try{
            const response=await axios.post(`${URL}api/v1/user/signin`,{
                email:reqDetails.email,
                password:reqDetails.password
            })
            const token=response.data.token
            localStorage.setItem("token",token)
            navigate("/blogs")

        }
        catch(e){
            alert("Server Error Occured")
        }
        finally{
            setLoading(false)
        }
    
    


    }
  return isLoading?(<div>Loading</div>):(
    <div className="grid  grid-cols-1 lg:grid-cols-2">
      <div className="mt-6 lg:mt-0 flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center max-w-screen-md w-2/3 p-2">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">Create An Account</h1>
            <p className="text-center font-light">
              Dont Have An Account? <Link className="underline" to="/signup">Signup</Link>
            </p>
          </div>
        <InputBox label="Email" placeholder="Enter Your Email" onChange={(e)=>{
            setPostDetails((prevValue)=>({
                ...prevValue,
                email:e.target.value
            }))
        }}/>
        <InputBox label="Password" type="password" onChange={(e)=>{
            setPostDetails((prevValue)=>({
                ...prevValue,
                password:e.target.value
            }))
        }}/>

        <Button label="Sign In" type="primary" handleClick={()=>{
            sendReq(postDetails)
        }}/>
        </div>

      </div>

      <div className="invisible lg:visible">
        <Quote />
      </div>
    </div>
  );
};

