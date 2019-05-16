<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex text-xs-center>
        <h3>Данные из открытого источника - opendatabot.com</h3>
        <v-alert :value="true" type="warning" v-if="error">
          {{error}}
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout align-center>
      <v-flex xs12 sm6 offset-sm3 d-flex>
        <v-text-field
            label="ФИО"
            v-model="localPib"
        ></v-text-field>
        <v-btn @click="chengePib" large color="info" :disabled="!localPib">Поиск в базе</v-btn>
      </v-flex>
    </v-layout>

    <v-layout align-center>
      <v-flex xs12>
        <v-data-table v-if="aliments" :headers="headers" :items="aliments" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.full_name }}</td>
            <td>{{ props.item.birth_date }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      headers: [
        { text: "ФИО", value: "full_name" },
        { text: "Дата рождения", value: "birth_date" },
      ],
      localPib: null
    };
  },
  computed: {
    ...mapGetters('aliment', [
      'pib',
      'aliments',
      'error'
    ])
  },
  methods: {
    chengePib() {
      this.$store.dispatch("aliment/SET_PIB", this.localPib, { root: true });
    }
  }
};
</script>
