const HelloVueApp = {
    data() {
        return {
            link_on_registration: 'https://oauth.vk.com/authorize?client_id=51696427&redirect_uri=https://vladladygin.github.io/Luna.html&display=popup&scope=friends&response_type=token&v=5.131',
            link_with_token: '',
            m: ''

        }
    },
    created() {
        this.link_with_token = window.location.href;
        console.log(window.location.href)
        console.log(this.link_with_token)
    },
    methods: {
        registracia_vk() {
            window.location.href = this.link_on_registration;
        }
    }
}

Vue.createApp(HelloVueApp).mount('#all')