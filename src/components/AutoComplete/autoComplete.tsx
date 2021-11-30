/*
 * @Description: 自动补全组件
 * @Author: Bugmakerrrr
 * @Date: 2021-11-09 16:13:14
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-13 15:07:06
 */
import {
  FC,
  useRef,
  useState,
  useEffect,
  ReactElement,
  ChangeEvent,
  KeyboardEvent
} from 'react'
import classNames from 'classnames'
import Input, { InputProps } from '../Input'
import Icon from '../Icon'
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'

type DataSourceBaseType = {
  value: string
}
// 交叉类型（统一传入的数据结构）
export type DataSourceType<T = any> = T & DataSourceBaseType

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  onComplete: (keyword: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void
  dropdownOption?: (item: DataSourceType) => ReactElement // 自定义展示项
}

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { onComplete, onSelect, dropdownOption, value, ...restProps } = props

  const [inputValue, setInputValue] = useState(value as string)
  const [loading, setLoading] = useState(false)
  const [completes, setCompletes] = useState<DataSourceType[]>([])
  const [highlightIdx, setHighlightIdx] = useState(-1)
  const trigger = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(inputValue, 400)
  useClickOutside(componentRef, () => setCompletes([]))

  useEffect(() => {
    if (debouncedValue && trigger.current) {
      const results = onComplete(debouncedValue)
      // 异步处理
      if (results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setCompletes(data)
        }).finally(() => setLoading(false))
      }
      else {
        setCompletes(results)
      }
    } else {
      setCompletes([])
    }
    setHighlightIdx(-1)

  }, [debouncedValue, onComplete])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const _value = e.target.value.trim()
    setInputValue(_value)
    trigger.current = true
  }
  const handleClickItem = (item: DataSourceType) => {
    setInputValue(item.value)
    setCompletes([])
    onSelect && onSelect(item)
    trigger.current = false
  }
  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        if (completes[highlightIdx]) {
          handleClickItem(completes[highlightIdx])
        }
        break
      case 'ArrowUp':
        const _currUpIdx = highlightIdx - 1
        if (_currUpIdx >= 0) setHighlightIdx(_currUpIdx)
        else setHighlightIdx(-1)
        break
      case 'ArrowDown':
        const _currDownIdx = highlightIdx + 1
        if (_currDownIdx >= completes.length) setHighlightIdx(completes.length - 1)
        else setHighlightIdx(_currDownIdx)
        break
      case 'Escape':
        setCompletes([])
        break
      default:
        break
    }
  }
  const renderItemTemplate = (item: DataSourceType) => {
    return dropdownOption ? dropdownOption(item) : item.value
  }
  const renderDropdown = () => {
    return (
      <ul>
        {completes.map((item, idx) => {
          const cnames = classNames('complete-item', {
            'item-highlighted': idx === highlightIdx
          })

          return (
            <li key={idx} className={cnames} onClick={() => handleClickItem(item)}>{renderItemTemplate(item)}</li>
          )
        })}
      </ul>
    )
  }
  const renderContent = () => {
    if (loading) {
      return <Icon icon='spinner' spin />
    }
    return (completes.length > 0) && renderDropdown()
  }

  return (
    <div className='dreamtd-auto-complete' ref={componentRef}>
      <Input value={inputValue} onChange={handleChange} onKeyDown={handleKeydown} {...restProps} />
      {renderContent()}
    </div>
  )
}

export default AutoComplete