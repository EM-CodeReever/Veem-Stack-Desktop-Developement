<template>   
        <div class="card select-none w-96 bg-base-100 shadow-xl image-full flex-none relative" @mouseenter="mouseover = true" @mouseleave="mouseover = false">
        <span v-if="type == 'MOVIE'" class="badge badge-warning absolute top-3 right-3 z-20 font-medium">Movie</span>
        <span v-if="type == 'SERIES'" class="badge badge-error absolute top-3 right-3 z-20 font-medium" >Series</span>
        <figure :class="`${mouseover ? 'opacity-25 ' : 'opacity-100'} z-10 transition-opacity`"><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
        <Transition name="fade">
        <div v-if="mouseover" class="card-body p-5 pt-10">
            <h2 class="card-title">Stranger Things: Season 1</h2>
            <p class="text-xs">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions items-center justify-between">
                <span class="badge p-3 rounded bg-base-300">Reviews: 657</span>
                <button class="btn btn-primary btn-sm" @click="$router.push('/content/1')">view</button>
            </div>
        </div>
        </Transition>
        </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    type : string 
}>()
let mouseover = ref(<boolean>(false))

</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>