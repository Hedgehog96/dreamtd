/*
 * @Description: 输入框组件
 * @Author: Pokkio
 * @Date: 2021-05-19 23:20:08
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-24 20:42:33
 */
import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react'
import classnames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import Icon from '../Icon'

type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  className?: string
  disabled?: boolean
  size?: InputSize
  icon?: IconProp
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement
  /**添加前缀 用于配置一些固定组合 */
  append?: string | ReactElement
  onChange? : (e: ChangeEvent<HTMLInputElement>) => void
}


const Input: FC<InputProps> = ({
  className,
  disabled,
  size,
  icon,
  prepend,
  append,
  style,
  ...restProps
}) => {
  const classes = classnames('dreamtd-input-wrapper', className, {
    [`dreamtd-input-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-prepend': prepend,
    'input-group-append': append
  })
  return (
    <div className={classes} style={style}>
      {prepend && <div className='dreamtd-input-group-prepend'>{prepend}</div>}
      {icon && <div className='dreamtd-input-icon'><Icon icon={icon} title={`title-${icon}`} /></div>}
      <input className='dreamtd-input' disabled={disabled} {...restProps}></input>
      {append && <div className='dreamtd-input-group-append'>{append}</div>}
    </div>
  )
}

Input.displayName = 'Input'

export default Input