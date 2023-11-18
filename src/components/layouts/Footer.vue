<script>
export default {
  name: "Footer"
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body">
        <div class="footer__up">
          <div class="footer__contact-info">
            <div class="footer__logo" @click="$router.push('/')">
<!--              <LogoIcon/>-->
            </div>

            <!--            <div class="footer__contacts">-->
            <!--              <a class="footer__contact" :href="`tel:${contacts.contactphone?.phone}`">-->
            <!--                {{ contacts.contactphone?.phone }}-->
            <!--              </a>-->
            <!--              <a class="footer__contact" :href="`mailto:${contacts.email}`">-->
            <!--                {{ contacts.email }}-->
            <!--              </a>-->
            <!--            </div>-->
          </div>
          <!--          <nav class="footer__info footer__info_mt-30">-->
          <!--            <div class="footer__item">-->
          <!--              <ul>-->
          <!--                <li-->
          <!--                    v-for="category in categories"-->
          <!--                    :key="category.id"-->
          <!--                    @click.stop="$router.push('/category/' + category.slug)"-->
          <!--                >-->
          <!--                  <span>{{ category.name }}</span>-->

          <!--                  <ul>-->
          <!--                    <li-->
          <!--                        v-for="subcategory in category.subcategories"-->
          <!--                        :key="subcategory.id"-->
          <!--                        @click.stop="$router.push(`/category/${category.slug}/${subcategory.slug}`)"-->
          <!--                    >-->
          <!--                      {{ subcategory.name }}-->

          <!--                      <ul>-->
          <!--                        <li-->
          <!--                            v-for="service in subcategory.item"-->
          <!--                            :key="service.id"-->
          <!--                            @click.stop="$router.push(`/category/${category.slug}/${subcategory.slug}/${service.slug}`)"-->
          <!--                        >{{ service.name }}-->
          <!--                        </li>-->
          <!--                      </ul>-->
          <!--                    </li>-->
          <!--                  </ul>-->
          <!--                </li>-->
          <!--              </ul>-->
          <!--            </div>-->
          <!--            <div class="footer__item">-->
          <!--              <ul>-->
          <!--                <li>-->
          <!--                  <span @click="$router.push(getSecondNav.path)">{{ getSecondNav.title }}</span>-->

          <!--                  <ul>-->
          <!--                    <li-->
          <!--                        v-for="link in getSecondNav.dropdown"-->
          <!--                        :key="link.id"-->
          <!--                        @click="$router.push(link.path)"-->
          <!--                        v-show="!link?.hide"-->
          <!--                    >{{ link.name }}-->
          <!--                    </li>-->
          <!--                  </ul>-->
          <!--                </li>-->
          <!--              </ul>-->
          <!--            </div>-->
          <!--          </nav>-->
        </div>
        <div class="footer__line"/>
        <div class="footer__down">
          <div class="footer__down-up">
            <div class="footer__site-title">Установка памятников 2023</div>
          </div>
          <div class="footer__down-license">Лицензия № 0000000 от 11.11.2023г</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/scss/footer";
</style>