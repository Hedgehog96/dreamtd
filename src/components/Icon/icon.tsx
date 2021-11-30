/*
 * @Description: 图标组件
 * @Author: Bugmakerrrr
 * @Date: 2021-05-12 21:23:37
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-09 11:00:17
 */
import { FC } from 'react'
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