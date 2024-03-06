 import NextAuth from "next-auth"
 import CredentialsProvider  from "next-auth/providers/credentials";
 import { PrismaClient } from "@prisma/client";


 const credentialsConfig = CredentialsProvider({

   name : "Credentials",
   credentials :{
     
     email : {
        label : "Email"
     },

     password : {

        lablel :"Password",
        type : "password"
     }

   },

   async authorize(credentials){

        const prisma = new PrismaClient();
        
       const user = await prisma.user.findUnique({

           where: {

              email : credentials.email
           }
       })

       if(!user) {

          return null
       }

       else if(credentials.password !== user.password) {

          return null
       }

      else return user 
    
   }


 })



const config = {
   
    providers : [credentialsConfig],
    callbacks : {

        authorized({request, auth}){
            const {pathname} = request.nextUrl

            if(pathname === "/home") return !!auth
            return true
        }


    }

}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
