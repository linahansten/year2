import NextAuth, { AuthOptions, User } from "next-auth"
import { authOptions } from "../../../../lib/AuthOptions"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }