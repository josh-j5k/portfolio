<script setup>
    import { onMounted } from 'vue';
    import CaseStudy from '../components/CaseStudy.vue';
    onMounted(() => {
        document.title = "My Projects | Achumanzeh"
    })
</script>

<template>
    <section class="pt-32 p-12 pb-20 bg-hero-bg">

        <h1 class="text-3xl font-bold text-center">
            Projects
        </h1>
    </section>
    <section class="py-14">
        <div class="w-5/6 mx-auto">
            <h2 class="text-sm mb-2 font-bold capitalize">case studies</h2>
            <p class="capitalize text-2xl mb-8">my recent projects</p>
            <div class="flex flex-col gap-8">
                <CaseStudy website="https://houseseekershub.com" title="house seeker's hub"
                    laptop-media="/assets/images/2023-11-24 04-14-51(1)(1).mp4"
                    mobile-media="/assets/images/Screen Shot 2023-11-23 at 03.22.28.png"
                    design="https://www.figma.com/file/a8YN2rc8bRaRDp4PSqruSw/Untitled?type=design&mode=design&t=2tY3QDvkgNbXGUBV-1"
                    github="https://github.com/josh-j5k/houseseekershub">
                    This project was build to solve the problem of real estate in my country. House seeker's hub is
                    platform where authenticated users can post edit and delete listings, and users can view listings based
                    on location,
                    property status etc
                </CaseStudy>

                <CaseStudy website="https://massehruth.com" title="masseh ruth"
                    laptop-media="/assets/images/2023-11-25 14-36-35(1).mp4"
                    mobile-media="/assets/images/Screen Shot 2023-11-25 at 21.04.45.png"
                    design="https://www.figma.com/file/Mi2Zw0OOL7SMtxzM5pjYXB/Pages?type=design&mode=design&t=2tY3QDvkgNbXGUBV-1">
                    This project was a project I loved building. My sister needed a website for her business to display her
                    work. It is a fullstack website where she can login to her dashboard and add, update and delete
                    collections.
                </CaseStudy>
                <div class="md:flex grid grid-cols-1 md:h-screen gap-8 bg-gray-50 shadow-md p-8 py-14">
                    <div class="flex flex-col justify-center -md:row-start-2 -md:row-end-3">
                        <h2 class="capitalize font-bold text-2xl -md:text-center mb-6">Solitaire</h2>
                        <p class="-md:text-center">
                            This is a fun project. I was bored, I wanted to play solitaire but the one that comes with
                            Windows is full of ads. So I decided to spend the next days designing and building mine. While
                            at it I thought it'll be great building it with Svelte, since I've never worked with the
                            framework before. Overall a fun project.
                        </p>
                        <div class="mt-8 flex -sm:flex-wrap -md:justify-center gap-3">

                            <a href="https://github.com/josh-j5k/solitaire.git" target="_blank"
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
                    <div class="flex items-center -md:justify-center  gap-2">

                        <div class="relative isolate">
                            <img src="../assets/images/laptop.png" alt="laptop mockup" class="max-w-md -md:w-full ">
                            <video loop controls muted preload="metadata" alt=""
                                class="absolute w-[78%] inset-0 left-12 -md:left-8 -top-1 -md:-top-4 h-[90%] -md:h-full z-10 ">
                                <source src="../assets/images/Untitled video - Made with Clipchamp (1).mp4#t=0.1">

                            </video>
                            <span
                                class="absolute w-4/5 inset-0 -md:left-8 left-12 -top-0 -z-20 bg-black rounded-3xl"></span>
                        </div>
                    </div>
                </div>
                <CaseStudy title="tray" laptop-media="/assets/images/2023-11-25 23-35-19(1)(1).mp4"
                    mobile-media="/assets/images/Screen Shot 2023-11-25 at 23.36.08.png"
                    github="https://github.com/josh-j5k/tray"
                    design="https://www.figma.com/file/DiVTS04MpgDS5F4HHHenQ8/Tray?type=design&node-id=0%3A1&mode=design&t=YEm4YUTK0S7tgpTq-1">
                    This project was a fun project. After months of building websites with frameworks and libraries, I
                    wanted to convert a design into a website with just plain old HTML and CSS. This project was designed by
                    [insert name]. She is a great designer. <a class="underline text-blue-500"
                        href="https://www.linkedin.com/in/stephanie-weghemboyi-nkwatoh-55b008173/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">More
                        designs from her</a>
                </CaseStudy>
                <div class="md:flex grid grid-cols-1 md:h-screen gap-8 bg-gray-50 shadow-md p-8 py-14">
                    <div class="flex flex-col justify-center -md:row-start-2 -md:row-end-3">
                        <h2 class="capitalize font-bold text-2xl -md:text-center mb-6">Empomart</h2>
                        <p class="-md:text-center">
                            This project was project I did for my WordPress skill assessment test. I was to build an
                            e-commerce with mordern and unique feel with no premium themes nor premium plugins. I did a lot
                            of custom css on this webiste to get unitque feel to it
                        </p>
                        <div class="mt-8 flex -sm:flex-wrap -md:justify-center gap-3">

                            <a href="https://empomat.vmediaconsulting.co/" target="_blank"
                                class="border border-primary text-primary rounded capitalize flex text-sm gap-2 w-max px-2 py-2 font-saira">
                                <span>
                                    <i class="fas fa-globe text-primary"></i>
                                </span>
                                <span>
                                    view website
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center -md:justify-center  gap-2">
                        <div class="relative isolate">
                            <img src="../assets/images/Iphone.png" alt="iPhone mockup" class="max-w-[150px]">
                            <img src="../assets/images/Screen Shot 2024-01-20 at 02.16.321.png" alt=""
                                class="absolute inset-0 left-2 top-6 rounded-[0_0_16px_16px] -z-10 w-[89%] h-[90%]">
                            <span class="absolute w-[88%] h-12 inset-0 left-2  top-1 -z-20 bg-zinc-700 rounded-2xl"></span>
                        </div>
                        <div class="relative isolate -md:hidden">
                            <img src="../assets/images/laptop.png" alt="laptop mockup" class="max-w-md -md:w-full ">
                            <img src="../assets/images/Screenshot 2024-01-20 at 02-15-53 Empomart Cameroon – Online Shopping Center1.png"
                                alt="" class="absolute w-[78%] inset-0 -z-10 left-[52px] -md:left-8 top-8 -md:-top-4  " />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>