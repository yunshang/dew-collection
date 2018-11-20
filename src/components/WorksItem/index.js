import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

class WorksItem extends Component {
  static propTypes ={
    clothing: PropTypes.array,
    deleteClothing: PropTypes.func,
  }

  static defaultProps = {
    clothing: [],
    deleteClothing: function(){

    },
  };

  render() {
    const { list } = this.props;
    return (
      <View className="WorksItem-page">
        <View className="WhiteSpace"></View>
        <View className="hr"></View>
        {list.map(item => (
          <View key={item.product_id}>
            <View className="WhiteSpace"></View>
            <View className="work">
              <View className="shop-img">
                <Image mode="widthFix" src={`${item.cover_image}`} />
              </View>
              <View className="content">
                <View className="title p">{item.brand}</View>
                <View className="info p">{item.name}</View>
                <View className="size p">
                  {`${item.spu} | ${item.specification || '均码'}`}
                </View>
              </View>
              <View className="edit">
              </View>
            </View>
            <View className="WhiteSpace"></View>
            <View className="hr"></View>
          </View>
        ))}
      </View>
    );
  }
}

export default WorksItem;
