const HelloVueApp = {
    data() {
        return {
            jsonobject: null,
            show_friends: false
        }
    },
    methods: {
        auth() {
            VK.Api.call('friends.get', { fields: 'photo_100', order: 'hints', v: '5.131' }, function (response) {
                this.jsonobject = response;
                console.log(this.jsonobject);
                console.log(this.show_friends);

            })
        },
        ppp() {
            this.show_friends = true;
            console.log(this.jsonobject);
            console.log(this.show_friends);

        }
    },
    mounted() {
        this.auth();
    }
}

Vue.createApp(HelloVueApp).mount('#all')

