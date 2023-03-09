<template>
  <div class="bg-black bg-[url(~/assets/images/round-image.png)] bg-no-repeat bg-center bg-top">
    <div class="px-6 pt-6 lg:px-[150px]">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Nucleus</span>
            <img class="h-12" src="~/assets/images/logo.svg" alt="" />
          </a>
        </div>
        <div class="lg:flex lg:flex-1 lg:justify-end">
          <nuxt-link to="/">
            <span class="link-button rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold border-[#EA5B2B] text-white shadow-sm hover:bg-[#EA5B2B] outline-[#EA5B2B]">Home</span>
          </nuxt-link>
        </div>
      </nav>
    </div>
    <main>
      <div class="relative px-6 lg:px-5">
        <div class="py-40 mt-10 lg:px-[130px] py-10">
          <div class="">
            <div class="px-3.5 py-2 bg-[#FFE2D9] relative text-[#EA5B2B] rounded-full block w-[100px] font-poppins">
              CONTACT
            </div>
            <h1 class="text-2xl font-bold tracking-tight text-white sm:text-5xl mt-10 font-poppins">Let’s stay connected</h1>
            <p class="mt-6 text-sm sm:text-lg leading-8 text-gray-400 font-poppins">We are always happy to hear from you. Fill out the form and we will get back to you <br class="hidden lg:block">within 24hrs</p>
            <div class="mt-10 flex flex-col lg:flex-row justify-between gap-x-[200px]">
              <div class="flex justify-between lg:mt-20 w-2/4">
                <div>
                  <img src="~/assets/images/message-icon.png" alt="">
                  <h3 class="text-white text-2xl mt-5 font-bold font-poppins">Email</h3>
                  <h5 class="text-gray-600 mt-4 font-poppins">nucleus@nightlifelabs.io</h5>
                </div>
                <div class="ml-20 lg:ml-0">
                  <img src="~/assets/images/message-icon.png" alt="">
                  <h3 class="text-white text-2xl mt-5 font-bold font-poppins">Socials</h3>
                  <div class="flex justify-between gap-5 mt-4">
                    <img src="~/assets/images/facebook.png" alt="">
                    <img src="~/assets/images/twitter.png" alt="">
                    <img src="~/assets/images/discord.png" alt="">
                    <img src="~/assets/images/telegram.png" alt="">
                  </div>
                </div>
                <div></div>
              </div>
              <div class="bg-[#080B1C] mt-20 lg:mt-0 p-8 lg:w-2/4">
                <div>
                  <label for="price" class="block text-md font-medium leading-6 text-gray-500 font-poppins">Email</label>
                  <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="price" id="price" class="bg-[#273B4A] block w-full font-poppins rounded-md border-0 py-1.5 pr-20 text-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="youremail@here.com" />
                  </div>
                </div>
                <div class="mt-5">
                  <label for="price" class="block text-md font-medium leading-6 text-gray-500 font-poppins">Message</label>
                  <div class="relative mt-2 rounded-md shadow-sm">
                    <textarea rows="10" type="text" name="price" id="price" class="bg-[#273B4A] font-poppins block w-full rounded-md border-0 py-1.5 pr-20 text-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Your message ...." />
                  </div>
                </div>
                <button href="#" class="primary-button font-poppins text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5 w-full">
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
//import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(91.09deg, #EA5B2B 37%, #05A6F0 50.99%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.primary-button {
  margin-top: 50px;
  height: 62px;
  left: 573px;
  top: 666.73px;

  background: #EA5B2B;
  border-radius: 20px;
}

.link-button {
  border: 1px solid #EA5B2B;
}
</style>