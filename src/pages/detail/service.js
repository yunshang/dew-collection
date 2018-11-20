import Request from '../../utils/request';

export const getProductInfo = params => Request({
  url: '/product',
  method: 'GET',
  data: params,
});
