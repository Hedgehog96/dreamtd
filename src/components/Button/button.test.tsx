/*
 * @Description: Button测试文件
 * @Author: Pokkio
 * @Date: 2021-04-19 22:20:38
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-04-21 23:28:39
 */
import { render } from '@testing-library/react'

import Button, { ButtonProps } from './button'

const testProps: ButtonProps = {
  className: 'test',
  classPrefix: 'test',
  size: 'lg',
  btnType: 'primary'
}

const disabledProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>default button</Button>)
    const element = wrapper.getByText('default button')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('dreamtd-btn dreamtd-btn-default')
  }) 

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>primary and lg button</Button>)
    const element = wrapper.getByText('primary and lg button')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('test-btn-primary test-btn-lg test')
  })

  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType='link' href='http://www.baidu.com'>link button</Button>)
    const element = wrapper.getByText('link button')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('dreamtd-btn-link')
  })

  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>disabled button</Button>)
    const element = wrapper.getByText('disabled button') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})