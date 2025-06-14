import React, { useContext } from 'react';
import Lottie from 'react-lottie';
import registerLottie from '../../assets/Lotties/register.json'
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handleRegister = (e)=>{
     e.preventDefault();
     const form = e.target;
     const email = e.target.email.value;
     const password = e.target.password.value;
     console.log(email,password);

     //create user
    createUser(email, password)
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <Lottie options={{animationData:registerLottie,loop:true}} height={400}
  width={400}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
       <h1 className="text-5xl font-bold">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;