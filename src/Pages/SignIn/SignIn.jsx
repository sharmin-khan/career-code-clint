import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import signInLottie from '../../assets/Lotties/signin.json'
import Lottie from 'react-lottie';
import SocialLogIn from '../Shared/SocialLogIn';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext)
    
      const handleSignIn = (e)=>{
         e.preventDefault();
         const form = e.target;
         const email = e.target.email.value;
         const password = e.target.password.value;
         console.log(email,password);
      //sing in user
      signInUser(email, password)
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
     <Lottie options={{animationData:signInLottie,loop:true}} height={400}
  width={400}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
       <h1 className="text-5xl font-bold text-center mt-3">Sign In now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignIn}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </fieldset>
        </form>
        <div className='text-center'>
          <SocialLogIn></SocialLogIn>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;