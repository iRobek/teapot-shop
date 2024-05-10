'use server';


import { signIn, signOut } from '@/app/auth';
import { AuthError } from 'next-auth';

export async function logOut(){
    await signOut();
}

export async function loginUser (formData) {

    const email = formData.get("email");
    const password = formData.get("pass");

    console.log('-------------------------->')
    console.log(email)
    console.log(password)
    
    try{
         await signIn("credentials", {email, password});
     } catch(err) {
         if(err instanceof AuthError) {
             switch (err.type) {
                 case 'CredentialsSignin':
                     return {msg:'Incorrect username or password.'}
                 default:
                     return {msg:'Somethinng went wrong.'}
             }
         }
         throw err;        
    }

}