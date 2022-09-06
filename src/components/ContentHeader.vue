<template>
    <span class="flex justify-between gap-x-3 p-10">
            <p class="text-2xl txt-center font-bold justify-start">{{props.name}} Catalogue</p>
            <span class="flex gap-x-3">
                <span class="flex items-center">
                    <input type="text" class="input input-bordered rounded-r-none input-sm"/>
                    <button class="btn btn-sm rounded-l-none border border-white border-opacity-20 border-l-0 btn-ghost">
                        <svg class="w-6 h-6 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </span>
                <select class="select select-bordered  select-sm">
                    <option value="1">one</option>
                    <option value="2">two</option>
                    <option value="3">three</option>
                </select>
            </span>
        </span>
</template>
<script setup lang="ts">
let props = defineProps<{
    name : string,
}>()
</script>