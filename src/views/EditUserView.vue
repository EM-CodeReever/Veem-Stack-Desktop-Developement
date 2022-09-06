<template>
<NavigatorComponent pageName="Administration">
    <span class="flex justify-center pt-10" v-if="dataLoaded">
        <div class="relative p-3 rounded max-w-4xl w-full bg-gray-800">
            <h3 class="text-2xl font-bold text-center mb-5">Edit User Details</h3>
            <div class="grid grid-cols-3 grid-flow-row gap-3">
                <div class="grid grid-cols-3 md:grid-cols-7 gap-x-3 col-span-3">
                    <div class="w-full col-span-1 md:col-span-3">
                    <label class="label">
                        <span class="label-text font-thin">First Name</span>
                    </label>
                    <input type="text" v-model="user.firstName" class="input font-medium input-bordered w-full"/>
                    </div>
                    <div class="w-full col-span-1 md:col-span-3">
                        <label class="label">
                            <span class="label-text font-thin">Last Name</span>
                        </label>
                        <input type="text" v-model="user.lastName" class="input font-medium input-bordered w-full"/>
                    </div>
                    <div class="w-full col-span-1">
                        <label class="label">
                            <span class="label-text font-thin">Gender</span>
                        </label>
                        <select v-model="user.gender" name="gender" id="gender" class="select w-full">
                            <option :value="gen" v-for="gen in Gender" :selected="user.gender == gen">{{gen}}</option>
                        </select>
                        <!-- <input type="text" :value="user.gender" class="input font-medium input-bordered w-full"/> -->
                    </div>
                </div>
                <span class="col-span-3 grid grid-cols-4 gap-3">
                    <div class="w-full col-span-4">
                        <label class="label">
                            <span class="label-text font-thin">Email</span>
                        </label>
                        <input type="text" v-model="user.email" class="input font-medium input-bordered w-full"/>
                    </div>
                    <div class="w-full col-span-2">
                        <label class="label">
                            <span class="label-text font-thin">Username</span>
                        </label>
                        <input type="text" v-model="user.userName" class="input font-medium input-bordered w-full"/>
                    </div>
                    <div class="w-full col-span-2">
                        <label class="label">
                            <span class="label-text font-thin">Phone Number</span>
                        </label>
                        <input type="text" v-model="user.phoneNumber" class="input font-medium input-bordered w-full"/>
                    </div>
                </span>
            </div>
            <div class="modal-action">
                <label for="viewUser" class="btn btn-info btn-sm">save</label>
            </div>
        </div>
    </span>
</NavigatorComponent>
</template>
<script  lang="ts">
import { useRoute } from "vue-router";
import NavigatorComponent from "../components/NavigatorComponent.vue";
import { defineComponent } from "vue";
import { Role, User, Gender } from "@prisma/client";
import DataService from "../DataService";

export default defineComponent({
    name:'',
    components:{NavigatorComponent},
    data(){
        return{
            user : <User>({}),
            dataLoaded : false,
            Role,
            Gender,
        }
    },
    async created(){
        const route = useRoute()
        const Id = route.params.id 
        if(Id){
            this.user = await DataService.getUser(Id as string)
            this.dataLoaded = true
            console.log(this.user);
        }else{
            console.log(this.user);
        }
    }
})






</script>