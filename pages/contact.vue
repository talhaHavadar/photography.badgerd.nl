<template>
    <div class="flex min-h-screen flex-col items-center justify-center p-4 pt-36 sm:p-14 md:p-32">
        <div class="text-center subpixel-antialiased">
            <h1 class="text-4xl font-light">Let us know!</h1>
            <p class="mt-2 text-lg font-extralight">
                For questions regarding orders please use the contact form below. <br />
                <br />
                If you feel unheard or you want yo reach us to discuss business, use the email address below <br />
                badgerdshop@gmail.com <br />
            </p>
        </div>
        <form
            accept-charset="UTF-8"
            class="mt-24 w-full lg:w-[80%] xl:w-[60%]"
            @submit.prevent="onSubmit()"
            method="POST"
        >
            <label class="block">
                <span class="text-gray-700">Name</span>
                <input
                    v-model="name"
                    type="text"
                    class="mt-1 block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder=""
                    required
                />
            </label>
            <label class="block">
                <span class="text-gray-700">Email</span>
                <input
                    v-model="email"
                    type="email"
                    required
                    class="mt-1 block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="john@example.com"
                />
            </label>

            <label class="block">
                <span class="text-gray-700">Message</span>
                <textarea
                    v-model="message"
                    class="mt-1 block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                    rows="5"
                    placeholder="Message"
                    required
                ></textarea>
            </label>
            <button type="submit" class="mt-3 rounded-sm border bg-slate-100 py-2 px-4 duration-200 hover:bg-slate-200">
                Submit
            </button>
            <div class="success" v-if="isSuccess">We received your submission, thank you!</div>
            <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
            <input type="hidden" name="_gotcha" style="display: none !important" />
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Contact',
    mounted() {
        window.grecaptcha.ready(function () {
            window.grecaptcha
                .execute('6LcpogMjAAAAAFq6Owl0rSSWT0HUHuI_oN_KdUgi', { action: 'contact' })
                .then(function (token) {
                    document.getElementById('captchaResponse').value = token
                })
        })
    },
    data() {
        return {
            loading: true,
            name: '',
            email: '',
            message: '',
            isSuccess: false,
        }
    },
    methods: {
        onSubmit() {
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }
            axios
                .post('https://getform.io/f/8cd0c577-c0ba-4ba9-a8bb-66a31d07a479', data, {
                    headers: {
                        Accept: 'application/json',
                    },
                })
                .then(
                    (response) => {
                        console.log(response.data)
                        this.isSuccess = response.data.success
                    },
                    (response) => {
                        // Error
                    }
                )
        },
    },
}
</script>
