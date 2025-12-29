import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";

interface TitleBoxProps extends ComponentPropsWithoutRef<"h2"> {
  className?: string;
  children: React.ReactNode;
}

function TitleBox({ className, children, ...props }: TitleBoxProps) {
  return (
    <h2 className={clsx("leading-10 font-medium", { className })} {...props}>
      {children}
    </h2>
  );
}

export default TitleBox;
