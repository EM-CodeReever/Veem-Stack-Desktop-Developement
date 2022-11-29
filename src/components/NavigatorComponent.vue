<template>
<section>
    <!-- Navbar -->
    <div class="navbar bg-slate-800 text-white ">
        <div class="flex-none">
            <label for="my-drawer" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
        </div>
        <div class="flex-1 normal-case text-xl font-bold select-none mx-2">
            {{props.pageName}}
        </div>
        <div class="flex-none">
            <div class="dropdown h-12 dropdown-end">
            <label tabindex="0" class="btn btn-ghost avatar">
                {{currentUser.fullName}}
                <svg class="ml-2 w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </label>
            <ul tabindex="1" class="bg-slate-800 mt-3 p-2 shadow menu menu-compact dropdown-content  rounded w-64">
                <li>
                <a class="justify-between">
                    Profile
                </a>
                </li>
                <li>
                <a class="justify-between">
                    Notifications
                </a>
                </li>
                <li>
                <a class="justify-between">
                    Settings
                </a>
                </li>
                <li @click="Logout"><a>Logout</a></li>
            </ul>
            </div>
        </div>
    </div>

    <!-- Drawer  -->
    <div class="drawer height-limit">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content max-height-limit content-container overflow-y-scroll p-3">
            <!-- Page content goes here within slot tag -->
            <slot ></slot>
        </div> 
        <div class="drawer-side max-height-limit">
            <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 h-full sticky bg-base-100 text-base-content">
            <!-- Sidebar content here -->
            <li><router-link to="/">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            Home</router-link></li>
            <li><router-link to="/movies">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg>
            Movies</router-link></li>
            <li><router-link to="/series">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.11861L9.4131 4.70551L11.5371 6.82954L14.3667 4L15.7782 5.41151L13.3137 7.87598H18C19.1046 7.87598 20 8.77141 20 9.87598V16.876C20 17.9805 19.1046 18.876 18 18.876H6C4.89543 18.876 4 17.9805 4 16.876V9.87598C4 8.77141 4.89543 7.87598 6 7.87598H9.75736L8 6.11861ZM18 9.87598H6V16.876H18V9.87598Z" fill="currentColor"/> <path d="M8 19.876H16V20.876H8V19.876Z" fill="currentColor" /></svg>
            Series</router-link></li>
            <li><router-link to="/books">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            Books</router-link></li>
            <li><router-link to="/your-reviews">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            Your Reviews</router-link></li>
            <li><router-link to="/manage">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
            Manage Content</router-link></li>
            <li><router-link to="/admin">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
            Administration</router-link></li>
            
            <li><router-link to="/settings" class="fixed w-72 bottom-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Settings</router-link></li>
            </ul>
        </div>
    </div>
</section>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { currentUserStore } from '../stores/User';
import { themeChange } from 'theme-change';
themeChange(false)
const currentUser = currentUserStore()
const router = useRouter()
const route = useRoute()
console.log(currentUser.fullName);
let theme:string = 'synthwave'
function Logout(){
    currentUser.$reset()
    if(route.path == '/'){
        router.go(0)
    }else{
        router.push('/')
    }
}
const props = defineProps<{
    pageName : string
}>()

function change(){
    theme = 'emerald'
}

</script>
<style scoped>
.height-limit {
    height:calc(100vh - 4rem)
}
.max-height-limit{
    max-height: calc(100vh - 4rem)
}
.content-container::-webkit-scrollbar {
  background-color: transparent;
  width: 3px;
}
.content-container::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.623);
  border-radius: 10px;
}
.hide-scrollbar::-webkit-scrollbar-thumb{
  visibility : hidden;
}
.content-container::-webkit-scrollbar-thumb:hover{
  background-color: rgb(0, 63, 99);
}
</style>