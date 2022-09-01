<template>
    <section>
        <NavigatorComponent pageName="Home">
            <div class="flex justify-center my-10">
                <input type="text" placeholder="Search movies, series, books ..." class="input rounded-l-2xl rounded-r-none input-bordered w-full max-w-3xl">
                <button class="btn btn-info rounded-l-none rounded-r-2xl">
                    <svg class="w-6 h-6 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </div>
            <div class="px-5 my-5">
                <p class="text-2xl my-5 font-semibold">Popular Series</p>
                <div class="flex gap-x-3 justify-start overflow-x-clip">
                    <FilmOrSeriesComponent type="MOVIE" v-for="i in 5" />
                </div>
            </div>
            <div class="px-5 my-5">
                <p class="text-2xl my-5 font-semibold">Popular Series</p>
                <div class="flex gap-x-3 justify-start overflow-x-clip">
                    <FilmOrSeriesComponent type="SERIES" v-for="i in 5" />
                </div>
            </div>
            <div class="px-5 my-5">
                <p class="text-2xl my-5 font-semibold">Popular Books</p>
                <div class="flex gap-x-3 justify-start overflow-x-clip">
                    <div v-for="i in 5" class="card card-side bg-base-300 shadow-xl flex-none">
                    <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"></figure>
                    <div class="card-body p-5">
                        <h2 class="card-title">New movie is released!</h2>
                        <p class="text-xs">Click the button to watch on Jetflix app.</p>
                        <div class="card-actions justify-between items-center">
                            <span class="badge p-3 rounded">Reviews: 657</span>
                            <button class="btn btn-primary btn-sm">view</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </NavigatorComponent>
    </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavigatorComponent from "../components/NavigatorComponent.vue";
import FilmOrSeriesComponent from "../components/FilmOrSeriesComponent.vue";
export default defineComponent({
    name:'HomeView',
    components:{NavigatorComponent,FilmOrSeriesComponent},
    data(){
        return{
            mouseover : false
        }
    },
    methods:{},
    created(){

    },
})
</script>
