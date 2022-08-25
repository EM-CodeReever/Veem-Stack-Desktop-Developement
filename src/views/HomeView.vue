<template>
    <section>
        <NavigatorComponent pageName="Home">
            <div class="flex flex-col w-full border-opacity-50">
            <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
            <div class="divider">OR</div>
            <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
            </div>
            <div class="divider">OR</div>
            <div class="flex flex-col w-full border-opacity-50">
            <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
            <div class="divider">OR</div>
            <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
            </div>

        </NavigatorComponent>
    </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavigatorComponent from "../components/NavigatorComponent.vue";
export default defineComponent({
    name:'HomeView',
    components:{NavigatorComponent,},
    data(){
        return{}
    },
    methods:{},
    created(){

    },
})
</script>