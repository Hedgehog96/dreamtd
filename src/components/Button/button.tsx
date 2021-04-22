/*
 * @Description: 按钮组件
 * @Author: Pokkio
 * @Date: 2021-04-14 22:55:11
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-04-21 21:43:58
 */
import React from 'react'
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
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> // 使原生属性为可选

const Button: React.FC<ButtonProps> = ({
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