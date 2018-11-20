import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

class GoodsList extends Component {
  static propTypes ={
    list: PropTypes.array,
  }

  static defaultProps = {
    list: [],
  };

  gotoDetail = (e) => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${e.currentTarget.dataset.id}`,
    })
  }

  render() {
    const { list, loading } = this.props;
    return (
      <View className="goods-list-container">
        <View className="WhiteSpace"></View>
        <View className="hr"></View>
        {
        list.length > 0 ? (
          <View className="goods-ul">
            {
              list.map((item, index) => (
                <View key={item.product_id}>
                  <View className="WhiteSpace"></View>
                  <View className="clothing">
                    <View className="shop-img">
                      <Image mode="widthFix" src={`${item.images}!w750`} />
                    </View>
                    <View className="content">
                      <View className="title p">{item.brand}</View>
                      <View className="info p">{item.name}</View>
                      <View className="size p">
                        {`${item.spu} | ${item.specification || '均码'}`}
                      </View>
                    </View>
                    <View className="edit">
                      <View className="iconfont icon-delete" data-id={item.product_id} />
                    </View>
                  </View>
                  <View className="WhiteSpace"></View>
                  <View className="hr"></View>
                </View>
              ))
            }
          </View>
        ) : (
          <View />
        )
      }
      {loading && (
        <View className="loadMoreGif">
          <View className="zan-loading"></View>
          <View className="text">加载中...</View>
        </View>
      )}
      </View>
    );
  }
}

export default GoodsList;
