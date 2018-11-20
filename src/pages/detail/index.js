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
    this.getGoodsInfo(this.$router.params.id);
  };

  async getGoodsInfo(goodsId) {
    const res = await detailApi.getProductInfo({
      id: goodsId
    });
    if (res.status == 'ok') {
      if (res.data.measurement != null) {
        res.data.measurement = String(res.data.measurement).split('\n');
      } else {
        res.data.measurement = [];
      }
      let imgList;
      if (res.data.image){
        imgList = res.data.image.map((item) => {
          return {
            image_src: item,
          };
        });
      } else {
        imgList = [{
          image_src: "http://static-r.msparis.com/uploads/d/1/d1ca37e902e5550ad2c82c721bc216ce.png",
        }];
      }
      Taro.setNavigationBarTitle({
        title: res.data.name
      })
      this.setState({
        detail: res.data,
        imageObj: imgList,
        specificationsList: res.data.specifications,
      })
    }
  }

  render() {
    const { imageObj } = this.state;
    const { items } = this.props;
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
      </View>
    )
  }
}
