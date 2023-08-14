const HelloVueApp = {
    data() {
        return {
            link_on_registration: 'https://oauth.vk.com/authorize?client_id=51696427&redirect_uri=https://vladladygin.github.io/Luna.html&display=popup&scope=friends&response_type=token&v=5.131',
            link_with_token: '',
            first_token_symbol: 0,
            last_token_symbol: 0,
            token: '',
            link_constructor_for_json: 'https://api.vk.com/method/friends.get?order=name&fields=photo_100&v=5.131&access_token=',
            link_to_json: '',
            json_object: ''
        }
    },
    created() {
        this.link_with_token = window.location.href;
        console.log(this.link_with_token);
        this.first_token_symbol = this.link_with_token.search('access_token=') + 13;
        this.last_token_symbol = this.link_with_token.search('&');
        this.token = this.link_with_token.split('').slice(this.first_token_symbol, this.last_token_symbol).join('');
        this.link_to_json = this.link_constructor_for_json + this.token;
    },
    methods: {
        registracia_vk() {
            window.location.href = this.link_on_registration;
        },
        auth() {
            VK.Auth.login(function (response) {
                if (response.session) {
                    // пользователь авторизован
                    console.log('Пользователь авторизован');
                    console.log(response);
                } else {
                    // пользователь не авторизован
                    console.log('Пользователь не авторизован');
                }
            });
        }
    }
}

Vue.createApp(HelloVueApp).mount('#all')

