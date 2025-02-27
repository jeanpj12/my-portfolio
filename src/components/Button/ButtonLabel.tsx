interface ButtonLabelProps {
  label: string;
}

export function ButtonLabel({ label }: ButtonLabelProps) {
  return <span>{label}</span>;
}
