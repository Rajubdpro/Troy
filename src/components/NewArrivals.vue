<script setup>
import new_product from "@/assets/images/new-product.png";

defineProps({
  title: {
    type: String,
    default: "New Arrivals",
  },
  items: {
    type: Array,
    default: () => [
      {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        oldPrice: 160,
        discount: 40,
        rating: 4.5,
        imageUrl: new_product,
      },
      // Add more products as needed
    ],
  },
  className1: {
    type: String,
    default: "text-[36px] font-semiBold leading-12 font-inter text-[#000000]",
  },
  className2: {
    type: String
  },
});
</script>

<template>
<section>
  <div class="container">
   <div class="pb-10 flex justify-between">
     <h3 class="text-[36px] font-semiBold leading-12 font-inter text-[#000000]">{{title}}</h3>
       <a href="#" :class="className2" class="bg-[#DB4444] text-[#fafafa] px-12 py-4 rounded-[4px] font-poppins text-[16px] font-semiBold">View All</a>
   </div>
    <div class="flex pb-[118px] gap-x-[30px]">
      <div class="w-1/4 group" v-for="product in items" :key="product">
        <div class="bg-[#f5f5f5] py-9 px-10 relative rounded-[4px]">
          <img :src="product.image" alt="New Product" class="w-full group-hover:treansition-all group-hover:scale-110 duration-300">
          <span class="bg-[#DB4444] px-3 py-1 text-[#fafafa] font-poppins absolute left-[12px] top-[12px] rounded-[4px]">-{{product.discount}}</span>
        </div>
        <div class="pt-4">
          <h4 class="text-[16px] font-medium leading-7 font-poppins text-[#000000]">{{product.name}}</h4>
          <p class="pt-2 leading-6 text-[16px] font-poppins space-x-3">
            <span class="text-[#DB4444]">${{product.Discount_Price}}</span>
            <del class="text-[#888]">${{product.price}}</del></p>
            <div class="flex align-center pt-2 items-center space-x-2">
              <p class="text-[#FFAD33] text-[14px] space-x-1">
                <i v-for="star in 5" class="fa-solid fa-star"></i>
              </p>
              <p class="text-[#555] font-semiBold text-[14px] font-poppins pt-[2px]">(88)</p>
            </div>
        </div>
      </div>
    </div>
    <div class="text-center pb-[110px]" :class="className1">
      <a href="#" class="bg-[#DB4444] text-[#fafafa] px-12 py-4 rounded-[4px] font-poppins text-[16px] font-semiBold">View All Products</a>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>