const HelloVueApp = {
    data() {
        return {
            jsonobject: {},
            show_friends: false
        }
    },
    methods: {
        auth() {
            VK.Api.call('friends.get', { fields: 'photo_100', order: 'hints', v: '5.131' }, function (response) {
                this.jsonobject = JSON.parse(response);
                console.log(this.jsonobject);
                console.log(response);
                this.show_friends = true;
            })
            console.log(this.show_friends);
        }
    }
}

Vue.createApp(HelloVueApp).mount('#all')

