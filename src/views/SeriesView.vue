<template>
    <NavigatorComponent pageName="Catalogue">
        <ContentHeader name="Series"/>
        <div class="flex justify-start flex-col gap-y-3 px-10 ">
            <ContentComponent v-for="i in 10"/>
        </div>
        <div class="btn-group flex justify-center mt-10 mb-7">
            <button class="btn">«</button>
            <button class="btn">Page 1</button>
            <button class="btn">»</button>
        </div>
    </NavigatorComponent>
</template>
<script setup lang="ts">
import NavigatorComponent from '../components/NavigatorComponent.vue';
import ContentHeader from '../components/ContentHeader.vue';
import ContentComponent from '../components/ContentComponent.vue';
import { Series, MPA_Rating } from '@prisma/client';

</script>
