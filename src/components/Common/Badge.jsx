import { motion } from "framer-motion";

export const Badge = ({
  children,
  variant = "default",
  size = "md",
  dotColor,
  interactive = false,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 whitespace-nowrap font-medium rounded-md transition-colors border";

  const variants = {
    default:
      "hover: bg-muted text-muted-foreground border-border bg-transparent hover:text-foreground",
    outline:
      "[border-color:var(--button-outline)] text-foreground hover:bg-accent",
    success: "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20",
    warning:
      "bg-yellow-500/10 text-yellow-500 border-yellow-500/30 hover:bg-yellow-500/20",
    error:
      "bg-destructive/10 text-destructive border-destructive/30 hover:bg-destructive/20",
    info: "bg-blue-500/10 text-blue-500 border-blue-500/30 hover:bg-blue-500/20",
    dot: "bg-muted text-muted-foreground border-border hover:bg-accent",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm",
  };

  const dotColors = {
    green: "bg-primary",
    red: "bg-destructive",
    yellow: "bg-yellow-500",
    blue: "bg-blue-500",
    gray: "bg-muted-foreground",
  };

  const BadgeWrapper = interactive ? motion.span : "span";
  const motionProps = interactive
    ? { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }
    : {};

  return (
    <BadgeWrapper
      {...motionProps}
      {...props}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} hover-elevate ${className}`}
    >
      {variant === "dot" && dotColor && (
        <span
          className={`h-2 w-2 rounded-full ${
            dotColors[dotColor] || dotColors.gray
          }`}
        />
      )}
      {children}
    </BadgeWrapper>
  );
};

export const BadgeGroup = ({ children, className = "" }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>{children}</div>
);

export default Badge;
