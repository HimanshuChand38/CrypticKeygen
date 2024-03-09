import * as React from 'react'
import { Plus } from 'lucide-react'

export function IconButton() {
  return (
    <button
      type="button"
      className=" px-3 py-3 text-white hover:bg-black/80"
    >
      <Plus className="h-4 w-4" />
    </button>
  )
}