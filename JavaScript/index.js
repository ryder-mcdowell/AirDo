var manage =new Vue({
el: '#manageEvents',
        data: {
          newEvent: '',
          newservice: '',
          edit: false,

        services: [
          {
            description: 'Birthday Party',
            needed: true
          },
          {
            description: 'Wedding',
            needed: true
          }
        ]
      }
        ,

methods: {


    addservice() {
      if (this.newservice.length > 0) {
        this.services.push({
          description: this.newservice,
          needed: true
        });
        this.newservice = '';
      }
    }

}
});

new Vue({
  el: '#menuToggle',

  data: {
    varbArray : [],
    userX : true,
    vendor: false,
    manageServ: false,
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
      this.manageServ = false
    },

    searchBarGen() {
      this.setFalse();
      this.findService = true;
    },
    manageEventsGen() {
      this.setFalse();
      this.manageServ = true;
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
