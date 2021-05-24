/*
 * @Description: 图标组件
 * @Author: Pokkio
 * @Date: 2021-05-12 21:23:37
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-23 18:00:24
 */
import React, { FC } from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props
  const classes = classnames('dreamtd-icon', className, {
    [`dreamtd-icon-${theme}`]: theme
  })
  return <FontAwesomeIcon className={classes} {...restProps} />
}

export default Icon