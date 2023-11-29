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
            </div>
        </div>
    </section>
</template>