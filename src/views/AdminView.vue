<template>
    <NavigatorComponent pageName="Administration">
        <div class="flex flex-col w-full px-5">
            <span class="flex justify-between items-center my-8">
                <p class="text-3xl font-bold">Manage Users</p>
                <span class="flex justify-end gap-x-2">
                    <select class="select select-sm select-bordered rounded w-52 max-w-xs">
                        <option disabled selected>Filter by role</option>
                        <option v-for="role in Role">{{role}}</option>
                    </select>
                    <input type="text" placeholder="Search user" class="input input-sm rounded input-bordered w-52" />
                    
                    <button class="btn btn-sm rounded hover:text-yellow-500">
                        <svg class="-ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        Add User
                    </button>
                </span>
            </span>
            <div class="rounded w-1/1 h-fit  flex flex-col gap-y-3 justify-start ">
                <UserRowComponent 
                :users="users" 
                @user-view="(data) => {selectedUser = data}"
                />
            </div>
        </div>  
         <ViewUserModal :user="selectedUser"/>
    </NavigatorComponent>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavigatorComponent from "../components/NavigatorComponent.vue";
import DataService from "../DataService";
import { User, Role, Gender } from "@prisma/client";
import UserRowComponent from "../components/UserRowComponent.vue";
import ViewUserModal from "../components/ViewUserModal.vue";


export default defineComponent({
    name:'AdminView',
    components:{ NavigatorComponent, UserRowComponent, ViewUserModal },
    data(){
        return{
            users : <User[]>([]),
            selectedUser : <User>({}),
            Role,
            Gender,
        }
    },
    methods:{
        viewUser(){
            console.log('user');
            
        },
        deleteUser(){

        },
        editUser(){

        }
    },
    async created(){
        
        let res = await DataService.getAllUsers()
        this.users = res as User[]
        console.log(res);
        
        // const person : User = {
        //     email : 'test@account.com',
        //     firstName : 'Test',
        //     lastName : 'Account',
        //     id : '',
        //     passwordHash : 'test123',
        //     role : Role.MANAGER,
        //     userName : 'test',
        //     gender : Gender.MALE,
        //     phoneNumber : '1234567890'
        // }
        // let result = await DataService.createUser(person)
        // console.log(result);
        
    },
})
</script>



