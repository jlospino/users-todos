<template>
    <div class="todos-list">
        <div class="task-input">
            <span class="material-symbols-outlined task-input-icon">splitscreen</span>
            <input 
                type="text" 
                v-model="todo" 
                placeholder="Write a task"
                v-on:keyup.enter="addToDo()"
            >
            <button 
                class="button_add"
                @click="addToDo()"
                :disabled="todo == ''"
            >
                Add To Do
            </button>
        </div>
        <div class="controls">
            <div class="filters">
                <span 
                    :class="{'active': filter == 'all'}"
                    @click="filterToDos('all')"
                >
                    All
                </span>
                <span 
                    :class="{'active': filter == 'pending'}"
                    @click="filterToDos('pending')"
                >
                    Pending
                </span>
                <span 
                    :class="{'active': filter == 'completed'}"
                    @click="filterToDos('completed')"
                >
                    Completed
                </span>
            </div> 
            <span class="rigth results_count">({{ todos_filter.length }}) Results</span>
        </div>
        <ul class="task-box">
            <li class="task" v-for="(todo, index) in todos_filter" :key="index">
                <label :for="`${todo.id}`">
                    <input 
                        type="checkbox" 
                        :id="`${todo.id}`" 
                        :checked="todo.completed"
                        @change="completeToDo(todo)"
                    />
                    <p :class="`${todo.completed ? 'active_task' : ''}`">{{ todo.title }}</p>
                </label>
                <button 
                    class="button_trash"
                    @click="removeToDo(todo.id)" 
                >
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "TableUsersToDos",
    props:{
        userId: String
    },
    created(){
        this.getUserToDos();
    },
    data() {
        return {
            filter: 'all',
            todos_filter: [],
            todos: [],
            todo: ''
        }
    },
    methods:{
        getUserToDos() {
            if(localStorage.getItem(`todos_${this.userId}`)){
                this.todos = JSON.parse(localStorage.getItem(`todos_${this.userId}`));
                this.todos_filter = this.todos;
            }else{
                axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${this.userId}`)
                .then((res) => {
                    localStorage.setItem(`todos_${this.userId}`, JSON.stringify(res.data));
                    this.todos = res.data;
                    this.todos_filter = res.data;
                });
            }            
        },
        async filterToDos(state){
            await this.getUserToDos();
            this.filter = state;
            if(state === 'all'){
                this.todos_filter = this.todos;
            }else{
                this.todos_filter = this.todos.filter( function(todo) {
                    return state === 'pending' ? todo.completed == false : todo.completed == true;
                });
            }
        },
        addToDo(){
            if ( this.todo === '' ) return;
            const newTodo = {
                completed: false,
                title: this.todo,
                id: this.todos[this.todos.length - 1].id + 1, //Take a last and add one
                userId: this.userId
            }
            const newsTodos = [...JSON.parse(localStorage.getItem(`todos_${this.userId}`)), newTodo];
            localStorage.setItem(`todos_${this.userId}`, JSON.stringify(newsTodos));
            this.todo = '';
            this.filterToDos(this.filter);
        },
        removeToDo(id){
            // Add others todo's with a different id
            const todosFilter = this.todos.filter(item => {
                return item.id !== id;
            });
            localStorage.setItem(`todos_${this.userId}`, JSON.stringify(todosFilter));
            this.filterToDos(this.filter);
        },
        async completeToDo(todo){
            const todosComplete = this.todos.map(item => {
                if(item.id == todo.id){
                    return {...todo, completed: !item.completed};
                }else{
                    return item;
                }
            });
            localStorage.setItem(`todos_${this.userId}`, JSON.stringify(todosComplete));
            
            setTimeout(() => this.filterToDos( this.filter ), 200 );
        }
    }
}
</script>
