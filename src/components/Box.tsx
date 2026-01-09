import { clsx } from "clsx";

function Box({
  children,
  className,
  key,
}: {
  children: React.ReactNode;
  className?: string;
  key: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "text-center text-white rounded-xl flex flex-col gap-4"
      )}
      key={key}
    >
      {children}
    </div>
  );
}
export default Box;
