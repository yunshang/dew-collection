import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({work}) => ({
  ...work,
}))
export default class Work extends Component {
  config = {
    navigationBarTitleText: 'work',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="work-page">
        work
      </View>
    )
  }
}
