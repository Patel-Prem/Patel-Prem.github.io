// // src/components/common/Card.jsx
// import { forwardRef } from "react";

// /**
//  * Reusable Card component (matches the dark + green style in your image)
//  *
//  * Compound parts:
//  * - <Card />
//  * - <CardHeader title subtitle icon />
//  * - <CardContent />
//  * - <CardFooter />
//  * - <CardBadgeList items />
//  * - <CardProgress value />
//  */

// export const Card = forwardRef(
//   (
//     {
//       children,
//       className = "",
//       interactive = false, // hover lift + cursor
//       variant = "default", // 'default' | 'outlined' | 'glass'
//       padding = "p-5", // change to 'p-4' for compact
//       ...props
//     },
//     ref
//   ) => {
//     const variants = {
//       default: "bg-card text-foreground border border-border shadow-sm",
//       outlined: "bg-card text-foreground border border-border shadow-sm",
//       glass:
//         "bg-card/70 backdrop-blur-md text-foreground border border-border shadow-sm",
//     };

//     return (
//       <div
//         ref={ref}
//         {...props}
//         className={[
//           "rounded-2xl transition-all hover-elevate active-elevate-2",
//           variants[variant],
//           interactive
//             ? "cursor-pointer hover:shadow-lg hover:-translate-y-[2px]"
//             : "",
//           padding,
//           className,
//         ].join(" ")}
//       >
//         {children}
//       </div>
//     );
//   }
// );

// export const CardHeader = ({
//   title,
//   subtitle,
//   icon, // e.g. <FiCode />
//   className = "",
// }) => (
//   <div className={["flex items-start gap-3 mb-4", className].join(" ")}>
//     {icon && (
//       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-primary/15 text-accent-primary">
//         {icon}
//       </div>
//     )}
//     <div className="flex-1">
//       {title && <h3 className="text-lg font-semibold">{title}</h3>}
//       {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
//     </div>
//   </div>
// );

// export const CardContent = ({ children, className = "" }) => (
//   <div className={["space-y-3", className].join(" ")}>{children}</div>
// );

// export const CardFooter = ({ children, className = "" }) => (
//   <div
//     className={[
//       "mt-4 pt-4 border-t border-border flex items-center justify-between gap-2",
//       className,
//     ].join(" ")}
//   >
//     {children}
//   </div>
// );

// // Pills list (for technologies/skills)
// export const CardBadgeList = ({ items = [], className = "" }) => (
//   <div className={["flex flex-wrap gap-2", className].join(" ")}>
//     {items.map((item) => (
//       <span
//         key={item}
//         className="inline-flex items-center rounded-md px-3 py-1 text-sm
//                    bg-gray-800/60 text-gray-100
//                    dark:bg-dark-border dark:text-gray-200
//                    border border-border"
//       >
//         {item}
//       </span>
//     ))}
//   </div>
// );

// // Progress bar (for skill proficiency)
// export const CardProgress = ({ value = 0, label = `${value}%` }) => {
//   const safe = Math.min(Math.max(value, 0), 100);
//   return (
//     <div className="space-y-1">
//       <div className="flex items-center justify-between text-sm">
//         <span className="text-gray-400">Proficiency</span>
//         <span className="font-medium">{label}</span>
//       </div>
//       <div className="w-full bg-gray-700 rounded-full h-2">
//         <div
//           className="bg-accent-primary h-2 rounded-full transition-all"
//           style={{ width: `${safe}%` }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Card;


// src/components/common/Card.jsx
import { forwardRef } from "react";
import { motion } from "framer-motion";

export const Card = forwardRef(
  (
    {
      children,
      type = "default",
      icon,
      title,
      subtitle,
      interactive = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const showTimeline = type === "experience";

    const baseClasses =
      "rounded-xl border transition-all bg-card border-card-border text-card-foreground shadow-sm h-full";
    const interactiveClasses = interactive
      ? "cursor-pointer hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
      : "";

    const CardWrapper = interactive ? motion.div : "div";
    const motionProps = interactive
      ? { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } }
      : {};

    return (
      <div className={showTimeline ? "relative pl-12 h-full" : "h-full"}>
        {showTimeline && (
          <div className="absolute -left-[41px] top-6 flex items-center">
            <div className="h-3 w-3 rounded-full border-2 bg-primary border-primary" />
          </div>
        )}

        <CardWrapper
          ref={ref}
          {...motionProps}
          {...props}
          className={`${baseClasses} ${interactiveClasses} ${className}`}
        >
          {(icon || title || subtitle) && (
            <div className="flex items-start gap-3 p-5 pb-3">
              {icon && (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-xl">
                  {icon}
                </div>
              )}
              <div className="flex-1">
                {title && <h3 className="text-base font-semibold">{title}</h3>}
                {subtitle && (
                  <p className="text-sm text-primary mt-0.5">{subtitle}</p>
                )}
              </div>
            </div>
          )}

          {/* <div className="px-5 pb-5">{children}</div> */}
          {children}
        </CardWrapper>
      </div>
    );
  }
);

export const CardMeta = ({ items = [], className = "" }) => (
  <p className={`text-sm text-muted-foreground mb-3 ${className}`}>
    📅 {items.join(" • ")}
  </p>
);

export const CardDescription = ({ children, className = "" }) => (
  <p className={`text-sm text-foreground mb-4 ${className}`}>{children}</p>
);

export const CardList = ({ items = [], className = "" }) => (
  <ul className={`text-sm text-muted-foreground space-y-1 mb-4 list-disc pl-5 ${className}`}>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export const CardBadges = ({ items = [], className = "" }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
    {items.map((item) => (
      <span
        key={item}
        className="inline-flex items-center rounded-md px-3 py-1 text-xs font-medium
                   bg-muted text-muted-foreground border border-border
                   hover:bg-accent hover:text-accent-foreground transition-colors
                   hover-elevate"
      >
        {item}
      </span>
    ))}
  </div>
);

export default Card;
