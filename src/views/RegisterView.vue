<template>
    <span class="flex justify-center items-center min-h-screen bg-gray-400 py-20 relative">
        <button @click="router.back()" class="btn btn-sm rounded absolute top-5 left-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
        </button>
        <div class="w-full max-w-3xl h-fit max-h-2xl bg-base-300 shadow-2xl shadow-black bg-opacity-75 rounded-md pt-10 pb-5 px-12">
            <p class="text-3xl font-bold text-center mb-5">Register new account</p>
                <div class="grid grid-cols-3 grid-flow-row gap-3">
                <div class="grid grid-cols-3 md:grid-cols-5 gap-x-3 col-span-3">
                    <div class="w-full col-span-1 md:col-span-2">
                    <label class="label">
                        <span class="label-text font-thin">First name</span>
                    </label>
                    <input type="text" v-model="newUser.firstName" class="input font-medium input-bordered w-full"/>
                    </div>
                    <div class="w-full col-span-1 md:col-span-2">
                        <label class="label">
                            <span class="label-text font-thin">Last name</span>
                        </label>
                        <input type="text" v-model="newUser.lastName" class="input font-medium input-bordered w-full"/>
                    </div>
                    <div class="w-full col-span-1">
                        <label class="label">
                            <span class="label-text font-thin">Gender</span>
                        </label>
                        <select v-model="newUser.gender" name="gender" id="gender" class="select w-full">
                            <option :value="gen" v-for="gen in Gender">{{gen}}</option>
                        </select>
                    </div>
                </div>
                <span class="col-span-3 grid grid-cols-4 gap-3">
                    <div class="w-full col-span-4">
                        <label class="label">
                            <span class="label-text font-thin">Create a username</span>
                        </label>
                        <input type="text" v-model="newUser.userName" class="input font-medium input-bordered w-full"/>
                    </div>
                    <div class="w-full col-span-2">
                        <label class="label">
                            <span class="label-text font-thin">Email</span>
                        </label>
                        <input type="text" v-model="newUser.email" class="input font-medium input-bordered w-full"/>
                    </div>
                    <div class="w-full col-span-2">
                        <label class="label">
                            <span class="label-text font-thin">Phone Number</span>
                        </label>
                        <input type="text" v-model="newUser.phoneNumber" class="input font-medium input-bordered w-full"/>
                    </div>
                </span>
                <div class="w-full col-span-3">
                    <label class="label">
                        <span class="label-text font-thin">Password</span>
                    </label>
                    <input type="password" v-model="newUser.passwordHash" class="input font-medium input-bordered w-full"/>
                </div>
                <div class="w-full col-span-3">
                    <label class="label">
                        <span class="label-text font-thin">Confirm Password</span>
                    </label>
                    <input type="password" v-model="passwordConfirm" class="input font-medium input-bordered w-full"/>
                </div>
            </div>
            <p v-if="passwordConfirm != newUser.passwordHash" class="text-error text-sm italic">Passwords do not match</p>
            <p class="text-error text-sm italic">{{validationError}}</p>
            <span class="flex justify-end items-center mt-8">
                <button class="btn btn-info" @click="register">
                <svg v-if="loading" class="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                <p v-else>Register</p>
                </button>
            </span>
        </div>
    </span>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

import { User, Gender } from "@prisma/client";
import { UserValidation } from '../Interfaces'
import DataService from "../DataService";
import { currentUserStore } from "../stores/User";

export default defineComponent({
    name:'RegisterView',
    data(){
        return {
            validationError : '',
            passwordConfirm : null,
            loading : false,
            newUser : <User>({}),
            Gender,
            router : useRouter(),
            currentUser : currentUserStore(),
        }
    },
    methods:{
        async register(){
            this.loading = true
            if(this.validateUser()){
                this.validationError = ''
                console.log(this.newUser);
                let res = await DataService.createUser(this.newUser)
                if(res.status){
                    console.log(res.result);
                    this.currentUser.setCurrentUser(res.result)
                    this.router.push('/')
                }else{
                    this.validationError = res.message
                }
            }
            this.loading = false
        },
        validateUser(){
            let u = this.newUser
            if(!u.firstName){
                this.validationError = 'Please enter first name'
                return false
            }else if(!u.lastName){
                    this.validationError = 'Please enter last name'
                    return false
                }else if(!u.email || !UserValidation.email(u.email)){
                        this.validationError = 'Please enter valid email address'
                        return false
                    }else if(!u.passwordHash){
                            this.validationError = 'Please enter both matched password'
                            return false
                        }else if(!u.phoneNumber || !UserValidation.phone(u.phoneNumber)){
                                this.validationError = 'Please enter valid phone number'
                                return false
                            }else if(!u.userName){
                                    this.validationError = 'Please enter a username'
                                    return false
                                }else if(!u.gender){
                                        this.validationError = 'Please choose a gender'
                                        return false
                                    }else{return true}
            }
    }
})
</script>