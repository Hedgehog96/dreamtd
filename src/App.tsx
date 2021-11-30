/*
 * @Description: 
 * @Author: Bugmakerrrr
 * @Date: 2021-04-12 22:28:15
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-13 15:15:22
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Menu from './components/Menu'
import Input from './components/Input'
import AutoComplete, { DataSourceType } from './components/AutoComplete'

library.add(fas)

interface Props {
  login: string
  url: string
}

function App() {
  const handleComplete = (keyword: string) => {
    return fetch(`https://api.github.com/search/users?q=${keyword}`)
      .then(resp => resp.json())
      .then(({ items }) => {
        return items.slice(0, 10).map((item: { login: any }) => ({ value: item.login, ...item }))
      })
  }
  const renderOption = (item: DataSourceType<Props>) => {
    return (
      <>
        <h2>{item.login}</h2>
        <p>{item.url}</p>
      </>
    )
  }

  return (
    <div className='App'>
      {/* <AutoComplete onComplete={handleComplete} dropdownOption={renderOption} /> */}
      {/* <Input size='sm' prepend='https://' append='test' /> */}
      <Menu>
        <Menu.Item>111</Menu.Item>
        <Menu.Item>222</Menu.Item>
        <Menu.SubMenu title='333'>
          <Menu.Item>444</Menu.Item>
          <Menu.Item>555</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}

export default App
