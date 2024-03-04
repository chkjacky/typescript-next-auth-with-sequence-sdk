import NextAuth, { User } from "next-auth";
import { authOptions } from "@/config/authOptions";
import { AdapterUser } from "next-auth/adapters";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
