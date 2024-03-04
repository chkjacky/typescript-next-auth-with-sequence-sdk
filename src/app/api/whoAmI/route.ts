import { authOptions } from "@/config/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  return NextResponse.json({ email: session?.user?.email ?? "Not Logged In" });
}
