<script setup>
    import { onMounted } from 'vue';

    onMounted(() => document.title = "About | Achumanzeh")
</script>
<template>
    <section class="pt-32 p-12 pb-20 bg-hero-bg">
        <h1 class="text-3xl font-bold text-center">
            About
        </h1>
    </section>
    <section class="py-20 px-8">
        <div class="max-w-2xl mx-auto">
            <h2 class="mb-6 text-lg capitalize">
                About Me
            </h2>
            <p>
                My name is Jong Joshua Achumanzeh and I am a fullstack developer. I love creating user interfaces with user
                experience being the top priority. Hence, my love for minimalistic websites.
            </p>
            <hr class="w-5/6 h-1 my-8">
            <h3 class="mb-6 text-xl capitalize">
                experience
            </h3>
            <div>
                <h4 class="">
                    Freelancing
                </h4>
                <p class="text-sm opacity-90 mb-4">
                    2018 - 2022
                </p>
                <p>
                    Started my freelancing journey with WordPress installing themes and plugins, do a little bit of
                    designing. Eventually I started doing debugging on WordPress websites. After learning HTML, CSS and
                    JavaScript started doing custom CSS on WordPress websites.
                </p>
                <h4 class="mt-8">
                    FrontEnd Developer
                </h4>
                <p class="text-sm opacity-90 mb-4">
                    Jan 2023 - April 2023
                </p>
                <p>
                    Worked as a Front-End developer in a local startup in my area. Build widgets with Vue Js for a GHL
                    platform and some days I build websites with WordPress.
                </p>
            </div>
            <hr class="w-5/6 h-1 my-8">
            <h3 class="mb-6 text-xl">
                Hobbies and Interest
            </h3>
            <p>
                Apart from coding, I like playing video games, watching and playing basketball, watching anime.
            </p>
        </div>
    </section>
</template>