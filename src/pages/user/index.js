import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text, Icon } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import about_img from '../../images/user/about.png';
import weixin_img from '../../images/user/weixin.jpeg';

@connect(({home, user}) => ({
  ...user,
  ...home,
}))
export default class User extends Component {
  config = {
    navigationBarTitleText: 'user',
  };
  componentDidMount = () => {
    this.props.dispatch({
      type: 'home/load',
    });
    this.props.dispatch({
      type: 'home/product',
    });
  };
  render() {
    const { banner, brands,} = this.props;
    return (
      <View className="user-page">
        <View className="not-login">
          <View className="to-login" data-url="/pages/login/index">
            <View className="left">
              <View className='name'>ABOUT ME</View>
              <View>
                <View className="msg">
                  xxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx
                </View>
              </View>
            </View>
            <View className="avatar-container">
              <View className="msg">
                <Image className="avatar" src={about_img} />
              </View>
            </View>
          </View>
        </View>
        <View className="nav-list">
          <View className="work-name"> xxxxxxxxxxxx</View>
          { brands.map((item, index) => (
            <View className="nav-item" key={index}>
              <Image mode="widthFix" src={item.image_src}></Image>
            </View>
          ))}
        </View>
        <View className="user-info">
          <View className="info-key">MALL</View>
          <View className="info-name">xxx@xxx.com</View>
          <View className="info-key">PHONE</View>
          <View className="info-name">13723735342</View>
        </View>
        <View className="user-weixin">
          <Image className="weixin" src={weixin_img} />
        </View>
      </View>
    )
  }
}
