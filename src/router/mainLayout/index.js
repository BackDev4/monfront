import HomePage from "@/views/HomePage.vue";
import Services from "@/components/views/home/Services.vue";

export default [
    {
        path: '',
        component: HomePage,
    },
    {
      path: '/services',
      component: Services,
    },
]