import React from "react";
import { IconButton } from "./IconButton";

export function Output({ password, setCopied }) {
  return (
    <div className="flex w-[60%] items-center space-x-2 justify-center ">
      <input
        className="flex h-10 w-[70%] rounded-md border border-white/70 bg-transparent px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
        type="text"
        value={password}
        readOnly
      ></input>
      <IconButton password={password} setCopied={setCopied}></IconButton>
    </div>
  );
}
