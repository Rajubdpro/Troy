<!----------Start template here --------->
<template>
 <section class="pt-[100px] pb-[70px]">
   <div class="container">
     <div class="flex px-6 py-10 mb-10 shadow-box rounded-1 items-center">
       <div class="w-[18%]">
         <h3 class="text-[20px] font-regular leading-6 font-poppins text-[#000000]">Product</h3>
       </div>
       <div class="w-[32%] flex justify-center">
         <h3 class="text-[20px] font-regular leading-6 font-poppins text-[#000000]">Price</h3>
       </div>
       <div class="w-[32%] flex justify-center">
         <h3 class="text-[20px] font-regular leading-6 font-poppins text-[#000000]">Quantity</h3>
       </div>
       <div class="w-[18%] flex justify-end">
         <h3 class="text-[20px] font-regular leading-6 font-poppins text-[#000000]">Subtotal</h3>
       </div>
     </div>

  <!-- Cart Items -->
     <div  v-for="(cart, index) in carts" :key="cart" class="flex px-6 py-5 mb-5  shadow-box rounded-1 items-center">
       <div class="w-[18%] flex space-x-5 items-center">
          <img :src="cart.image" alt="Cart Image">
         <span class="text-[16px] font-regular font-poppins leading-6 text-[#000]">{{cart.name}}</span>
       </div>
       <div class="w-[32%] flex justify-center">
         <p class="text-[#000] text-[16px] font-regular leading-6 font-poppins">${{cart.price}}</p>
       </div>
       <div class="w-[32%] flex justify-center">
         <div class="border border-[#666] rounded-[4px] px-3 py-[8px] w-[72px] h-44px flex gap-[10px]">
           <input type="text" :value="cart.count" class="w-full text-center outline-none border-none fot-poppins text-[16px] font-regular leading-6 text-[#000]">
           <div class="h-full flex flex-col justify-center items-center space-y-2">
             <i @click="increment(index)" class="fa-solid fa-chevron-up text-[14px] !leading-[10px] cursor-pointer"></i>
             <i @click="decrement(index)" class="fa-solid fa-chevron-down text-[14px] !leading-[10px] cursor-pointer"></i>
           </div>
         </div>
       </div>
       <div class="w-[18%] flex justify-end">
         <h3 class="text-[20px] font-regular leading-6 font-poppins text-[#000000]">${{cart.price * cart.count}}</h3>
       </div>
     </div>
     <!--------return shop and update cart button-------->
      <div class="flex justify-between px-6 py-5 mb-5  shadow-box rounded-1 items-center">
        <div class="w-[25%] flex space-x-5 items-center">
          <a href="#" class="bg-[#DB4444] text-[#fafafa] px-12 py-4 rounded-[4px] font-poppins text-[16px] font-semiBold">Continue Shopping</a>
        </div>
        <div class="w-[50%] flex justify-center">
          <p class="text-[#000] text-[16px] font-regular leading-6 font-poppins">Total: ${{carts.reduce((acc, cart) => acc + (cart.price * cart.count), 0)}}</p>
        </div>
        <div class="w-[25%] flex justify-end">
          <button type="submit" class="bg-[#DB4444] text-[#fafafa] px-12 py-4 rounded-[4px] font-poppins text-[16px] font-semiBold">Update Cart</button>
        </div>
      </div>

      <!--------cart total and process checkout and payment option-------->
     <div class="cart_total flex justify-end text-center]">
       <div class="w-full max-w-md p-6 border border-gray-200 rounded-lg">
         <h2 class="text-xl font-poppins mb-4">Cart Total</h2>

         <div class="space-y-4 mb-6">
           <div class="flex justify-between items-center pb-2 border-b border-gray-100">
             <span class="text-gray-600">Subtotal:</span>
             <span class="font-medium">${{carts.reduce((acc, cart) => acc + (cart.price * cart.count), 0)}}</span>
           </div>

           <div class="flex justify-between items-center pb-2 border-b border-gray-100">
             <span class="text-gray-600">Shipping:</span>
             <span class="font-medium">Free</span>
           </div>

           <div class="flex justify-between items-center pt-2">
             <span class="text-gray-800 font-poppins">Total:</span>
             <span class="font-poppins">${{carts.reduce((acc, cart) => acc + (cart.price * cart.count), 0)}}</span>
           </div>
         </div>

         <Button class="w-70% flex justify-center !m-auto !rounded-[8px] bg-[#ea384c] hover:bg-[#d62d3f] text-white  py-4 px-12">Proceed to checkout</Button>
       </div>
     </div>

   </div>
 </section>
</template>

<script setup>
import cart_img from "@/assets/images/cart_img.png";
import cart_img2 from "@/assets/images/cart_img2.png";
import {ref} from "vue";
const carts = ref([
  {
    id: 1,
    name: "LCD Monitor",
    price: 900,
    image: cart_img,
    count: 1,
  },
  {
    id: 2,
    name: "Laptop",
    price: 1500,
    image: cart_img2,
    count: 1,
  },
  {
    id: 3,
    name: "Laptop",
    price: 500,
    image: cart_img2,
    count: 1,
  }
]);
const increment = (index) => {
  if (carts.value[index].count < 10) {
    carts.value[index].count++;
  }
  else {
    alert("You can only add up to 10 items");
  }
};
const decrement = (index) => {
  if (carts.value[index].count > 1) {
    carts.value[index].count--;
  }
};
</script>
<style>

</style>