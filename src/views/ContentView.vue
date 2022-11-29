<template>
<NavigatorComponent pageName="Stranger Things: Season 1">
    <div class="w-1/1 rounded h-fit p-10  relative bg-white">
        <div class="flex gap-2 h-80 z-10">
            <div class="w-full max-w-sm h-full flex flex-col justify-evenly rounded">
                <figure><img src="https://placeimg.com/400/225/arch" class="rounded-lg" alt="Shoes"/></figure>
                <h2 class="font-bold text-xl text-center bg-gray-800 rounded-lg p-3">Stranger Things: Season 1</h2>
                <span class="flex gap-x-3 justify-center">
                    <div class="badge badge-secondary rounded">
                        Action
                    </div>
                    <div class="badge badge-secondary rounded">
                        Fiction
                    </div>
                    <div class="badge badge-secondary rounded">
                        Sports
                    </div>
                </span>
            </div>
            <div class="w-1/1 h-full flex flex-col justify-between rounded-lg bg-gray-800 p-5">
                <span>
                    <p class="font-bold text-lg mb-5">Description</p>
                    <p class="font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor nemo pariatur voluptatum eveniet ducimus ullam omnis nobis ut! Aliquam accusamus incidunt quos, veritatis vitae nulla! Autem est ab eveniet?
                    </p>
                </span>
                <div class="stats stats-vertical xl:stats-horizontal shadow rounded-lg h-24 xl:h-fit ">
  
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                    </div>
                    <div class="stat-title">Critic Score</div>
                    <div class="stat-value">9.8</div>
                </div>
                
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </div>
                    <div class="stat-title">Episodes</div>
                    <div class="stat-value">8</div>
                </div>
                
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div class="stat-title">Date First Aired</div>
                    <div class="stat-value">30/9/2022</div>
                </div>
                
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                    </div>
                    <div class="stat-title">Total Reviews</div>
                    <div class="stat-value">345</div>
                </div>
                </div>
            </div>
        </div>
        <div class="w-1/1 h-fit bg-gray-800 rounded-l-xl rounded-xl mt-5 p-6">
            <span class="flex justify-between items-center mb-5">
                <p class="text-3xl font-bold">Review Board</p>
                <div class="btn bg-yellow-500 text-gray-800 hover:text-white">Create 
                        <svg class="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </div>
            </span>
            <div class="bg-red-500 h-96 w-1/1 rounded ">

            </div>
        </div>
    </div>
</NavigatorComponent>
</template>
<script setup lang="ts">
import NavigatorComponent from '../components/NavigatorComponent.vue';
</script>