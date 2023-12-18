<script>
import {getContacts} from "@/api";

export default {
  name: "Contacts",
  data() {
    return {
      contacts: [],
    }
  },
  methods: {
    filteredContacts(type) {
      return this.contacts.filter(contact => contact.type === type);
    },
  },
  mounted() {
    getContacts().then(response => this.contacts = response)
  }
}
</script>

<template>
  <section>
    <h2>Контакты</h2>
   <div class="contacts">
    <div>
      <div class="contacts__head">
        <i class="fas fa-phone"></i>
        <h3>Телефоны</h3>
      </div>
      <ul>
        <li v-for="phoneContact in filteredContacts('phone')" :key="phoneContact.id">
          {{ phoneContact.data }}
        </li>
      </ul>
    </div>
    <div>
      <div class="contacts__head">
        <i class="fa-solid fa-envelope-open-text"></i>
        <h3>Email</h3>
      </div>
      <ul>
        <li v-for="emailContact in filteredContacts('email')" :key="emailContact.id">
          {{ emailContact.data }}
        </li>
      </ul>
    </div>
    </div>
    <div class="contacts__content">
    <div>
      Юридическая информация
    </div>
    <div>daskhbnv dvabshmf ask;h nfjkhlash.b vjl,hasbnhgkabsnkjhlfbaskhhofjaskhubf vjlbakhfjasbnfgvasbnsavsnjgfvnasjvggbh</div>
  </div>
  </section>
</template>

<style scoped lang="scss">
 .contacts {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;

  &__head {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  i {
    margin-right: 8px;
    font-size: 24px;
  }

  h3 {
    font-size: 18px;
    margin: 0;
  }
}
 }


h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
  font-size: 16px;
}
</style>