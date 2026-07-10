// src/auth.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // Optional: customise session, callbacks, pages, etc.
  callbacks: {
    async session({ session, token }) {
      // Add custom fields to the session if needed
      session.user.id = token.sub!; // For v5, sub is the user ID
      return session;
    },
  },
  // Optional: if you want to use JWT strategy instead of database sessions
  // session: { strategy: "jwt" },
  // Optional: custom sign-in page
  // pages: { signIn: "/auth/signin" },
});
