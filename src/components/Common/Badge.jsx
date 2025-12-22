// // src/components/common/Badge.jsx

// /**
//  * Reusable Badge component
//  *
//  * Usage:
//  * <Badge>React</Badge>
//  * <Badge variant="success">Active</Badge>
//  * <Badge variant="outline" size="sm">TypeScript</Badge>
//  * <Badge variant="dot" dotColor="green">Online</Badge>
//  */

// export const Badge = ({
//   children,
//   variant = "default", // 'default' | 'outline' | 'success' | 'warning' | 'error' | 'info' | 'dot'
//   size = "md", // 'sm' | 'md' | 'lg'
//   dotColor, // for variant="dot", e.g. "green" | "red" | "yellow"
//   className = "",
//   ...props
// }) => {
//   const variants = {
//     default: "bg-[#2a2a2a] text-gray-200 border border-[#3a3a3a]",
//     outline: "bg-transparent text-gray-300 border border-[#3a3a3a]",
//     success: "bg-[#117e39]/20 text-[#117e39] border border-[#117e39]/30",
//     warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
//     error: "bg-red-500/20 text-red-400 border border-red-500/30",
//     info: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
//     dot: "bg-[#2a2a2a] text-gray-200 border border-[#3a3a3a] flex items-center gap-2",
//   };

//   const sizes = {
//     sm: "px-2 py-0.5 text-xs",
//     md: "px-3 py-1 text-xs",
//     lg: "px-4 py-1.5 text-sm",
//   };

//   const dotColors = {
//     green: "bg-[#117e39]",
//     red: "bg-red-500",
//     yellow: "bg-yellow-500",
//     blue: "bg-blue-500",
//     gray: "bg-gray-500",
//   };

//   return (
//     <span
//       {...props}
//       className={[
//         "inline-flex items-center rounded-md font-medium transition-colors hover:bg-[#3a3a3a]",
//         variants[variant],
//         sizes[size],
//         className,
//       ].join(" ")}
//     >
//       {variant === "dot" && dotColor && (
//         <span
//           className={`h-2 w-2 rounded-full ${
//             dotColors[dotColor] || dotColors.gray
//           }`}
//         />
//       )}
//       {children}
//     </span>
//   );
// };

// // Badge group (for multiple badges with consistent spacing)
// export const BadgeGroup = ({ children, className = "" }) => (
//   <div className={["flex flex-wrap gap-2", className].join(" ")}>
//     {children}
//   </div>
// );

// export default Badge;





// src/components/common/Badge.jsx
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
    default: "bg-muted text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground",
    outline: "[border-color:var(--button-outline)] text-foreground hover:bg-accent",
    success: "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20",
    warning: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30 hover:bg-yellow-500/20",
    error: "bg-destructive/10 text-destructive border-destructive/30 hover:bg-destructive/20",
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
        <span className={`h-2 w-2 rounded-full ${dotColors[dotColor] || dotColors.gray}`} />
      )}
      {children}
    </BadgeWrapper>
  );
};

export const BadgeGroup = ({ children, className = "" }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>{children}</div>
);

export default Badge;
