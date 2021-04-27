/*
 * @Description: 
 * @Author: Pokkio
 * @Date: 2021-04-26 22:05:56
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-04-26 22:16:48
 */
import React from 'react'

import InternalMenu, { IMenuProps } from './menu'
import SubMenu, { ISubMenuProps } from './subMenu'
import MenuItem, { IMenuItemProps } from './menuItem'

class Menu extends React.Component<IMenuProps, {}> {
  static Item = MenuItem

  static SubMenu = SubMenu

  render() {
    return (
      <InternalMenu {...this.props} />
    )
  }
}

export type { IMenuProps, ISubMenuProps, IMenuItemProps }
export default Menu