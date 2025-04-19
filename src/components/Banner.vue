<template>
  <section class="pb-[100px]">
    <div class="container">
      <div class="flex gap-x-11">
        <div class="w-[20%] border-r-1 border-[#999] pt-10">
          <ul class="flex flex-col space-y-4">
            <li v-for="category in categories" class="text-[16px] font-normal font-poppins text-[#000000] leading-6"><a href="#">{{category}}</a></li>
          </ul>
        </div>
        <div class="w-80%">
          <div class="pt-10">
            <a href="#">
              <img :src="Banner" alt="Banner" class="w-full">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Banner from '@/assets/images/banner.png';
import {ref} from 'vue';
const categories = ref([
  'Woman’s Fashion' ,
  'Man’s Fashion' ,
  'Kid’s Fashion',
  'Electronics' ,
  'Home & Living' ,
  'Health & Beauty' ,
  'Sports & Outdoor' ,
  'Toys & Baby Care' ,
  'Automotive & Motorbike'
])
</script>