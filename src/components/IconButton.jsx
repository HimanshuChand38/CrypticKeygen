import * as React from 'react'
import { Copy } from 'lucide-react'

export function IconButton() {
  return (
    <button
      type="button"
      className="rounded-full !bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:!bg-slate-400"
    >
        <Copy size={16} />
    </button>
  )
}