<template>
    <NavigatorComponent pageName="Admin">
        <div class="flex flex-col w-full">
            <p class="text-3xl font-bold text-center my-5">All Users</p>
            <div class="rounded w-1/1 h-fit  flex flex-col gap-y-3 justify-start ">
                <div class="rounded w-1/1 h-fit items-center flex justify-between p-3 bg-gray-300" v-for="u,i in users" :key="i">
                    <p class="font-bold text-gray-800">{{u.firstName + ' ' + u.lastName}}</p>
                    <button class="btn btn-ghost btn-sm bg-gray-800 hover:bg-gray-700 hover:text-yellow-500">view</button>
                </div>
            </div>
        </div>     
    </NavigatorComponent>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavigatorComponent from "../components/NavigatorComponent.vue";
import DataService from "../DataService";
import type { User } from "@prisma/client";

export default defineComponent({
    name:'AdminView',
    components:{NavigatorComponent},
    data(){
        return{
            users : <User[]>([])
        }
    },
    methods:{},
    async created(){
        console.log('created triggered');
        
        let res = await DataService.getAllUsers()
        this.users = res as User[]
        console.log(res);
        console.log('get all users triggered and done i think');
        
        // const person : User = {
        //     email : 'email@mail.com',
        //     firstName : 'no idea',
        //     lastName : 'idk',
        //     id : '3'
        // }
        // let res = await DataService.createUser(person)
    },
})
</script>



