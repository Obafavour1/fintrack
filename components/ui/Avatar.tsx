export const Avatar = ({
  name,
  size = "sm",
}: {
  name: string;
  size?: "sm" | "md";
}) => {
  const sizeClasses = size === "sm" ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm";

  return (
    <div
      className={`${sizeClasses} rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold`}
    >
      {name.charAt(0)}
    </div>
  );
};
