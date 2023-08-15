const HelloVueApp = {
    data() {
        return {
            jsonobject: {"response":{"count":120,"items":[{"id": 0,
            "first_name": "Ваше имя"}]}},
            show_friends: false
        }
    },
    methods: {
        auth() {
            VK.Api.call('friends.get', { fields: 'photo_100', order: 'hints', v: '5.131' }, function (response) {
                this.jsonobject = response;
                console.log(this.jsonobject);
                this.show_friends = true;
            });

        }
    }
}

Vue.createApp(HelloVueApp).mount('#all')

