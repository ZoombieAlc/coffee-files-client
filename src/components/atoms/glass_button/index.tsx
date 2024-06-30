import "./style.css";

function GlassButton({
  children,
  onClick,
  className,
  otherProps,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  otherProps?: any;
}) {
  return (
    <div
      className={`border border-gray-300 w-60 h-60 flex justify-center items-center text-white bg-glass rounded-lg cursor-pointer transition-all active:scale-95 hover:scale-105 select-none ${className}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default GlassButton;
