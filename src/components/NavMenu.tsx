"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

type UserTypeExtension = AdapterUser & {
  walletId?: string | null | undefined; // Add walletId property
};
type SessionTypeExtension = Session & {
  user?: UserTypeExtension | null | undefined;
};

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

function AuthButton() {
  const { data: session } = useSession() as { data: SessionTypeExtension };

  console.log("session ", session);

  if (session) {
    return (
      <>
        {session?.user?.email} <br />
        {session?.user?.walletId
          ? session.user.walletId
          : "Wallet ID not available"}
        <br />
        <button
          className="border border-blue-300 p-2"
          onClick={() => signOut()}
        >
          Sign out (This destroys Next Auth Session without disconnecting
          Sequence)
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      {/* <button onClick={() => signIn()}>Sign in</button> */}
    </>
  );
}

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div>
      <ul>
        <Link href="/">
          <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            Home
          </li>
        </Link>
        {/* <Link href="/protected">
          <li
            className={
              pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Protected Route
          </li>
        </Link> */}
        <Link href="/demo-server-action">
          <li
            className={
              pathname === "/demo-server-action" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Server Action
          </li>
        </Link>
        {/* <Link href="/apiFromClient">
          <li
            className={
              pathname === "/apiFromClient" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            API From Client
          </li>
        </Link> */}
        <Link href="/demo-api-from-server">
          <li
            className={
              pathname === "/demo-api-from-server"
                ? ACTIVE_ROUTE
                : INACTIVE_ROUTE
            }
          >
            API From Server
          </li>
        </Link>
      </ul>

      <hr className="my-4" />

      <div className="mb-5">
        <h2> Login Details: </h2>
        <AuthButton />
      </div>

      <hr className="w-1/2 mb-5" />
    </div>
  );
}
