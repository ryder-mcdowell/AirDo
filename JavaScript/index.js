new Vue({
  el: '#menuToggle',

  data: {
    varbArray : [],
    userX : true,
    vendor: false,
    findService : false,
    switched: 'Store',
  },

  methods: {
    hideShow() {
      this.setFalse();
      if (this.switched === 'Store') {
        this.vendor = true;
      }
      if (this.switched === 'Profile') {
        this.userX = true;
      }
      if (this.userX === true) {
        this.switched = 'Store';
      }
      else {
        this.switched = 'Profile';
      }
    },
    setFalse() {
      this.userX = false
      this.vendor = false
      this.findService = false
    },

    searchBarGen() {
      this.setFalse();
      this.findService = true;
    },


  }

})

new Vue({
  el: '#menuz',

  data: {
    isActiveClass: "'is-active'",
    isLoading: false,
    menuIsActive: false,
    login: 'Login'
  },
  methods: {

    activateMenu() {
      this.menuIsActive = !this.menuIsActive;
      this.isLoading = !this.isLoading;
      if (this.menuIsActive === true) {
        this.login = ''
      } else {
        this.login = 'Login'
      }
    }

  }

});
