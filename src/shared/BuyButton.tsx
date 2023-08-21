import { HTMLProps } from 'react'
import cx from 'classnames'
import { BiRightArrowAlt } from 'react-icons/bi'

interface BuyButtonProps extends Omit<HTMLProps<HTMLAnchorElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
}

export function BuyButton(props: BuyButtonProps) {
  const { className, children, size = 'sm', ...otherProps } = props

  const sizeToClasses = {
    sm: 'text-xl px-4 py-2',
    md: 'text-2xl px-6 py-3',
    lg: 'text-3xl px-8 py-4',
  }

  return (
    <a
      href="#"
      className={cx(
        'inline-block bg-acpink text-white ml-auto rounded-lg border-2 hover:border-acpink hover:text-acpink hover:bg-white transition-colors duration-200 min-w-[100px]',
        sizeToClasses[size],
        className
      )}
      {...otherProps}
    >
      {props.children ?? 'Buy'} <BiRightArrowAlt className="inline-block" />
    </a>
  )
}
