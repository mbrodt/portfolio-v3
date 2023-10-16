import Link from "next/link"
import clsx from "clsx"

const variantStyles = {
  primary:
    "bg-rose-500 font-semibold text-zinc-100 hover:bg-rose-700 active:bg-rose-800 active:text-rose-100/70 dark:bg-rose-700 dark:hover:bg-rose-600 dark:active:bg-rose-700 dark:active:text-rose-100/70",
  secondary:
    "bg-rose-50 font-medium text-rose-900 hover:bg-rose-100 active:bg-rose-100 active:text-rose-900/60 dark:bg-rose-800/50 dark:text-rose-300 dark:hover:bg-rose-800 dark:hover:text-rose-50 dark:active:bg-rose-800/50 dark:active:text-rose-50/70",
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
    variantStyles[variant],
    className,
  )

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
