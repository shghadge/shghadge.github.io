import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const base =
  'inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-none';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-orange-400 text-slate-900 font-bold border border-orange-400',
  secondary:
    'border border-orange-400 text-orange-400 bg-transparent',
  tertiary:
    'bg-transparent border-none text-orange-400 underline px-0 py-0',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', children, ...props }, ref) => (
    <button
      ref={ref}
      className={`${base} ${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = 'Button';

export default Button;
