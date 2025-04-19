<script setup>
import category_image from "@/assets/images/cat_phone.png";
import { ref, onMounted, computed } from "vue";

const categories = ref([]);
const visibleCount = ref(6);

onMounted(async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();
  categories.value = data;
});

// Split categories into two parts
const initialCategories = computed(() => categories.value.slice(0, visibleCount.value));
const slidingCategories = computed(() => categories.value.slice(visibleCount.value));
</script>

<template>
  <section>
    <div class="container mx-auto border-t border-[#999] border-b border-[#999] px-4 overflow-hidden pb-20 mb-17">
      <div class="pt-20">
        <h3 class="text-[28px] md:text-[36px] font-semibold leading-12 font-inter text-[#000000]">
          Browse By Category
        </h3>
      </div>
      <!-- Sliding others -->
      <div class="relative mt-10 overflow-hidden h-[170px]">
        <div
            class="flex gap-4 animate-slide whitespace-nowrap"
            :style="{ animationDuration: '20s' }"
        >
          <div
              v-for="cat in categories"
              :key="cat + Math.random()"
              class="group min-w-[150px] border border-[#999] rounded-md p-4 text-center flex-shrink-0 hover:shadow transition"
          >
            <img :src="category_image" alt="Category" class="w-full h-[80px] object-contain mb-2 transition group-hover:scale-110" />
            <h4 class="text-sm font-medium text-[#000] capitalize">{{ cat.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-slide {
  animation-name: slide;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>
