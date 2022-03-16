import { Http, storage } from '@the-sea/utils';

import Loading from './loading';

console.log('storage', storage);

const ajax = new Http(`${import.meta.env.VITE_API_BASEURL}`, {
  parmasExclude: ['current'],
  onBefore(config) {
    config.headers.Authorization = `Bearer ${storage.localStorage.getItem('token')}`;
  },
  onLoading(options) {
    return Loading(options, 3000);
  },
  onError(error) {
    console.log(error.message);
  },
});

export default ajax;
