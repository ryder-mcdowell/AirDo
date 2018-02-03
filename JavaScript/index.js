new Vue({
  el: '#vendorToggle',

  data: {
    vendor: false,
    userX : true,
  },
  methods: {
    hideShow() {
      this.vendor = !this.vendor;
      this.userX = !this.userX;
    }
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
