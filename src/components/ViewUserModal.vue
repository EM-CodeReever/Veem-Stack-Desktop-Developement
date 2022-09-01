<template>
<span>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="viewUser" class="modal-toggle" />
    <label for="viewUser" class="modal cursor-pointer">
    <label class="modal-box relative rounded max-w-2xl w-full bg-gray-800" for="">
        <h3 class="text-lg font-bold text-center mb-5">User Details</h3>
        <div class="grid grid-cols-3 grid-flow-row gap-3">
            <div class="w-full col-span-1">
                <label class="label">
                    <span class="label-text font-thin">First Name</span>
                </label>
                <input type="text" :value="props.user.firstName" class="input font-medium input-bordered w-full" disabled/>
            </div>
            <div class="w-full col-span-1">
                <label class="label">
                    <span class="label-text font-thin">Last Name</span>
                </label>
                <input type="text" :value="props.user.lastName" class="input font-medium input-bordered w-full" disabled/>
            </div>
            <div class="w-full col-span-1">
                <label class="label">
                    <span class="label-text font-thin">Gender</span>
                </label>
                <input type="text" :value="props.user.gender" class="input font-medium input-bordered w-full" disabled/>
            </div>
            <span class="col-span-3 grid grid-cols-4 gap-3">
                <div class="w-full col-span-4">
                    <label class="label">
                        <span class="label-text font-thin">Email</span>
                    </label>
                    <input type="text" :value="props.user.email" class="input font-medium input-bordered w-full" disabled/>
                </div>
                <div class="w-full col-span-2">
                    <label class="label">
                        <span class="label-text font-thin">Username</span>
                    </label>
                    <input type="text" :value="props.user.userName" class="input font-medium input-bordered w-full" disabled/>
                </div>
                <div class="w-full col-span-2">
                    <label class="label">
                        <span class="label-text font-thin">Phone Number</span>
                    </label>
                    <input type="text" :value="props.user.phoneNumber" class="input font-medium input-bordered w-full" disabled/>
                </div>
            </span>
        </div>
         <div class="modal-action">
            <label for="viewUser" class="btn btn-error btn-sm">close</label>
        </div>
    </label>
    </label>
</span>
</template>
<script setup lang="ts">
import { User } from '.prisma/client';

let props = defineProps<{
    user : User
}>()

</script>