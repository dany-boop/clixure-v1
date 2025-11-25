// components/ui/button.tsx
'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  ComponentProps,
  forwardRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';

import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

const buttonVariants = cva(
  // Base styles for all buttons, Tailwind JIT-compatible
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '', // Relies on xcolor for styling
        outline: 'border bg-transparent',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'bg-transparent',
        link: 'bg-transparent underline-offset-4 hover:underline',
        soft: '',
      },
      xcolor: {
        primary: '',
        gray: '',
        danger: '',
        success: '',
        warning: '',
      },
      size: {
        xs: 'h-7 px-2 text-xs',
        sm: 'h-8 px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 px-6 text-base',
        xl: 'h-11 px-6 text-lg',
        icon: 'h-9 w-9',
        full: 'h-10 w-full px-6 text-base', // Full-width button
      },
      motion: {
        none: '', // No animation
        loading: 'relative animate-pulse', // Loading state
      },
    },
    compoundVariants: [
      // Default variant styles for each xcolor
      {
        variant: 'default',
        xcolor: 'primary',
        className:
          'bg-primary/95 text-primary-foreground hover:bg-primary/90 active:bg-primary/95',
      },
      {
        variant: 'default',
        xcolor: 'gray',
        className:
          'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800',
      },
      {
        variant: 'default',
        xcolor: 'danger',
        className:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/95',
      },
      {
        variant: 'default',
        xcolor: 'success',
        className:
          'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
      },
      {
        variant: 'default',
        xcolor: 'warning',
        className:
          'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700',
      },

      // Outline variant styles for each xcolor
      {
        variant: 'outline',
        xcolor: 'primary',
        className:
          'border-primary text-primary hover:bg-primary/10 active:bg-primary/20',
      },
      {
        variant: 'outline',
        xcolor: 'gray',
        className:
          'border-gray-300 disabled:bg-gray-100 text-gray-700 hover:bg-gray-50 active:bg-gray-100',
      },
      {
        variant: 'outline',
        xcolor: 'danger',
        className:
          'border-destructive text-destructive hover:bg-destructive/10 active:bg-destructive/20',
      },
      {
        variant: 'outline',
        xcolor: 'success',
        className:
          'border-green-600 text-green-600 hover:bg-green-100 active:bg-green-200',
      },
      {
        variant: 'outline',
        xcolor: 'warning',
        className:
          'border-amber-500 text-amber-600 hover:bg-amber-100 active:bg-amber-200',
      },

      // Secondary variant styles for each xcolor
      {
        variant: 'secondary',
        xcolor: 'primary',
        className:
          'bg-primary-100 text-primary-900 hover:bg-primary-200 active:bg-primary-300',
      },
      {
        variant: 'secondary',
        xcolor: 'gray',
        className:
          'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300',
      },
      {
        variant: 'secondary',
        xcolor: 'danger',
        className: 'bg-red-100 text-red-900 hover:bg-red-200 active:bg-red-300',
      },
      {
        variant: 'secondary',
        xcolor: 'success',
        className:
          'bg-green-100 text-green-900 hover:bg-green-200 active:bg-green-300',
      },
      {
        variant: 'secondary',
        xcolor: 'warning',
        className:
          'bg-amber-100 text-amber-900 hover:bg-amber-200 active:bg-amber-300',
      },

      // Ghost variant styles for each xcolor
      {
        variant: 'ghost',
        xcolor: 'primary',
        className: 'text-primary hover:bg-primary/10 active:bg-primary/20',
      },
      {
        variant: 'ghost',
        xcolor: 'gray',
        className: 'text-gray-600 hover:bg-gray-100 active:bg-gray-200',
      },
      {
        variant: 'ghost',
        xcolor: 'danger',
        className:
          'text-destructive hover:bg-destructive/10 active:bg-destructive/20',
      },
      {
        variant: 'ghost',
        xcolor: 'success',
        className: 'text-green-600 hover:bg-green-100 active:bg-green-200',
      },
      {
        variant: 'ghost',
        xcolor: 'warning',
        className: 'text-amber-600 hover:bg-amber-100 active:bg-amber-200',
      },

      // Soft variant styles for each xcolor
      {
        variant: 'soft',
        xcolor: 'primary',
        className:
          'bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/25',
      },
      {
        variant: 'soft',
        xcolor: 'gray',
        className:
          'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300',
      },
      {
        variant: 'soft',
        xcolor: 'danger',
        className:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 active:bg-destructive/25',
      },
      {
        variant: 'soft',
        xcolor: 'success',
        className:
          'bg-green-100 text-green-700 hover:bg-green-200 active:bg-green-300',
      },
      {
        variant: 'soft',
        xcolor: 'warning',
        className:
          'bg-amber-100 text-amber-700 hover:bg-amber-200 active:bg-amber-300',
      },

      // Link variant styles for each xcolor
      {
        variant: 'link',
        xcolor: 'primary',
        className: 'text-primary hover:text-primary-700',
      },
      {
        variant: 'link',
        xcolor: 'gray',
        className: 'text-gray-600 hover:text-gray-900',
      },
      {
        variant: 'link',
        xcolor: 'danger',
        className: 'text-destructive hover:text-destructive-700',
      },
      {
        variant: 'link',
        xcolor: 'success',
        className: 'text-green-600 hover:text-green-800',
      },
      {
        variant: 'link',
        xcolor: 'warning',
        className: 'text-amber-600 hover:text-amber-800',
      },
    ],
    defaultVariants: {
      variant: 'default',
      xcolor: 'primary',
      size: 'md',
      motion: 'none',
    },
  }
);

export type ButtonColor = NonNullable<ButtonProps['xcolor']>;
export type variant = NonNullable<ButtonProps['variant']>;
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    // ActionButton props
    action?: () => Promise<void> | Promise<any>;
    loadingText?: ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      size,
      loading,
      leftIcon,
      rightIcon,
      xcolor,
      action,
      loadingText,
      onClick,
      disabled,
      ...props
    },
    ref
  ) => {
    const [asyncLoading, setAsyncLoading] = useState(false);

    // Use asyncLoading if action is provided, otherwise use the loading prop
    const isLoading = action ? asyncLoading : loading;

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isLoading || disabled) return;

      if (action) {
        setAsyncLoading(true);

        try {
          await action();
        } catch (error) {
          console.log('error', error);
          // Silently handle errors - let the calling code handle error states
          // You could add logging here if needed
          // console.error('Button action error:', error);
        } finally {
          setAsyncLoading(false);
        }
      } else if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        {...props}
        className={cn(buttonVariants({ variant, size, xcolor }), className)}
        disabled={isLoading || disabled}
        onClick={handleClick}
      >
        {isLoading ? (
          <Icon
            icon="picon:spinner"
            className={cn(
              'animate-spin',
              size === 'lg' ? 'mr-1.5 size-6' : 'mr-1 size-5'
            )}
          />
        ) : (
          leftIcon && <span className="mr-2">{leftIcon}</span>
        )}
        {isLoading && loadingText ? loadingText : children}
        {rightIcon && !isLoading && <span className="ml-1">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
