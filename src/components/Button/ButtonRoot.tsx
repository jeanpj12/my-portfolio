import { ReactNode } from "react";

interface ButtonRootProps {
  children: ReactNode;
  onAction?: () => void;
}

export function ButtonRoot({ children, onAction }: ButtonRootProps) {
  return (
    <button
      onClick={onAction}
      className="flex gap-2 items-center align-center cursor-pointer px-2 py-1 rounded-md border border-gray-500/0 hover:border-gray-500/50 hover:bg-gray-500/30 transition duration-300 ease-in-out"
    >
      {children}
    </button>
  );
}
