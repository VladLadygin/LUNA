const HelloVueApp = {
    data() {
        return {
            json_object: ''
        }
    },
    methods: {
        auth() {
            VK.Api.call('friends.get', {fields: 'photo_100', order: 'hints',  v:'5.131'}, function(response) {
                console.log(response);
                this.json_object = response;
              });
              
        }
    }
}

Vue.createApp(HelloVueApp).mount('#all')

