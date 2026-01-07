import { clsx } from "clsx";

function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "text-center text-white rounded-xl flex flex-col gap-4"
      )}
    >
      {children}
    </div>
  );
}
export default Box;
