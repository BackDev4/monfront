import HomePage from "@/views/HomePage.vue";
import Reviews from "@/views/Reviews.vue";

export default [
    {
        path: '/',
        component: HomePage,
    },
    {
      path: 'reviews',
      component: Reviews,
    }
]