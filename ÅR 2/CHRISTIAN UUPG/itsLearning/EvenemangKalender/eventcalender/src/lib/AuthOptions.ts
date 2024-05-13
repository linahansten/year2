import  { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const authOptions:AuthOptions  = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        return { id: 1, name: "J Smith", email: "john@gmail.com"} as any
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  secret: `${process.env.NEXTAUTH_SECRET}`
};