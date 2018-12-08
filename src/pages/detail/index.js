import Taro, { Component } from '@tarojs/taro';
import { View, Image, Button } from '@tarojs/components';
import * as detailApi from './service';
import MySwiper from '../../components/MySwiper';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({detail}) => ({
  ...detail,
}))
export default class Detail extends Component {
  config = {
    navigationBarTitleText: 'detail',
  };
  constructor() {
    super(...arguments);
    this.state = {
      goodsId: '',
      detail: {},
      imageObj: [],
    }
  }

  componentDidMount = () => {
    this.setState({
      goodsId: this.$router.params.id,
    })
    this.getWorksInfo(this.$router.params.id);
  };

  async getWorksInfo(id) {
    var params = {"query": `{ work(id: ${id}) { id name describe location category model images { id service_url }} }` }
    const res = await detailApi.getWorkInfo(params);
    console.log(res.data.work,1111)
    this.setState({
      detail: res.data.work,
    })
  }

  goToPage = (e) => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      Taro.navigateTo({
        url: e.currentTarget.dataset.url,
      })
    }else {
      Taro.switchTab({
        url: e.currentTarget.dataset.url,
      })
    }
  }

  render() {
    console.log(this.state.detail,2222222211)
    var detail = this.state.detail
    var imageObj = this.state.detail.images;
    console.log(imageObj)
    // const { items } = this.detail;
    return (
      <View className="detail-page">
        <View className="image-box-wrap">
          <View className="image-box clearfix">
            <MySwiper banner={imageObj} />
            <View className="share-btn">
              <Button open-type="share" />
            </View>
          </View>
        </View>
        <View className="container">
          <View className="info-business-card">
            <View className="name">
              {detail.name}
            </View>
            <View className="model">
              {detail.location}
            </View>
          </View>
          <View className="product_name">
            {detail.describe}
          </View>
          <View className="product_name">
            <View>{detail.category}</View>
            <View>{detail.category}</View>
            <View>{detail.category}</View>
            <View>{detail.category}</View>
          </View>
        </View>
        <View className="detail-bottom-btns">
          <View className="nav" data-url="/pages/home/index" onClick={this.goToPage}>
            <Image className="nav-img" src={require('../../images/tab/home.png')} alt="" />
            首页
          </View>
          <View className="nav" data-url="/pages/user/index" onClick={this.goToPage}>
            <Image className="nav-img" src={require('../../images/tab/user-active.png')} alt="" />
            我的
          </View>
        </View>
      </View>
    )
  }
}
