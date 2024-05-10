import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from './auth.config';


const login = async (credentials) => {
 try {
    const {MongoClient} = require("mongodb");
    const url = process.env.MONGO_CONN;
    const client = new MongoClient(url);    
    const dbName = process.env.MONGO_DB; // database name
    await client.connect();

    console.log('Connection OK');

    const db = client.db(dbName);
    const collection = db.collection('login');

    console.log('--------------------->')
    console.log(credentials.email)
    console.log(credentials.password)

    //find user
    const user = await collection.findOne({username: credentials.email});

    if(!user) throw Error ('Incorrect username or password!');

    console.log(user.pass)
    console.log(user)

    //check if passwords match, if not return error
    if(credentials.password === user.pass) {
        //if all ok return user details
        console.log(user);
        return(user);

    }           

 } catch (err) {
    console.log(err);
    throw new Error ('Login error');
 }
}

//destruction sign in, signout funciton and auth session
export const { signIn, signOut, auth } = NextAuth( {
    ...authConfig,
    providers: [
        CredentialsProvider( {
            async authorize(credentials) {
                try{
                    const user = await login(credentials);
                    return user;
                } catch(err) {
                    return null;
                }
            },
        }),
    ],

    /*Add additional information to session*/
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({session, token}) {
            if (token) {
                session.user.role = token.role;
            }
            return session;
        },
    },
});
