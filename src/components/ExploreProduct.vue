<script setup>
import Explore_product_image from "@/assets/images/new-product.png";
import {ref, onMounted, computed} from "vue";
const Explore_products = ref([]);
const length = ref(8);

onMounted(async () => {
  const response = await fetch("https://dummyjson.com/products?limit=50");
  const data = await response.json();
  Explore_products.value = data.products;
});

const loadMore = () => {
  if (length.value >= Explore_products.value.length) return;
  length.value += 8;
};

const allLoaded = computed(() => {
  return length.value >= Explore_products.value.length;
});

const loadedProducts = computed(() => {
  return Explore_products.value.slice(0, length.value);
});


</script>

<template>
  <section>
    <div class="container">
      <div class="pb-10 text-center">
        <h3 class="text-[36px] font-semiBold leading-12 font-inter text-[#000000]">Explore Product</h3>
      </div>
      <div class="flex pb-[118px] gap-x-[30px] gap-y-[60px] flex-wrap">
        <div class="w-[23%] group" v-for="product in loadedProducts" :key="product">
          <div class="bg-[#f5f5f5] py-9 px-10 relative rounded-[4px]">
            <img :src="product.images" alt="New Product" class="w-full group-hover:treansition-all group-hover:scale-110 duration-300">
            <span class="bg-[#DB4444] px-3 py-1 text-[#fafafa] font-poppins absolute left-[12px] top-[12px] rounded-[4px]">-{{Math.round(product.discountPercentage)}}%</span>
          </div>
          <div class="pt-4">
            <h4 class="text-[16px] font-medium leading-7 font-poppins text-[#000000]">{{ product.title }}</h4>
            <p class="pt-2 leading-6 text-[16px] font-poppins space-x-3">
              <span class="text-[#DB4444]">${{Math.round(product.price - product.price * product.discountPercentage/100)}}</span>
              <del class="text-[#888]">${{Math.round(product.price)}}</del></p>
            <div class="flex align-center pt-2 items-center space-x-2">
              <p class="text-[#FFAD33] text-[14px] space-x-1">
                <i v-for="star in 5" class="fa-solid fa-star"></i>
              </p>
              <p class="text-[#555] font-semiBold text-[14px] font-poppins pt-[2px]">(88)</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center pb-[110px]">
        <a  v-if="!allLoaded" @click="loadMore" class="bg-[#DB4444] text-[#fafafa] px-12 py-4 rounded-[4px] font-poppins text-[16px] font-semiBold">View All Products</a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>