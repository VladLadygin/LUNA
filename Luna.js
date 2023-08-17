const HelloVueApp = {
    data() {
        return {
            jsonobject: null,
            show_friends: false,
            vk_button_seen: true
        }
    },
    methods: {
        auth() {
            VK.Api.call('friends.get', { fields: 'photo_100', order: 'hints', v: '5.131' }, (response) =>  {
                this.jsonobject = response;
                console.log(this.jsonobject);
                console.log(this.show_friends);
                this.show_friends = true;
                console.log(this.show_friends);
                console.log(this.vk_button_seen);
                this.vk_button_seen = false;
                console.log(this.vk_button_seen);           
            })
        }
    },
    mounted() {
        this.auth();
    }
}

Vue.createApp(HelloVueApp).mount('#all')

