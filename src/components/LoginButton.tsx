"use client";

import React from "react";
import { useSequenceProvider } from "@/hooks/SequenceProvider";
import { useSession } from "next-auth/react";

export default function LoginButton() {
  const { connect, disconnect } = useSequenceProvider();
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-row justify-center">
        <button
          onClick={disconnect}
          className="text-sm font-semibold leading-6 text-yellow-300 border border-1 border-yellow-300 p-2"
        >
          Logout (Disconnect From Sequence and Destroy Next Auth Session Key)
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-center">
      <button
        onClick={connect}
        className="text-sm font-semibold leading-6 text-yellow-300 border border-1 border-yellow-300 p-2"
      >
        Login (Connect With Sequence and Set Next Auth Session Key)
      </button>
    </div>
  );
}
