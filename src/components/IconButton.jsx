import * as React from "react";
import { Copy } from "lucide-react";

export function IconButton({ password, setCopied }) {
  return (
    <button
      type="button"
      className="rounded-full !bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:!bg-slate-400"
      onClick={() => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 4000);
      }}
    >
      <Copy size={16} />
    </button>
  );
}
