import { clsx } from "clsx";

function ImageBox({
  width,
  className,
  src,
  alt,
  children,
}: {
  width?: number;
  className?: string;
  src: string;
  alt: string;
  children?: React.ReactNode;
}) {
  return (
    <figure>
      <img
        width={width}
        className={clsx(className, "mx-auto")}
        src={`/images/${src}`}
        alt={alt}
      />

      {children}
    </figure>
  );
}

export default ImageBox;
