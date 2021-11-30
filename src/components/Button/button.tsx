/*
 * @Description: 按钮组件
 * @Author: Bugmakerrrr
 * @Date: 2021-04-14 22:55:11
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-09 11:00:08
 */
import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classnames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string
  classPrefix?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  href?: string
}
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement> & BaseButtonProps
type AnchorButtonProps = AnchorHTMLAttributes<HTMLElement> & BaseButtonProps
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> // 使原生属性为可选

const Button: FC<ButtonProps> = ({
  className,
  disabled,
  size,
  btnType,
  href,
  children,
  ...restProps
}) => {
  const classes = classnames('dreamtd-btn', className, {
    [`dreamtd-btn-${btnType}`]: btnType,
    [`dreamtd-btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>{children}</a>
    )
  } else {
    return <button className={classes} disabled={disabled} {...restProps}>{children}</button>
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button