<script setup>
    import { onMounted, ref } from 'vue';
    import HeroIllustration from '../components/HeroIllustration.vue';
    import CaseStudy from '../components/CaseStudy.vue';
    import IconPlusText from '../components/IconPlusText.vue';

    const count = ref(0)

    onMounted(() => {
        const component = document.getElementById('component')
        const paths = component.querySelectorAll('path')

        function increment() {
            if (count.value > paths.length - 2) {
                clearInterval(incTimeout)
            }
            paths[count.value].classList.add('aniPath')
            count.value++
        }
        const incTimeout = setInterval(increment, 250)



    })
</script>
<template>
    <section class="p-12 pt-36 bg-hero-bg md:h-screen min-h-screen">
        <div class="w-5/6 mx-auto">
            <div class="max-w-lg mx-auto mb-8 pb-8">
                <p>
                    Hi! I am Josh
                </p>
                <h1 class="text-3xl md:text-4xl group">
                    I am a
                    <span class="relative">
                        <span class="absolute -left-1 top-0.5 tracking-wide w-fit bg-hero-bg pl-1 z-10 clip-text">
                            Fullstack
                        </span>
                        <span class="">
                            FrontEnd
                        </span>
                    </span>
                    Developer

                </h1>
            </div>
            <div class="grid grid-cols-2 items-center gap-16 -md:grid-cols-1">
                <div class="-md:row-start-2 -md:row-end-3 -md:text-center">
                    <h2 class="text-sm font-bold mb-4">
                        About Me
                    </h2>
                    <p>
                        I’m a web developer with passion for creating minimalistic websites that are responsive, easy to
                        maintain, easy
                        to scale and most importantly prioritizes user experience. Love learning new technologies and
                        incorporating them in
                        to my workflow.
                    </p>
                </div>

                <HeroIllustration class="w-fit" stroke-color="#192BC2" />

            </div>
        </div>
    </section>
    <section class="py-14">
        <div class="w-5/6 mx-auto">
            <h2 class="text-sm mb-2 font-bold capitalize">case studies</h2>
            <p class="capitalize text-2xl mb-8">my recent projects</p>
            <div class="flex flex-col gap-8">
                <CaseStudy website="https://houseseekershub.com" title="house seeker's hub"
                    laptop-media="/src/assets/images/2023-11-24 04-14-51(1)(1).mp4"
                    mobile-media="/src/assets/images/Screen Shot 2023-11-23 at 03.22.28.png"
                    design="https://www.figma.com/file/a8YN2rc8bRaRDp4PSqruSw/Untitled?type=design&mode=design&t=2tY3QDvkgNbXGUBV-1"
                    github="https://github.com/josh-j5k/houseseekershub">
                    This project was build to solve the problem of real estate in my country. House seeker's hub is
                    platform where authenticated users can post edit and delete listings, and users can view listings based
                    on location,
                    property status etc
                </CaseStudy>
                <CaseStudy website="https://massehruth.com" title="masseh ruth"
                    laptop-media="/src/assets/images/2023-11-25 14-36-35(1).mp4"
                    mobile-media="/src/assets/images/Screen Shot 2023-11-25 at 21.04.45.png"
                    design="https://www.figma.com/file/Mi2Zw0OOL7SMtxzM5pjYXB/Pages?type=design&mode=design&t=2tY3QDvkgNbXGUBV-1">
                    This project was a project I loved building. My sister needed a website for her business to display her
                    work. It is a fullstack website where she can login to her dashboard and add, update and delete
                    collections.
                </CaseStudy>
                <CaseStudy title="tray" laptop-media="/src/assets/images/2023-11-25 23-35-19(1)(1).mp4"
                    mobile-media="/src/assets/images/Screen Shot 2023-11-25 at 23.36.08.png"
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
    <section class="pb-12">
        <div class="bg-secondary h-[30vh] pt-12">
            <h2 class="capitalize w-5/6 mx-auto text-2xl text-white">
                skills and technologies
            </h2>
        </div>
        <div
            class="w-5/6 mx-auto bg-white grid grid-cols-3 -md:grid-cols-2 -sm:grid-cols-1 md:gap-20 gap-8 -translate-y-20 rounded-2xl p-8">
            <div
                class="justify-self-center shadow-md w-full p-8 isolate rounded-lg relative bg-secondary before:content-string before:absolute before:w-full before:h-full before:inset-0 before:-z-10 before:bg-white before:opacity-40 before:backdrop:blur-lg">
                <h3 class="mb-6 text-lg">
                    Front-End
                </h3>
                <ul class="flex flex-col gap-4">
                    <IconPlusText icon-link="/src/assets/svg/html5.svg">
                        HTML
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/css.svg">
                        CSS
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/javascript.svg">
                        JavaScript
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/typescript.svg">
                        TypeScript
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/vue.svg">
                        Vue
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/tailwindcss.svg">
                        tailwindcss
                    </IconPlusText>

                </ul>
            </div>
            <div
                class="justify-self-center shadow-md w-full p-8 rounded-lg isolate relative bg-indigo-500 before:content-string before:absolute before:w-full before:h-full before:inset-0 before:-z-10 before:bg-white before:opacity-10 before:backdrop:blur-lg">
                <h3 class="mb-6 text-lg">
                    Backend
                </h3>
                <ul class="flex flex-col gap-4">
                    <IconPlusText icon-link="/src/assets/svg/php.svg">
                        PHP
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/laravel.svg">
                        Laravel
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/mysql.svg">
                        mysql
                    </IconPlusText>
                </ul>
            </div>
            <div
                class="justify-self-center shadow-md -md:col-span-2 -sm:col-span-1 w-full p-8 isolate relative bg-primary rounded-lg before:content-string before:absolute before:w-full before:h-full before:inset-0 before:-z-10 before:bg-white before:opacity-50 before:backdrop:blur-lg">
                <h3 class="mb-6 text-lg">
                    Others
                </h3>
                <ul class="flex flex-col gap-4">
                    <IconPlusText icon-link="/src/assets/svg/wordpress.svg">
                        WordPress
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/illustrator.svg">
                        Adobe Illustrator
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/photoshop.svg">
                        Adobe Photoshop
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/figma.svg">
                        Figma
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/git.svg">
                        Git
                    </IconPlusText>
                    <IconPlusText icon-link="/src/assets/svg/seo.svg">
                        SEO
                    </IconPlusText>
                </ul>
            </div>
        </div>
    </section>
    <section class="py-20 px-8 bg-blue-950 text-white">
        <div>
            <h2 class="capitalize text-center text-2xl font-bold mb-4">
                get in touch
            </h2>
            <p class="max-w-lg mx-auto mb-8 text-center">
                I’m currently looking for new opportunities. Be it full-time, part-time or freelance work. My inbox is
                always open. Whether you have a question, or work or you just want ro say hi.
            </p>
            <form action="">
                <div class="flex flex-col gap-4 max-w-lg mx-auto">
                    <div class="flex -sm:flex-col gap-8">
                        <div class="flex flex-col w-full">
                            <label for="name">
                                Name
                            </label>
                            <input class="focus:border-0 focus:outline focus:outline-secondary rounded" type="text"
                                name="name" id="name">
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="email">
                                Email
                            </label>
                            <input class="focus:border-0 focus:outline focus:outline-secondary rounded" type="email"
                                name="email" id="email">
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="subjext">
                            Subject
                        </label>
                        <input class="focus:border-0 focus:outline focus:outline-secondary rounded" type="text"
                            name="subject" id="subject">

                    </div>
                    <div class="flex flex-col">
                        <label for="message">
                            Message
                        </label>
                        <textarea name="message" id="message" rows="5"
                            class="focus:border-0 focus:outline focus:outline-secondary rounded"></textarea>
                    </div>
                    <div class="flex flex-col">
                        <button class="uppercase bg-secondary py-3 rounded-md">
                            submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
    .stroke-visible {
        opacity: 1;
    }

    .backdrop-filter {
        position: relative;
        border-radius: 10px;

    }

    h1:hover .clip-text {
        clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 0 50%, 0 0);

    }

    .clip-text {
        transition: clip-path 1000ms ease-in-out;
        clip-path: polygon(0 0, 33% 50%, 0 100%, 0 100%, 33% 50%, 0 0);
    }

    .backdrop-filter::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        z-index: -1;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
    }
</style>