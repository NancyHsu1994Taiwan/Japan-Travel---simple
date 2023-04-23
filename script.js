import { data } from './data.js';
import { filterCounty, filterCard, renderCard } from './filter.js';
// import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.0-beta.7/vue.esm-browser.min.js';

Vue.createApp({
  data() {
    return {
      data,
      //   part: '',
      county: '',
      name: '',
      filterCounty,
      filterCard,
      renderCard,
    };
  },
  methods: {
    // filterCounty() {},
  },
  mounted() {
    this.renderCard(this.data);
  },
}).mount('#app');
