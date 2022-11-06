import React from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../headers/HomeHeader";
import logo from "../../../assets/logo.svg";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();

  // const navigateToAdmingPage = () => {
  //   navigate("/adminpage");
  // };
  
  const navigateToHome = () => {
    navigate("/");
  };

  const [values, setValues] = useState({
    email: '',
    password:''
  });

  const { email, password} = values;

  const handleChange = name => (e) =>{
      // console.log(e.target.value);
      setValues({...values, [name]: e.target.value});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        const {data} = await axios.post('/api/signin', {
            email,
            password
        });
        console.log(data);
        if  (data.success === true){
            setValues({ email: '', password:''});
            toast.success("Log In successfully");
            localStorage.setItem("token", JSON.stringify(data))
            if (typeof window !== "undefined"){
                setTimeout(()=>{
                    history.push('/user/dashboard');
                }, 2000);
            }
          
        }
    } catch(err){
        console.log(err.response.data.error);
        toast.error(err.response.data.error);
    }

  return (
    <div id="signin">
      <div className="w-full sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div
              className="flex flex-shrink-0 items-center"
              onClick={navigateToHome}>
            <img className="block h-8 w-auto lg:hidden" src={logo} />
            <img className="hidden h-8 w-auto lg:block" src={logo} />
          </div>
        </div>
      </div>

      <div class="m-auto sm:m-16 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Sign In</h2>

          <form class="max-w-lg border rounded-lg mx-auto">
            <div class="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
                <input
                  name="email"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  onChange={handleChange("email")}/>
              </div>

              <div>
                <label for="password" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
                <input
                  name="password"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  onChange={handleChange("password")}
                />
              </div>

              <button
                onClick={handleSubmit}
                class="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
}

export default SignIn;
