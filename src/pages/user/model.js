import * as userApi from './service';

export default {
  namespace: 'user',
  state: {
    banner: [],
    brands: [],
    products_list: [],
  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(userApi.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
