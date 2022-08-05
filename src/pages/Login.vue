<template>
    <div class="login">
        <div class="login_card">
            <h3 class="login_card__header">Login to your account</h3>
            <form @submit.prevent="handleSubmit">
                <input 
                    type="text" 
                    class="input_text"
                    placeholder="Username"
                    :class="{'error-input': submitted && username === ''}"
                    v-model="username"
                />
                <input 
                    type="password" 
                    class="input_text"
                    :class="{'error-input': submitted && password === ''}"
                    placeholder="Password"
                    v-model="password"
                />
                <button 
                    type="submit"
                    class="login_button"
                >
                    <span class="text">Log In</span>
                    <span class="material-symbols-outlined icon">arrow_forward</span>
                </button>
            </form>
            <div v-if="alert.message" :class="`alert ${alert.type}`">
                <span class="material-symbols-outlined icon">
                    error
                </span>
                <div>
                    <b>Error</b><br>
                    {{ alert.message }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'LoginPage',
    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        ...mapState(['alert'])
    },
    created () {
        // reset login status
        //this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit (e) {
            e.preventDefault();
            this.submitted = true;
            const { username, password } = this;
            if (username && password) {
                this.login({ username, password })
            }
        }
    }
}
</script>