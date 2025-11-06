import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_0_30px_hsl(280_85%_60%_/_0.6)] hover:scale-[1.02] active:scale-[0.98] rounded-2xl backdrop-blur-sm",
        destructive: "bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground hover:shadow-[0_0_30px_hsl(0_85%_60%_/_0.6)] hover:scale-[1.02] active:scale-[0.98] rounded-2xl",
        outline: "border-2 border-primary/50 bg-background/50 backdrop-blur-md hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_hsl(280_85%_60%_/_0.4)] hover:scale-[1.02] active:scale-[0.98] rounded-2xl text-foreground",
        secondary: "bg-gradient-to-r from-secondary to-blue-500 text-secondary-foreground hover:shadow-[0_0_30px_hsl(190_85%_55%_/_0.6)] hover:scale-[1.02] active:scale-[0.98] rounded-2xl backdrop-blur-sm",
        ghost: "hover:bg-primary/10 hover:text-primary rounded-2xl hover:shadow-[0_0_15px_hsl(280_85%_60%_/_0.3)]",
        link: "text-primary underline-offset-4 hover:underline hover:text-accent",
        glass: "bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_25px_hsl(280_85%_60%_/_0.4)] hover:scale-[1.02] active:scale-[0.98] rounded-2xl text-foreground",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-xl px-4",
        lg: "h-14 rounded-2xl px-10 text-base",
        icon: "h-11 w-11 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
