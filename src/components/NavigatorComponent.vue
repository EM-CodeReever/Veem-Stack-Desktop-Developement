<template>
<section>
    <!-- Navbar -->
    <div class="navbar bg-slate-600 text-white ">
        <div class="flex-none">
            <label for="my-drawer" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
        </div>
        <div class="flex-1 normal-case text-xl font-bold select-none mx-2">
            {{props.pageName}}
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </label>
            <ul tabindex="1" class="bg-neutral mt-3 p-2 shadow menu menu-compact dropdown-content  rounded-box w-52">
                <li>
                <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
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
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay "></label>
            <ul class="menu p-4 overflow-y-auto w-80 sticky bg-base-100 text-base-content">
            <!-- Sidebar content here -->
            <li><router-link to="/">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            Home</router-link></li>
            <li><router-link to="/admin">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
            Admin</router-link></li>
            
            </ul>
        </div>
    </div>
</section>
    
</template>
<script setup lang="ts">
const props = defineProps<{
    pageName : string
}>()
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
  background-color: rgba(0, 0, 0, 0.623);
  border-radius: 10px;
}
.hide-scrollbar::-webkit-scrollbar-thumb{
  visibility : hidden;
}
.content-container::-webkit-scrollbar-thumb:hover{
  background-color: black;
}
</style>