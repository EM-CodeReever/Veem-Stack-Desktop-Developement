<template>
    <div class="rounded w-1/1 h-fit items-center flex justify-between p-3 bg-gray-300" v-for="u,i in props.users" :key="i">
        <div class="font-bold gap-x-3 items-center justify-between flex text-gray-800">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span class="">
                <p>{{u.firstName + ' ' + u.lastName}}</p>
                <small class="badge badge-sm rounded">{{u.role}}</small>
            </span>
            </div>
            <span class="flex gap-x-2 justify-end">
                <label for="viewUser" class="btn btn-ghost btn-sm bg-gray-800 hover:bg-gray-700 hover:text-yellow-500" @click="emits('user-view',u)">view</label>
                <button class="btn btn-ghost btn-sm bg-gray-800 hover:bg-gray-700 hover:text-yellow-500" @click="$router.push(`/edit-user/${u.id}`)">edit</button>
                <button for="viewUser" class="btn btn-sm btn-error" @click="">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
            </span>
        
    </div>
</template>
<script setup lang="ts">
import { User } from '.prisma/client';
const emits = defineEmits(["user-view"])
let props = defineProps<{
    users : User[]
}>()

</script>