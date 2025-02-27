interface ButtonLabelProps {
  label: string;
}

export function ButtonLabel({ label }: ButtonLabelProps) {
  return <span className="hidden md:inline">{label}</span>;
}
