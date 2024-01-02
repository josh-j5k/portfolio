<script setup>
    import { onMounted } from 'vue';
    import ContactForm from '../components/ContactForm.vue';
    onMounted(() => document.title = "Contact | Achumanzeh")
</script>

<template>
    <section class="pt-32 p-12 pb-20 bg-hero-bg">

        <h1 class="text-3xl font-bold text-center">
            Contact
        </h1>
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
            <ContactForm />
        </div>
        <div class="max-w-lg py-12 mx-auto flex flex-col items-center">
            <h2 class="text-xl font-bold capitalize mb-4">
                socials
            </h2>
            <div class="flex gap-6">
                <a href="https://github.com/josh-j5k/" target="_blank"><i class="fa-brands fa-github fa-xl"></i></a>
                <a href="www.linkedin.com/in/achumanzeh" target="blank"><i class="fa-brands fa-linkedin fa-xl"></i></a>
                <a href="mailto:info@achumanzeh.com"><i class="fa-solid fa-envelope fa-xl"></i></a>
            </div>
        </div>
    </section>
</template>