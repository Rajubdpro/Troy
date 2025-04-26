<template>
  <Banner></Banner>
  <NewArrivals title="New Arrivals" className2="hidden" :items="newArrivals"></NewArrivals>
  <Categories></Categories>
  <NewArrivals title="Best Selling Products" className1="hidden" :items="best_selling"></NewArrivals>
  <ExploreProduct></ExploreProduct>
</template>


<script setup>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
import Banner from "@/components/Banner.vue";
import NewArrivals from "@/components/NewArrivals.vue";
import Categories from "@/components/Categories.vue";
import ExploreProduct from "@/components/ExploreProduct.vue";

const newArrivals = [
  {
    id: 1,
    name: "HP Laptop",
    price: 1500,
    Discount_Price: 1000,
    discount: 40,
    rating: 4.5,
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "Desktop Computer",
    price: 900,
    Discount_Price: 500,
    discount: 40,
    rating: 4.5,
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Mobile Phone",
    price: 800,
    Discount_Price: 500,
    discount: 50,
    rating: 4.5,
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 700,
    Discount_Price: 500,
    discount: 40,
    rating: 4.5,
    image: "https://placehold.co/600x400",
  },
];

const best_selling = [
  {
    id: 1,
    name: "HP Laptop Pro",
    price: 1500,
    Discount_Price: 1000,
    discount: 60,
    rating: 4.5,
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "Desktop Computer",
    price: 900,
    Discount_Price: 500,
    discount: 10,
    rating: 4.5,
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Mobile Phone",
    price: 800,
    Discount_Price: 500,
    discount: 44,
    rating: 4.5,
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 700,
    Discount_Price: 500,
    discount: 70,
    rating: 4.5,
    image: "https://placehold.co/600x400",
  }
];

</script>