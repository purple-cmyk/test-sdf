import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, accept, ...props }, ref) => {
    const resolvedAccept = type === "file" && !accept ? "image/jpeg,image/jpg,image/png,image/webp,image/gif,image/bmp,image/svg+xml,.jpg,.jpeg,.png,.webp,.gif,.bmp,.svg" : accept;

    return (
      <input
        type={type}
        accept={resolvedAccept}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
