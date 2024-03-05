import NextAuth, { User } from "next-auth";
import { authOptions } from "@/config/authOptions";
import { AdapterUser } from "next-auth/adapters";

const handler = NextAuth(authOptions);

// See more @ https://stackoverflow.com/a/76811464
export { handler as GET, handler as POST };
