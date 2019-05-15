<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex text-xs-center>
        <h3>Данные из открытого источника - newsapi.org</h3>
      </v-flex>
    </v-layout>
    <v-layout align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :value="country"
          :items="countries"
          @change="chengeCountry($event)"
          label="Страна"
          outline
        ></v-select>
      </v-flex>

      <v-flex xs12 sm6 d-flex>
        <v-select
          :value="category"
          :items="categoties"
          @change="chengeCategory($event)"
          label="Рубрика"
          outline
        ></v-select>
      </v-flex>
    </v-layout>

    <v-layout align-center>
      <v-flex xs12>
        <v-data-table v-if="news" :headers="headers" :items="news" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.source.name }}</td>
            <td>{{ props.item.title }}</td>
            <td>{{ props.item.author }}</td>
            <td>{{ props.item.publishedAt }}</td>
            <td>
              <a :href="props.item.url">
                <v-btn>Перейти на сайт</v-btn>
              </a>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("LOAD_NEWS");
  },
  data() {
    return {
      headers: [
        { text: "Источник", value: "source.name" },
        { text: "Заголовок", value: "title" },
        { text: "Автор", value: "author" },
        { text: "Дата публикации", value: "publishedAt" },
        { text: "Ссылка", value: "url" }
      ],
      countries: [
        { text: "Украина", value: "ua" },
        { text: "США", value: "us" },
        { text: "Германия", value: "de" }
      ],
      categoties: [
        { text: "Бизнес", value: "business" },
        { text: "Спорт", value: "sports" },
        { text: "Технологии", value: "technology" },
        { text: "Здоровье", value: "health" },
        { text: "Наука", value: "science" }
      ]
    };
  },
  computed: {
    category() {
      return this.$store.getters.getCategoryNews;
    },
    country() {
      return this.$store.getters.getCountryNews;
    },
    news() {
      return this.$store.getters.getNews;
    }
  },
  methods: {
    chengeCountry(country) {
      this.$store.dispatch("SET_COUNTRY_NEWS", country);
      this.$store.dispatch("LOAD_NEWS");
    },
    chengeCategory(category) {
      this.$store.dispatch("SET_CATEGORY_NEWS", category);
      this.$store.dispatch("LOAD_NEWS");
    }
  }
};
</script>
