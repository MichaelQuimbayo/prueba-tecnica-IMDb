<template>
    <div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-10 lg:max-w-6xl lg:px-8">
      <h2 id="products-heading" class="sr-only">Movies</h2>

      <div class="grid  grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
        <a v-for="movie in movies" :key="movie.id"  @click="functionModal(movie)" class="group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden  sm:aspect-h-3 sm:aspect-w-2">
            <img :src="resolveImagePath(movie.poster_path)" :alt="movie.imageAlt" class="h-full w-full object-cover object-center"/>
          </div>
          <div class="relative transition-all bg-white p-4 h-28 flex flex-col justify-between">
            <div class=" flex flex-col text-base font-medium text-gray-900">
              <h3 class="uppercase">{{movie.title }}</h3>
              <p class="text-sm text-amber-300 font-semibold">{{ movie.release_date }}</p>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6 bg-red">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>

              <p class=" text-md text-black font-bold">{{ movie.popularity }}</p>
            </div>
            <div class="absolute right-0 bottom-0 w-11  overflow-hidden inline-block">
              <div class=" relative bg-amber-300 h-16  rotate-45 transform origin-bottom-left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="absolute bottom-5 left-0 rotate-45 w-6 h-6">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>

              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
</template>

<script setup>






import {ref} from "vue";

class ThemoviedbApi {
  static getDefaultMovies = () => new Promise((resolve, reject) => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_MOVIES_API_KEY}`,
      }
    };


    fetch(`${import.meta.env.VITE_APP_BASE_URL_MOVIE_API}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
        .then(response => response.json())
        .then(content=>resolve(content.results))
        .catch(err => reject(err));
  });
  static imageResolvePath=(imagePath)=>{
    return `${import.meta.env.VITE_APP_MOVIES_BASE_IMAGE}/${imagePath}`
  }
}



const movies=  ref([]);
const resolveImagePath=ThemoviedbApi.imageResolvePath;

ThemoviedbApi.getDefaultMovies().then((data)=>{
  movies.value=data;
},(err)=>console.error(err));

const props = defineProps(['open','movie'])
const emit = defineEmits(['openModal', 'movie'])
const functionModal =(movie)=>{
  emit('openModal', movie)
}


console.log('env',import.meta.env)

</script>
