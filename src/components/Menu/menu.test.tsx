/*
 * @Description: Menu测试文件
 * @Author: Pokkio
 * @Date: 2021-04-21 23:04:04
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-04-22 20:22:40
 */
import { render, RenderResult, fireEvent } from '@testing-library/react'

import Menu, { IMenuProps } from './menu'
import MenuItem from './menuItem'

const testProps: IMenuProps = {
  defaultIndex: 0,
  className: 'test',
  onSelect: jest.fn()
}

const testVerticalProps: IMenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
}

const testMenu = (props: IMenuProps) => (
  <Menu {...props}>
    <MenuItem index={0}>active</MenuItem>
    <MenuItem index={1} disabled>disabled</MenuItem>
    <MenuItem index={2} disabled>test</MenuItem>
  </Menu>
)

let wrapper: RenderResult, menuElement: HTMLElement, activedElement: HTMLElement, disabledElemnt: HTMLElement

describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(testMenu(testProps))
    menuElement = wrapper.getByText('')
  })

  it('should render correct Menu and MenuItem based on default props', () => {
    
  })

  it('click items should change active and call the right callback', () => {})

  it('should render vertical mode when mode is set to vertical', () => {})
})