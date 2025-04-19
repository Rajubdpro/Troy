<script setup>
import logo from "@/assets/images/White_Logo.png";
import scan from "@/assets/images/Qr-Code.png";
import playStore from "@/assets/images/GooglePlay.png";
import appStore from "@/assets/images/AppStore.png";
</script>

<template>
  <footer class="bg-[#000000] pt-[80px] pb-[100px]">
    <div class="container">
      <div class="flex">
       <div class="w-[20%]">
        <a href="http://localhost:5173/">
          <img :src="logo" alt="Logo">
        </a>
         <h4 class="text-[20px] font-medium font-poppins text-[#FAFAFA] pt-6 leading-7">Subscribe</h4>
         <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-6 leading-6">Get 10% off your first order</p>
       </div>
        <div class="w-[20%]">
          <h4 class="text-[20px] font-medium font-poppins text-[#FAFAFA] leading-7">Support</h4>
          <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-6 leading-6"><a href="#">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></p>
          <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-4 leading-6"><a href="#">exclusive@gmail.com</a></p>
          <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-4 leading-6"><a href="#">01700000000</a></p>
        </div>
        <div class="w-[20%]">
          <h4 class="text-[20px] font-medium font-poppins text-[#FAFAFA] leading-7">Account</h4>
          <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-6 leading-6"><a href="#">My Account</a></p>
          <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-4 leading-6"><a href="#">Login / Register</a></p>
          <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-4 leading-6"><a href="#">Cart</a></p>
          <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-4 leading-6"><a href="#">Wishlist</a></p>
        </div>
        <div class="w-[20%]">
          <h4 class="text-[20px] font-medium font-poppins text-[#FAFAFA] leading-7">Quick Link</h4>
          <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-6 leading-6"><a href="#">Privacy Policy</a></p>
          <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-4 leading-6"><a href="#">Terms Of Use</a></p>
          <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-4 leading-6"><a href="#">FAQ</a></p>
          <p class="text-[16px] font-normal font-poppins text-[#FAFAFA] pt-4 leading-6"><a href="#">Contact</a></p>
        </div>
        <div class="w-[20%]">
          <h4 class="text-[20px] font-medium font-poppins text-[#FAFAFA] leading-7">Download App</h4>
          <div class="flex">
            <div>
              <img :src="scan" alt="Scan Code" class="pt-6">
            </div>
            <div class="flex flex-col space-y-[10px] pt-6 pl-4 items-center">
              <a href="#">
                <img :src="playStore" alt="Play Store"/>
              </a>
              <a href="#">
                <img :src="appStore" alt="App Store"/>
              </a>
            </div>
            </div>
          <div>
            <div class="flex space-x-6 pt-6">
              <a href="#"><i class="fa-brands fa-facebook-f text-[#FAFAFA] text-[20px]"></i></a>
              <a href="#"><i class="fa-brands fa-twitter text-[#FAFAFA] text-[20px]"></i></a>
              <a href="#"><i class="fa-brands fa-instagram text-[#FAFAFA] text-[20px]"></i></a>
              <a href="#"><i class="fa-brands fa-pinterest text-[#FAFAFA] text-[20px]"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <section class="bg-[#000000] pt-4 pb-6 border-t-[1px] border-[#999]">
    <div class="bg-[#000000] text-center">
      <p class="text-[16px] font-normal font-poppins text-[#999]">Copyright © 2025, All Rights Reserved</p>
    </div>
  </section>
</template>

<style scoped>

</style>