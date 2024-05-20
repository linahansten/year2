import { getUserByUsername } from "@/utils/handleDatabase";
import  { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const authOptions:AuthOptions  = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "UserName",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials){
          return "hola"
        }
        const user = await getUserByUsername(credentials.username, credentials.password)
        console.log(user)
        return user
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn:"/sign-in"
  },
  secret: `${process.env.NEXTAUTH_SECRET}`,

};