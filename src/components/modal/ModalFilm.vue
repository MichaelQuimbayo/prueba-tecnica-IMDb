
<template>
  <div class="bg-transparent">
    <section aria-labelledby="features-heading" class="relative  flex flex-col md:flex-row md:items-end h-full">
      <div class="relative bg-transparent aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none w-full h-96 md:h-[32rem] md:w-1/2 ">
          <img :src="props.movie.poster_path" alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen." class="animate-[wiggle_1s_ease-in-out_1] top-0 md:absolute h-full w-full object-center"/>
      </div>
      <div class="h-full md:absolute right-0 bg-white md:w-1/2 flex flex-col justify-end  order-2">
        <div class="h-[50%]"></div>
        <div class=" ">

          <div class=" flex flex-col gap-2 p-4">
            <label class="text-black">{{props.movie.overview}}</label>
            <div class="flex flex-row gap-4  w-full">
              <a class="text-indigo-500 uppercase cursor-pointer">Full movile profile</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" class="w-6 h-6">
                <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>


            </div>
          </div>
          <div class="flex flex-row grid-cols-2 items-end">
            <div class="flex flex-row items-center justify-center bg-amber-500 h-20 w-full gap-2">
              <a class="text-white">Watch Trailer</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
              </svg>

            </div>
            <div class="flex flex-row items-center justify-center gap-2 bg-gray-700 h-20 w-full">
              <a class="text-amber-500">To Watchlist</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
              </svg>

            </div>
          </div>
        </div>
      </div>
      <div class="md:absolute md:drop-shadow-2xl bg-white px-4 py-2 order-1 md:py-8 w-full md:w-1/2 right-10 top-10">
        <div class="border-b-2 border-gray-100 flex flex-col pb-2">
          <div>
            <label class="uppercase text-xl text-black font-semibold">{{props.movie.title}}</label>
          </div>
          <div class="flex flex-row justify-between items-center w-full mb-2">
            <div class="flex text-sm gap-2">
              <label class=" text-blue-600 font-normal">{{props.movie.release_date}}</label>
            </div>

            <div class="flex gap-2">
              <a class="rounded-full bg-gray-200 px-2.5 py-1 text-sm font-semibold text-white"><label class="uppercase text-xs text-gray-500 font-semibold">PG-13</label></a>
              <a class="rounded-full bg-gray-200 px-2.5 py-1 text-sm font-semibold text-white"><label class=" text-gray-500 text-xs font-semibold">2h 3m</label></a>
            </div>
          </div>
        </div>
        <div class="grid-cols-3 flex justify-around w-full mt-8">
          <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>

              <label class=" text-black font-semibold">{{props.movie.popularity}}</label>
            </div>
            <label class="text-sm text-black font-semibold">Raiting</label>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" class="w-6 h-6">
                <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
              </svg>

              <label class=" text-black font-semibold">{{props.movie.vote_count}}</label>
            </div>
            <label class="text-sm text-black font-semibold">Score</label>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" class="w-6 h-6">
                <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clip-rule="evenodd" />
              </svg>



              <label class=" text-black font-semibold">{{props.movie.vote_average}}</label>
            </div>
            <label class="text-sm text-black font-semibold">Awords</label>
          </div>
        </div>

      </div>


    </section>
  </div>
</template>

<script setup>

import DefaultLayaout from "@/App.vue";

const features = [
  {
    name: 'Durable',
    description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.',
  },
  {
    name: 'Refillable',
    description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
  },
  {
    name: 'Thoughtfully designed',
    description:
        'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
  },
  { name: 'Locally made', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
]
const props = defineProps(['movie'])
</script>
