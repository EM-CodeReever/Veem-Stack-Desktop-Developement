<template>
    <div class="flex justify-start flex-col gap-y-3">
        <ContentComponent v-for="i in 10"/>
    </div>
</template>
<script setup lang="ts">
import { Movie, Series, Book } from '.prisma/client';
import ContentComponent from './ContentComponent.vue';
const props = defineProps<{
    movies? : Movie[],
    series? : Series[],
    books? : Book[],

}>()



</script>
