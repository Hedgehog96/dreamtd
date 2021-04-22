/*
 * @Description: 
 * @Author: Pokkio
 * @Date: 2021-04-12 22:28:15
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-04-21 23:14:36
 */
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className='App'>
      <Menu mode='vertical' defaultIndex={1}>
        <MenuItem index={0}>导航1</MenuItem>
        <MenuItem index={1}>导航2</MenuItem>
        <MenuItem index={2}>导航3</MenuItem>
      </Menu>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button btnType='primary' size='lg'>Large Primary</Button>
      <Button btnType='primary' size='sm'>Small primary</Button>
      <Button btnType='danger' size='sm'>Small danger</Button>
      <Button btnType='link' href='http://www.baidu.com'>Link</Button>
      <Button btnType='link' href='http://www.baidu.com' disabled>Link</Button>
    </div>
  )
}

export default App
