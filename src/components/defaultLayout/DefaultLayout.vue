<template>
  <div class="relative">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-10 w-auto" src="/assets/logo/logoImdb.png" width="100" height="100" alt=""/>
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="uppercase text-md font-semibold leading-6 hover:text-amber-300 text-white">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <img class="inline-block h-10 w-10 rounded-full" src="../../../public/assets/logo/logoImdb.png" alt="" />
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="../../../public/assets/images/portada.png" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/25">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate overflow-hidden xl:pt-14">
      <img src="https://images2.thanhnien.vn/Uploaded/congthang/2016_02_01/anh1_UZPH.png?width=500" alt="" class="absolute inset-0 -z-10  md:h-{400px} w-full object-cover" />
      <div class="mx-auto xl:max-w-5xl py-10 lg:py-36 xl:py-44">
        <div class="md:relative  md:absolute top-10 left-0 right-0 text-center xl:text-left">
          <h1 class="text-xl md:text-6xl font-bold tracking-tight text-white sm:text-6xl uppercase">The martian</h1>
          <div class="flex justify-center xl:justify-start flex-row gap-3">
            <p class="mt-6 md:text-md leading-8 text-gray-300">Aventure</p>
            <p class="mt-6 md:text-md leading-8 text-gray-300">Sci-fi</p>
            <p class="mt-6 md:text-md leading-8 text-gray-300">Thriller</p>
          </div>

          <div class="mt-8 md:mt-10 flex justify-center xl:justify-start  gap-x-6">
            <a href="#" class="flex gap-2 rounded-md bg-amber-500 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
              <label>Watch Thriller</label>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
            </a>
          </div>
          <div class="hidden mt-10 xl:mt-20 md:flex flex-col justify-center md:justify-start flex-row ">
            <p class="text-xs md:text-lg leading-8 text-gray-300 font-semibold">In theaters</p>
            <p class="text-xs md:text-lg leading-8 text-amber-300">15 Oct, 2015 (USA)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute left-0 right-0  xl:top-[620px] mx-auto max-w-5xl">
      <div class="bg-white w-full h-full" >
        <LayoutFilms></LayoutFilms>
        <MoviesContainer @open-modal="openModal"></MoviesContainer>
        <Modal @close="closeModal" :open="open" :movie="movie"></Modal>
      </div>
    </div>
  </div>


</template>

<script setup>
import MoviesContainer from "@/components/moviesContainer/MoviesContainer.vue";
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import LayoutFilms from "@/components/LayoutFilms/LayoutFilms.vue";
import Modal from "@/components/modal/Modal.vue";

const navigation = [
  { name: 'Movies', href: '#' },
  { name: 'Celebs & Photos', href: '#' },
  { name: 'Community', href: '#' },
  { name: 'News', href: '#' },
]

const movie = ref(null)
const open = ref(false);

const mobileMenuOpen = ref(false)

const openModal=(movieIn)=>{
  open.value = true;
  console.log(open)
  movie.value = movieIn;
}
const closeModal=()=>{
  open.value = false;

  //product = product;
}
</script>
