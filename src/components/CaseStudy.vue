<script setup>
    defineProps({
        title: String,
        mobileMedia: String,
        laptopMedia: String,
        website: String,
        design: String,
        github: String,

    })
</script>

<template>
    <div class="md:flex grid grid-cols-1 md:h-screen gap-8 bg-gray-50 shadow-md p-8 py-14">
        <div class="flex flex-col justify-center -md:row-start-2 -md:row-end-3">
            <h2 class="capitalize font-bold text-2xl -md:text-center mb-6">{{ title }}</h2>
            <p class="-md:text-center">
                <slot />
            </p>
            <div class="mt-8 flex -sm:flex-wrap -md:justify-center gap-3">
                <a :href="website" target="_blank" v-if="website"
                    class="border border-primary text-primary rounded capitalize flex text-sm gap-2 w-max px-2 py-2 font-saira">
                    <span>
                        <i class="fas fa-globe text-primary"></i>
                    </span>
                    <span>
                        view website
                    </span>
                </a>
                <a :href="design" v-if="design" target="_blank"
                    class="border bg-primary text-white rounded capitalize flex text-sm gap-2 w-max px-4 py-2 font-saira">
                    <span>
                        <i class="fa-brands fa-figma text-white"></i>
                    </span>
                    <span>
                        view design
                    </span>
                </a>
                <a :href="github" v-if="github" target="_blank"
                    class="border bg-secondary text-white rounded capitalize flex text-sm gap-2 w-max px-2 py-2 font-saira">
                    <span>
                        <i class="fa-brands fa-github text-white"></i>
                    </span>
                    <span>
                        view code
                    </span>
                </a>
            </div>
        </div>
        <div class="flex items-center -md:justify-center gap-2">
            <div class="relative isolate">
                <img src="../assets/images/Iphone.png" alt="iPhone mockup" class="max-w-[150px]">
                <img :src="mobileMedia" alt=""
                    class="absolute inset-0 left-2.5 top-6 rounded-[0_0_16px_16px] -z-10 w-[88%] h-[90%]">
                <span class="absolute w-[88%] h-12 inset-0 left-2  top-1 -z-20 bg-zinc-700 rounded-2xl"></span>
            </div>
            <div class="relative isolate -md:hidden">
                <img src="../assets/images/laptop.png" alt="laptop mockup" class="max-w-md ">
                <video loop autoplay muted alt="" class="absolute w-4/5 inset-0 left-12 -top-1 h-full -z-10 ">
                    <source :src="laptopMedia">
                </video>
                <span class="absolute w-4/5 inset-0 left-12 -top-0 -z-20 bg-black rounded-3xl"></span>
            </div>
        </div>
    </div>
</template>