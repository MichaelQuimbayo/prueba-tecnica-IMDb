
<template>
  <div class="bg-white">
    <header class="relative bg-white">
      <nav aria-label="Top" class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="border-b border-gray-200 px-4  sm:px-0 sm:pb-0">
          <div class="flex sm:h-16 items-center">
            <!-- Logo -->

            <!-- Flyout menus -->
            <PopoverGroup class="absolute hidden md:flex w-full inset-x-0 bottom-0 sm:static  sm:self-stretch">
              <div class="flex h-14 w-full space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-around sm:overflow-visible sm:border-t-0 sm:pb-0">
                <Popover v-for="(category, categoryIdx) in navigation.categories" :key="categoryIdx" class="flex" v-slot="{ open }">
                  <div class="relative flex">
                    <PopoverButton :class="[open ? 'uppercase border-amber-600 text-amber-600' : 'uppercase border-transparent text-gray-700 hover:text-amber-800', 'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out']">{{ category.name }}</PopoverButton>
                  </div>

                  <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <PopoverPanel class="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                      <!--
                            <div class="relative bg-white">
                                              <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                                <div class="grid grid-cols-1 items-start gap-x-6 gap-y-10 pb-12 pt-10 md:grid-cols-2 lg:gap-x-8">
                                                  <div class="grid grid-cols-1 gap-x-6 gap-y-10 lg:gap-x-8">
                                                    <div>
                                                      <p id="clothing-heading" class="font-medium text-gray-900">Clothing</p>
                                                      <div class="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                                        <ul role="list" aria-labelledby="clothing-heading" class="space-y-6 sm:space-y-4">
                                                          <li v-for="item in category.clothing[0]" :key="item.name" class="flex">
                                                            <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                                          </li>
                                                        </ul>
                                                        <ul role="list" aria-label="More clothing" class="mt-6 space-y-6 sm:mt-0 sm:space-y-4">
                                                          <li v-for="item in category.clothing[1]" :key="item.name" class="flex">
                                                            <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
                                                    <div>
                                                      <p id="accessories-heading" class="font-medium text-gray-900">Accessories</p>
                                                      <ul role="list" aria-labelledby="accessories-heading" class="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4">
                                                        <li v-for="item in category.accessories" :key="item.name" class="flex">
                                                          <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                    <div>
                                                      <p id="categories-heading" class="font-medium text-gray-900">Categories</p>
                                                      <ul role="list" aria-labelledby="categories-heading" class="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4">
                                                        <li v-for="item in category.categories" :key="item.name" class="flex">
                                                          <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                          </div>
                        </div>
                      </div>!-->

                    </PopoverPanel>
                  </transition>
                </Popover>

              </div>
            </PopoverGroup>

            <div class="hidden md:flex flex-1 items-center justify-end">
              <div class=" flex justify-center md:justify-start  gap-x-6">
                <a href="#" class="flex gap-2 rounded-md bg-amber-500 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                  </svg>

                  <label>179</label>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-center justify-between mt-4 w-full px-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-6 h-6">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
          </svg>
          <div class="hidden md:flex flex-col  w-full px-8">

            <p class="text-sm font-medium text-gray-900">IMDb Roting</p>
            <div class="mt-4" aria-hidden="true">
              <div class="overflow-hidden rounded-full bg-gray-200">
                <div class="h-1 rounded-full bg-amber-600" style="width: 37.5%" />
              </div>

            </div>
          </div>
          <div class="w-72">
            <div class="relative mt-2">
              <input type="text" name="name" id="name" class="peer px-2 block w-full border-0  py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Search Film" />
              <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="absolute right-0 top-2 w-6 h-6">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
              </svg>

            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline'

const navigation = {
  categories: [
    {
      name: 'in theaters',
      href: '#'
    },
    {
      name: 'coming soon',
      href: '#'

    },
    {
      name: 'charts',
      href: '#'

    },
    {
      name: 'tv series',
      href: '#'

    },
    {
      name: 'trailers',
      href: '#'

    },
    {
      name: 'more',
      href: '#'

    },

  ],
  other: [

  ],
}
</script>
