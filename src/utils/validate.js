
export const validateData=(email,password)=>{
    // if(!loginStatus && name==null)return "Please Enter Name";
   const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
   const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

   if(!isEmailValid) return "Email is not valid";
   if(!isPasswordValid) return "Password is not valid";
   return null;
}