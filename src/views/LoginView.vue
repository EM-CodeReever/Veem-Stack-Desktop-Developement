<template>
<span class="flex justify-center items-center min-h-screen bg-gray-400">
    <div class="w-full max-w-lg h-fit max-h-2xl bg-base-300 shadow-2xl shadow-black bg-opacity-75 rounded-md pt-10 pb-5 px-12">
        <p class="text-3xl font-bold text-center">Sign In</p>
        <div class="w-1/1 my-3">
            <div class="form-control w-full">
            <label class="label">
                <span class="label-text font-bold">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" v-model="user.userName" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
            <label class="label">
                <span class="label-text font-bold">Password</span>
            </label>
            <input type="password" placeholder="**********" v-model="user.passwordHash" class="input input-bordered w-full" />
            </div>
        </div>
        <p class="text-error text-sm italic">{{loginError}}</p>
        <span class="flex justify-between items-center mt-8">
            <span>
                <a href="/register" class="link hover:text-indigo-600 no-underline">Register</a>
                 | 
                <a href="#" class="link hover:text-indigo-600 no-underline">Reset Password</a>
            </span>
            <button class="btn btn-info" @click="login">
            <svg v-if="loading" class="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            <p v-else>Login</p>
            </button>
        </span>
    </div>
</span>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { User } from ".prisma/client";
import DataService from "../DataService";
import { currentUserStore } from '../stores/User'
import { LoginResponse } from '../Interfaces'
export default defineComponent({
    name:'LoginView',
    data(){
        return {
            user : <User>({
                passwordHash : '',
                userName : '',
            }),
            loginError : <string>(''),
            loading : false
        }
    },
    methods:{
        async login(){
            this.loginError = ''
            this.loading = true
            let currentUser = currentUserStore()
            let result: LoginResponse = await DataService.login(this.user)
            console.log(result)
            if(result.login){
                currentUser.setCurrentUser(result.user as User)
                this.$router.push(this.$route.query.redirect as string || '/')
            }else{
                this.loading = false
                this.loginError = result.message
            }
        }
    }
})
</script>