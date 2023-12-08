<template>
    <div class="bg-white">
        <div class="items-center h-screen max-h-screen  bg-[url(https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat">    
            <div class="backdrop-brightness-900 h-screen">
                <navbar />
                <section class="">
                    <div class="py-8 sm:px-4 px-10  mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                            <span class="sm:text-xs text-[10px] bg-[#EA5B2B] rounded-full text-white px-4 sm:py-1.5 mr-3">New</span> <span class="sm:text-sm text-[10px] font-medium font-satoshi">GAP is almost out! See what's new</span> 
                            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                        <h1 class="mb-4 sm:text-4xl text-xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white font-satoshi sm:leading-10">
                            Welcome to the first end-to-end professional gaming platform, built for gamers, hosts and sponsors
                        </h1>
                        <p class="mb-8 sm:text-lg text-sm font-normal text-gray-100 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 font-satoshi">Play Your Way to Victory on Our Gaming Platform!</p>
                        
        
                        <form class="mt-10 flex flex-col lg:items-center justify-center gap-x-6 sm:px-96">
                            <div class="flex sm:flex-row flex-col items-center sm:border-b border-white py-2 w-full">
                                <input v-model="form.email" class="focus:outline-none text-center sm:border-none border-1 outline-white active:outline-4 appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight font-satoshi text-white  placeholder:text-gray-400" 
                                type="text" placeholder="janedoe@gmail.com" aria-label="email">
                                <button @click="handleSubmit" class="font-satoshi sm:mt-0 mt-3 flex-shrink-0 bg-white hover:bg-[#EA5B2B] duration-500 hover:text-white text-sm text-[#EA5B2B] py-1 px-4 rounded-full" type="button">
                                    Join the waitlist
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
        <div id="about" class="px-20 flex flex-row justify-center bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ">
            <div class="my-20 text-center justify-center max-w-5xl">
                <h3 class="sm:text-4xl font-bold font-satoshi">About Games and Players</h3>
                <div class="text-xl font-satoshi mt-10">
                    <p>Games and Players (GAP) Network is a of different participants in the eSports ecosystem in Nigeria. 
                    We have a strong community of players, tournament hosts, gaming guilds, game developers and distributors, 
                    and sponsors.</p>
                    
                    <p class="mt-4">We have organized over 10 tournaments and given out over $3,000 in prizes on different games, 
                    both mobile and console. We are currently building the first ever end-to-end platform for players, tournament hosts and sponsors.</p>
                </div>
            </div> 
        </div>
        <div id="contact" class="px-20 flex flex-col justify-center">
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white font-satoshi">Let’s stay connected</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl font-satoshi">We are always happy to hear from you. Fill out the form and <br class="hidden lg:block">we will get back to you within 24hrs</p>
                <form @submit.prevent="submit(emailForm)" class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-satoshi">Your email</label>
                        <input type="email" id="email" v-model="emailForm.email" class="shadow-sm bg-gray-50 border font-satoshi border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@onegap.network" required>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-satoshi">Subject</label>
                        <input type="text" id="subject" v-model="emailForm.subject" class="block p-3 w-full text-sm font-satoshi text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 font-satoshi">Your message</label>
                        <textarea id="message" v-model="emailForm.message" rows="6" class="block p-2.5 w-full text-sm font-satoshi text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center font-satoshi text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
          </section>
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: "Home",
    data() {
      return {
        done: false,
        form: {
          email: "",
        },

        emailForm: {
          email: "",
          message: "",
          subject: "",
        }
      };
    },
    methods: {
      async handleSubmit(e) {
        e.preventDefault();
        if (this.form.email.length > 0) {
          const postData = {
            email: this.form.email,
          };
  
          const response = await useFetch("https://neutron.mystagingenv.xyz/api/waitlist", {
              method: "post",
              body: JSON.stringify(postData),
            }
          );
      
          this.form.email = "";
          alert("You have been added to our waitlist!");
        } else {
          alert("Enter your email address");
        }
      },

      async submit(form) {
        mail.send({
          from: form.email,
          subject: form.subject,
          text: form.message
        });
      }
    },
  };
  </script>
  
  <style scoped>
  .gradient-text {
    background: linear-gradient(91.09deg, #ea5b2b 37%, #05a6f0 50.99%);
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
  
    background: linear-gradient(92.69deg, #ea5b2b -12.54%, #271813 107.57%);
    border-radius: 20px;
  }

  .submit-button {
    margin-top: 20px;
    width: 297px;
    height: 42px;
    left: 573px;
    top: 666.73px;
    border-radius: 20px;
  }
  </style>
  