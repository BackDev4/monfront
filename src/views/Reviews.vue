<template>
    <div class="reviews-page">
        <h1 class="reviews-page__title reviews-page__title_mb-20">Отзывы</h1>
        <div class="reviews-page__texts reviews-page__texts_mt-20">
            <div class="text-review" v-for="review in reviews.data">
                <div class="text-review__info">
                    <div class="text-review__name">{{ review.name }}</div>
                </div>

                <p class="text-review__text" v-html="review.content" />
            </div>

        </div>
    </div>
</template>
  
<script>

import reviews from "@/store/modules/reviews";
import { mapActions, mapState } from "vuex";

export default {
    name: "Reviews",
    methods: {
        ...mapActions('reviews', ['getReviews']),
    },
    computed: {
        ...mapState('reviews', ['reviews']),

        getPage() {
            return this.$route.query.page
        },

        getLinksReviews() {
            return this.reviews.links
                ?.slice(1, this.reviews.links.length - 1)
                .map(link => new Object({
                    ...link,
                    url: '/reviews?page=' + link.url.split('?page=')[1]
                }));
        },
        getPrevPageTextReviews() {
            const page = this.reviews.links?.[0].url?.split('?page=')[1]

            return page ? '/reviews?page=' + page : null
        },
        getNextPageTextReviews() {
            const page = this.reviews.links?.at(-1).url?.split('?page=')[1]
            return page ? '/reviews?page=' + page : null
        },
    },
    watch: {
        getPage() {
            this.getReviews(this.getPage)
        },
        activeReviewType() {
            this.$router.push('/reviews?page=1')
        }
    },
    mounted() {
        this.getReviews()
    }
}
</script>
  
<style scoped lang="scss">
.text-review {
    padding: 32px 32px;
    border-radius: 8px;
    background: linear-gradient(180deg, #FFFFFF 10.26%, rgba(255, 255, 255, 0) 100%);

    &__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__name {
        display: flex;
        align-items: center;
        padding-left: 20px;
        font-weight: 300;
        font-size: 24px;
        line-height: 32px;
        color: #211E1C;
        position: relative;

        &::before {
            content: '';
            display: inline-block;
            height: 4px;
            width: 32px;
            background-color: #24c8bc;
            transform: rotate(-90deg);
            position: absolute;
            left: -12px;
        }
    }

    &__date {
        font-weight: 400;
        font-size: 15px;
        line-height: 32px;
        color: #595450;
    }

    &__text {
        margin: 16px 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #211E1C;
    }
}

.reviews-page {
    &__title {
        &_mb-20 {
            margin-bottom: 20px;
        }
    }

    &__texts,
    &__videos {
        &_mt-20 {
            margin-top: 20px;
        }
    }

    &__texts {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    &__videos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
    }
}
</style>
  