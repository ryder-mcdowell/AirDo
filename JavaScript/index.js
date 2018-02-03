new Vue({
  el: '#root',
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
