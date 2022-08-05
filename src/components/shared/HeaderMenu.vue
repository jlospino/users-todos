<template>
    <header class="navbar">
        <div class="navbar_contain">
            <button class="navbar_item" @click="toggleNav()">
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.5H15" stroke="#A0A5BA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0 1.5H15" stroke="#A0A5BA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 11.5H15" stroke="#A0A5BA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="navbar_item__text">{{ breadcum }}</span>
            </button>

            <button class="navbar_item rigth d-flex dropdown">
                <img :src="user.photo" class="navbar_item__avatar" />
                <span class="navbar_item__text">{{ `${user.firstName} ${user.lastName}` }}</span>
                <div class="dropdown-content">
                    <a href="#" @click="logout">Cerrar Sesión</a>
                </div>
            </button>
        </div>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "HeaderMenu",
    props:{
        breadcum: String
    },
    computed: {
        ...mapState('account', ['status']),
        user () {
            return this.$store.state.account.user
        }
    },
    methods: {
        ...mapActions('account', ['logout']),
        toggleNav () {
            this.$parent.$emit('toggleNav')
        }
    }
}
</script>
