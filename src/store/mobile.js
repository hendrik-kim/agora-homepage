import { defineStore } from 'pinia';

export const useMobileStore = defineStore({
  id: 'mobile',
  state: () => ({
    isMobile: false,
  }),
  actions: {
    handleResize() {
      this.isMobile = window.innerWidth <= 767;
    },
  },
});
