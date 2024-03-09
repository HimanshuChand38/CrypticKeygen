import React from 'react';
import { IconButton } from './IconButton';

export function Output() {
  return (
    <div className="flex w-[100%] items-center space-x-2 justify-center ">
      <input
        className="flex h-10 w-[50%] rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="email"
        placeholder="Email"
      ></input>
      <IconButton></IconButton>
    </div>
  )
}
