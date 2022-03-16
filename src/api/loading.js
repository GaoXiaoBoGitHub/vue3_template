import { LoadingPlugin } from 'tdesign-vue-next';

export default (options, delay = 0) => {
  return {
    loading: null,
    timer: null,
    delay,
    options,
    start() {
      this.timer = setTimeout(() => {
        this.loading = LoadingPlugin(this.options);
        this.timer = null;
      }, this.delay);
    },
    close() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      } else {
        this.loading.hide();
      }
    },
  };
};
