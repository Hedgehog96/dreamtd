/*
 * @Description: 
 * @Author: Pokkio
 * @Date: 2021-05-23 20:21:18
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-24 21:17:48
 */
import { render, fireEvent } from '@testing-library/react'

import Input, { InputProps } from './input'

const defaultProps: InputProps = {
  placeholder: 'test-input',
  onChange: jest.fn()
}

describe('test Input component', () => {
  it('should render the correct default input', () => {
    const wrapper = render(<Input {...defaultProps} />)
    const inputNode = wrapper.getByPlaceholderText('test-input') as HTMLInputElement
    expect(inputNode).toBeInTheDocument()
    expect(inputNode).toHaveClass('dreamtd-input')
    fireEvent.change(inputNode, { target: { value: '1' } })
    expect(defaultProps.onChange).toHaveBeenCalled()
    expect(inputNode.value).toEqual('1')
  })

  it('should render the disabled input', () => {
    const wrapper = render(<Input disabled placeholder='disabled input' />)
    const inputNode = wrapper.getByPlaceholderText('disabled input') as HTMLInputElement
    expect(inputNode.disabled).toBeTruthy()
  })

  it('should render different input with different sizes', () => {
    const wrapper = render(<Input size='lg' placeholder='lg input' />)
    const inputContainer = wrapper.container.querySelector('.dreamtd-input-wrapper')
    expect(inputContainer).toHaveClass('dreamtd-input-lg')
  })

  it('should render prepend and append element', () => {
    const { queryByText, container } = render(<Input placeholder='pend' prepend='https://' append='.com'/>)
    const inputContainer = container.querySelector('.dreamtd-input-wrapper')
    expect(inputContainer).toHaveClass('input-group input-group-prepend input-group-append')
    expect(queryByText('https://')).toBeInTheDocument()
    expect(queryByText('.com')).toBeInTheDocument()
  })
})