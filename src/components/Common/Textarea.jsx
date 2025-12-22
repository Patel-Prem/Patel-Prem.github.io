// src/components/common/Textarea.jsx
import { forwardRef } from "react";

export const Textarea = forwardRef(
  ({ label, error, rows = 4, className = "", ...props }, ref) => {
    const baseClasses =
      "w-full px-4 py-2.5 rounded-md border bg-background text-foreground transition-all resize-none " +
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary " +
      "disabled:opacity-50 disabled:cursor-not-allowed " +
      "placeholder:text-muted-foreground";

    const stateClasses = error
      ? "border-destructive focus-visible:ring-destructive focus-visible:border-destructive"
      : "border-border hover:border-primary/50";

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={`${baseClasses} ${stateClasses} ${className}`}
          {...props}
        />
        {error && <p className="text-sm text-destructive mt-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
