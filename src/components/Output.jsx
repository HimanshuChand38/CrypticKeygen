import React from 'react';
import { IconButton } from './IconButton';

export function Output() {
  return (
    <div className="flex w-[100%] items-center space-x-2 justify-center ">
      <input
        className="flex h-10 w-[50%] rounded-md border border-white/70 bg-transparent px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
        type="text"
        placeholder="Random Password"
      ></input>
      <IconButton></IconButton>
    </div>
  )
}
