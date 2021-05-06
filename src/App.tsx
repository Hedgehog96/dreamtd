/*
 * @Description: 
 * @Author: Pokkio
 * @Date: 2021-04-12 22:28:15
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-06 21:46:27
 */
// import Menu from './components/Menu/menu'
// import SubMenu from './components/Menu/subMenu'
// import MenuItem from './components/Menu/menuItem'
// import Menu from './components/Menu'
import Tabs, { TabPane } from './components/Tabs'


function App() {
  return (
    <div className='App'>
      <Tabs>
        <TabPane title='标签1' />
        <TabPane title='标签2' />
        <TabPane title='标签3' disabled />
      </Tabs>
      {/* <Menu>
        <Menu.Item>导航1</Menu.Item>
        <Menu.Item>导航2</Menu.Item>
        <Menu.Item>导航3</Menu.Item>
        <Menu.SubMenu title='下拉导航'>
          <Menu.Item>导航2</Menu.Item>
          <Menu.Item>导航3</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>导航6</Menu.Item>
      </Menu> */}
    </div>
  )
}

export default App
