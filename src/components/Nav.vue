<script setup>
import logo from "@/assets/images/logo.png";
</script>

<template>
<header class="bg-[#000000] py-3">
<div class="container">
  <div CLASS="flex">
   <div class="w-[70%] text-[#ffffff] pt-[10px] text-right">
     <p class="text-[14px] text-[#FAFAFA] leading-5 font-normal font-poppins">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" class="font-bold pl-3 underline"> ShopNow</a></p>
   </div>
    <div class="w-[30%] text-right">
      <select class="bg-[#000000] text-[#ffffff] rounded-md p-2 outline-none">
        <option value="">English</option>
        <option value="">Bangla</option>
      </select>
    </div>
  </div>
</div>
</header>
  <nav class="pt-10 pb-4 border-b-[1px] border-[#999]">
    <div class="container">
      <div class="flex">
        <div class="w-[20%] pt-[10px]">
          <a href="http://localhost:5173/">
            <img :src="logo" alt="Logo">
          </a>
        </div>
        <div class="w-[40%] pt-[10px]">
          <ul class="flex space-x-12">
            <li class="leading-5 text-[#000000] hover:border-b-1 pb-1 border-[#333] text-[16px] font-poppins font-normal"><a href="#">Home</a></li>
            <li class="leading-5 text-[#000000] hover:border-b-1 pb-1 border-[#333] text-[16px] font-poppins font-normal"><a href="#">Contact</a></li>
            <li class="leading-5 text-[#000000] hover:border-b-1 pb-1 border-[#333] text-[16px] font-poppins font-normal"><a href="#">About</a></li>
            <li class="leading-5 text-[#000000] hover:border-b-1 pb-1 border-[#333] text-[16px] font-poppins font-normal "><a href="#">Sign Up</a></li>
          </ul>
        </div>
        <div class="w-[23%]">
          <form action="" class="relative">
            <input type="text" placeholder="What are you looking for?" class="w-full px-5 py-[10px] bg-[#F5F5F5] rounded-md pl-3 outline-none">
            <button type="submit" class="absolute right-2 top-[50%] -translate-[50%]"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
        <div class="w-[17%]">
          <div class="flex space-x-4 justify-end pt-2">
            <p><i class="fa-regular fa-heart text-[18px] text-[#000] hover:bg-[#DB4444] w-[32px] h-[32px] rounded-full text-center hover:text-white !leading-8"></i></p>
            <p class="relative"><i class="fa-solid fa-cart-shopping text-[18px] text-[#000] hover:bg-[#DB4444] w-[32px] h-[32px] rounded-full text-center hover:text-white !leading-8"></i>
            <span class="bg-[#DB4444] text-white rounded-full inline-block text-center !reading-[16px] w-[16px] text-[12px] font-poppins h-[16px] top-0 right-0 absolute">2</span>
            </p>
            <p><i class="fa-solid fa-user text-[18px] text-[#000] hover:bg-[#DB4444] w-[32px] h-[32px] rounded-full text-center hover:text-white !leading-8"></i></p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>