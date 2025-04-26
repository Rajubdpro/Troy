<script setup>
import image from "@/assets/images/new-product.png";
</script>

<template>
  <section class="pt-20">
    <div class="container">
      <div class="pb-10 flex justify-between">
        <h3 class="text-[20px] font-regular leading-6php  font-poppins text-[#000000]">Wishlist Product (4)</h3>
     </div>
      <div class="flex pb-[118px] gap-x-[30px]">
        <div class="w-1/4 group" v-for="product in 4" :key="product">
          <div class="bg-[#f5f5f5] py-9 px-10 relative rounded-[4px]">
            <img :src="image" alt="New Product" class="w-full group-hover:treansition-all group-hover:scale-110 duration-300">
            <span class="bg-[#DB4444] px-3 py-1 text-[#fafafa] font-poppins absolute left-[12px] top-[12px] rounded-[4px]">-50</span>
            <i class="fa-solid fa-trash-can w-[34px] h-[34px] bg-white rounded-[50%] !leading-[34px] text-center absolute top-3 right-3 cursor-pointer"></i>
          </div>
          <div class="pt-4">
            <h4 class="text-[16px] font-medium leading-7 font-poppins text-[#000000]">Demo Product</h4>
            <p class="pt-2 leading-6 text-[16px] font-poppins space-x-3">
              <span class="text-[#DB4444]">$900</span>
              <del class="text-[#888]">$1120</del></p>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>