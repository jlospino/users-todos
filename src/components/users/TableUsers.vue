<template>
    <table class="table">
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company</th>
            <th>Options</th>
        </tr>
        <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>
                {{ `${user.address.city}, ${user.address.street}, ${user.address.suite}` }}
            </td>
            <td>{{ user.company.name }}</td>
            <td>
                <router-link 
                    :to="`/users/${user.id}/todos`" 
                    class="button_link"
                >
                    View to-do’s
                </router-link>
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    name: "TableUsers",
    props: {
        users: Array,
    }
}
</script>