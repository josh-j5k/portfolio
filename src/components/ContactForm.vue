<script setup>
    import { ref, reactive } from 'vue'
    const form = reactive({
        name: '',
        email: '',
        subject: '',
        message: '',
        apiKey: '0db2c7bc-cf71-4def-baa1-0b64c8067098',
        reset: () => {
            form.name = ''
            form.email = ''
            form.subject = ''
            form.message = ''
        }
    })
    const processing = ref(false)
    const nameError = ref(false)
    const emailError = ref(false)
    const subjectError = ref(false)
    const messageError = ref(false)
    function toast(message) {
        const timeout = 5000;
        const div = document.createElement("div");
        const p = document.createElement("p");
        div.className = "toast py-12 px-6 shadow-lg bg-gray-100 text-slate-700";
        p.textContent = message;
        div.append(p);
        document.getElementById("app").appendChild(div);

        div.animate(
            [
                { transform: "translateY(-100%)" },
                { transform: "translateY(0)", easing: "ease-in-out" },
            ],
            {
                duration: 500,
                iterations: 1,
            }
        );
        setTimeout(() => div.remove(), timeout);
    }
    function validate() {
        if (form.name === '') {
            nameError.value = true
        }
        if (form.email === '') {
            emailError.value = true
        }
        if (form.subject === '') {
            subjectError.value = true
        }
        if (form.message === '') {
            messageError.value = true
        }

        if (!nameError.value && !emailError.value && !subjectError.value && !messageError.value) {
            return true
        } else {
            setTimeout(() => {
                subjectError.value = false
                messageError.value = false
                emailError.value = false
                nameError.value = false
            }, 4000)
            return false
        }
    }
    function submit() {
        if (validate()) {
            processing.value = true
            const data = {
                access_key: form.apiKey,
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message
            }
            const json = JSON.stringify(data)
            try {
                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                }).then(res => {
                    if (res.status === 200) {
                        processing.value = false
                        toast('Form submitted successfully')
                        form.reset()
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

</script>
<template>
    <form id="contact_form" @submit.prevent="submit">
        <div class="flex flex-col gap-4 max-w-lg mx-auto">
            <div class="flex -sm:flex-col gap-8">
                <div class="flex flex-col w-full">
                    <label for="name">
                        Name
                    </label>
                    <input v-model="form.name" :class="[nameError ? 'border border-red-500' : '']"
                        class="focus:border-0 focus:outline focus:outline-secondary rounded py-1.5 text-gray-800 px-4 "
                        type="text" name="name" id="name">
                    <p v-if="nameError" class="text-red-500">This field is required</p>
                </div>
                <div class="flex flex-col w-full">
                    <label for="email">
                        Email
                    </label>
                    <input v-model="form.email" :class="[emailError ? 'border border-red-500' : '']"
                        class="focus:border-0 focus:outline focus:outline-secondary rounded py-1.5 text-gray-800 px-4 "
                        type="email" name="email" id="email">
                    <p v-if="emailError" class="text-red-500">This field is required</p>
                </div>
            </div>
            <div class="flex flex-col">
                <label for="subjext">
                    Subject
                </label>
                <input v-model="form.subject" :class="[subjectError ? 'border border-red-500' : '']"
                    class="focus:border-0 focus:outline focus:outline-secondary rounded py-1.5 text-gray-800 px-4 "
                    type="text" name="subject" id="subject">
                <p v-if="subjectError" class="text-red-500">This field is required</p>

            </div>
            <div class="flex flex-col">
                <label for="message">
                    Message
                </label>
                <textarea v-model="form.message" name="message" id="message" rows="5"
                    :class="[messageError ? 'border border-red-500' : '']"
                    class="focus:border-0 focus:outline focus:outline-secondary rounded p-4 text-gray-800"></textarea>
                <p v-if="messageError" class="text-red-500">This field is required</p>
            </div>
            <div class="flex flex-col">
                <button :disabled="processing" :class="[processing ? 'opacity-70' : '']" type="submit"
                    class="uppercase bg-secondary py-3 rounded-md">
                    submit
                </button>
            </div>
        </div>
    </form>
</template>