import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import Home from './pages/home'
import dva from './utils/dva'
import models from './models'
import { Provider } from '@tarojs/redux'

import './styles/base.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/work/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (<Provider store={store}>
      <Home/>
    </Provider>);
  }
}

Taro.render(<App />, document.getElementById('app'))
