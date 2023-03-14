<template>
    <div class="bg-black h-screen bg-[url(~/assets/images/round-image.png)] bg-no-repeat bg-center bg-top">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
          <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="px-6 pt-6 lg:px-[150px]">
        <nav class="flex items-center justify-between" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Nucleus</span>
              <img class="h-10 lg:h-10" src="~/assets/images/logo.svg" alt="" />
            </a>
          </div>
          <div class="lg:flex lg:flex-1 lg:justify-end">
            <nuxt-link to="contact">
              <span class="rounded-md font-poppins bg-[#EA5B2B] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contact Us</span>
            </nuxt-link>
          </div>
        </nav>
      </div>
      <main>
        <div class="relative px-6 lg:px-5">
          <div class="mx-auto lg:w-[989px] py-32 sm:py-48 lg:py-56">
            <div class="lg:text-center">
              <h1 class="text-4xl font-bold tracking-tight text-white sm:text-4xl font-poppins">Experience the best of decentralized gaming <br><span class="gradient-text">Nucleus</span> is coming.</h1>
              <p class="mt-6 text-lg sm:text-lg leading-8 text-gray-200 font-poppins">Be the first to know before we go live...</p>
              <form>
                <div class="mt-10 flex flex-col lg:items-center justify-center gap-x-6">
                  <div class="bg-gradient-to-r from-[#9089FC] to-[#EA5B2B] pt-0 pb-0.5 rounded-full w-full lg:w-[551px]">
                    <input v-model="form.email" type="text" name="" id="" class="bg-[#000000] text-white font-poppins border-0 rounded-full focus:border-0 focus:ring-0 w-full" placeholder="Type your email here...">
                  </div>
                  <!-- <img v-if="this.loading" src="~/assets/images/spinner.svg" class="h-3" alt=""> -->
                  <button type="button" @click="handleSubmit" class="gradient-button text-sm font-semibold font-poppins text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5">
                    <span>Join the waitlist</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
        return {
          done: false,
          form: {
              email: ''
          }
        }
    },
    methods: {
        async handleSubmit(e) {
          e.preventDefault();
          const postData = {
            'email': this.form.email
          }
          const { data: response } = await useFetch('http://nucleus.test/api/waitlist', {
              method: 'post',
              body: JSON.stringify(postData)
          })
          
          console.log(response);
          this.form.email = "";
          alert('You have been added to our waitlist!')
        }
    }
}
  </script>

<style scoped>
  .gradient-text {
    background: linear-gradient(91.09deg, #EA5B2B 37%, #05A6F0 50.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gradient-button {
    margin-top: 20px;
    width: 297px;
    height: 42px;
    left: 573px;
    top: 666.73px;

    background: linear-gradient(92.69deg, #EA5B2B -12.54%, #271813 107.57%);
    border-radius: 20px;
  }
</style>