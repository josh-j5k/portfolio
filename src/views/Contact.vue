<script setup>
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
        <div class="max-w-lg py-12 mx-auto flex flex-col items-center">
            <h2 class="text-xl font-bold capitalize mb-4">
                socials
            </h2>
            <div class="flex gap-4">
                <a href=""><i class="fa-brands fa-github"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
                <a href="mailto:info@achumanzeh.com"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
    </section>
</template>