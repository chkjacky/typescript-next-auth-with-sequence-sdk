"use client";
import { useState } from "react";

export default function WhoAmIButton({
  whoAmIAction,
}: {
  whoAmIAction: () => Promise<string>;
}) {
  const [name, setName] = useState<string>();
  return (
    <div>
      <button
        className="border border-1 px-3"
        onClick={async () => {
          setName(await whoAmIAction());
        }}
      >
        Click to see Who Am I?
      </button>
      {name && <div>You are {name}</div>}
    </div>
  );
}
