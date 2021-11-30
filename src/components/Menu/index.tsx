/*
 * @Description: 
 * @Author: Bugmakerrrr
 * @Date: 2021-04-26 22:05:56
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-09 11:01:04
 */
import React from 'react'

import InternalMenu, { MenuProps } from './menu'
import SubMenu, { SubMenuProps } from './subMenu'
import MenuItem, { MenuItemProps } from './menuItem'

class Menu extends React.Component<MenuProps, {}> {
  static Item = MenuItem

  static SubMenu = SubMenu

  render() {
    return (
      <InternalMenu {...this.props} />
    )
  }
}

export type { MenuProps, SubMenuProps, MenuItemProps }
export default Menu