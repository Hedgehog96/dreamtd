/*
 * @Description: 
 * @Author: Pokkio
 * @Date: 2021-04-12 22:28:15
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-23 17:57:08
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Menu from './components/Menu'
import Input from './components/Input'

library.add(fas)

function App() {
  return (
    <div className='App'>
      <Input size='sm' prepend='https://' append='test' />
      {/* <Menu mode='vertical'>
        <Menu.Item>111</Menu.Item>
        <Menu.Item>222</Menu.Item>
        <Menu.SubMenu title='333'>
          <Menu.Item>444</Menu.Item>
          <Menu.Item>555</Menu.Item>
        </Menu.SubMenu>
      </Menu> */}
    </div>
  )
}

export default App
