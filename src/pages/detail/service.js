import Request from '../../utils/request';

export const getWorkInfo = params => Request({
  url: '/graphql',
  method: 'POST',
  data: params,
});
