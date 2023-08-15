const HelloVueApp = {
    data() {
        return {
            jsonobject: {"response":{"count":120,"items":[]}}
        }
    },
    methods: {
        auth() {
            VK.Api.call('friends.get', { fields: 'photo_100', order: 'hints', v: '5.131' }, function (response) {
                this.jsonobject = response;
                console.log(this.jsonobject);
            });

        }
    }
}

Vue.createApp(HelloVueApp).mount('#all')

