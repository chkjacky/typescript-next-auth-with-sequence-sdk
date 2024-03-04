import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/config/authOptions";

export async function GET() {
  const session = await getServerSession(authOptions);

  return NextResponse.json({ email: session?.user?.email ?? "Not Logged In" });
}
