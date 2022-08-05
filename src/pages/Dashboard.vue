<template>
    <div class="dashboard">
        <!-- Side menu -->
        <SidebarMenu></SidebarMenu>
        <!-- Page content -->
        <div class="content">
            <HeaderMenu breadcum="Dashboard"></HeaderMenu>
            <button 
                type="button"
                class="primary_button"
            >
                <span class="material-symbols-outlined icon">add</span>
                <span class="text">Add New User</span>
            </button>

            <div class="card">
                <div class="card_header">
                    <div class="card_header__title">Users</div>
                </div>
                <div class="card_body">
                    <TableUsers :users="users"></TableUsers>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import TableUsers from '@/components/users/TableUsers.vue';
import { mapState } from 'vuex'
import axios from 'axios';
export default {
    name: "DashboardUsers",
    data() {
        return {
            users: []
        };
    },
    created(){
        this.getUsers();
    },
    methods:{
        getUsers(){
            axios.get('https://jsonplaceholder.typicode.com/users').then( (res) => {
                this.users = res.data;
            });
        }
    },
    computed: {
        ...mapState({
            account: state => state.account,
        })
    },
    components: { TableUsers },
}
</script>