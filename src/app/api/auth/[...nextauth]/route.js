import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const handler = NextAuth({

  pages : {
      
    signIn : '/auth/login'

  },

  providers: [
    CredentialsProvider({
      session: {
        strategy: "jwt",
      },

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, req) {
    

        const prisma = new PrismaClient();

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        if (credentials.password !== user.password) {
          return null;
        }

        return user;
        

        return null; 
      },

      callbacks: {
        async session({ session, token, user }) {
          session.accessToken = token.accessToken
          session.user.id = token.id
          
          return session
        }
      }
    }),
  ],
});

export { handler as GET, handler as POST };
