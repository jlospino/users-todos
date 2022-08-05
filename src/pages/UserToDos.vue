<template>
    <div class="to-dos">
         <!-- Side menu -->
        <SidebarMenu></SidebarMenu>
        <!-- Page content -->
        <div class="content">
            <HeaderMenu :breadcum="`To Do’s`"></HeaderMenu>

            <div class="card">
                <div class="card_header">
                    <div class="card_header__title">To Do’s</div>
                </div>
                <div class="card_body">
                    <TableUserToDos :userId="userId"></TableUserToDos>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import TableUserToDos from '@/components/users/TableUserToDos.vue';
export default {
    name: "UserToDos",
    data() {
        return {
            userId: this.$route.params.id
        }
    },
    components: { TableUserToDos }
}
</script>