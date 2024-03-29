import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"

import db from "@/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
const bcrypt = require("bcrypt");
export const authOptions = {


  adapter: PrismaAdapter(db),

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // console.log(req);
        const { email, password } = credentials;
        const user = await db.user.findUnique({ where: { email } })
        // console.log(user);
        const hash = await bcrypt.compare(password, user.password)
        console.log(hash);
        if (hash) {
          return user
        }
        else {
          return null
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/login',

  },
  session: {
    strategy: 'jwt'
  },
  debug: process.env.NODE_ENV === "development",

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
