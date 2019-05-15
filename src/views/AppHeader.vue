<template>
  <div>
    <v-toolbar app dark class="primary">
      <v-toolbar-title>
        <v-icon v-html="'supervisor_account'"></v-icon>
        VueJS APIs Example
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/">
          <v-icon v-html="'list_alt'"></v-icon>
          Новости
        </v-btn>
        <v-btn flat to="/holiday">
          <v-icon v-html="'today'"></v-icon>
          Выходные
        </v-btn>
        <v-btn flat to="/author">
          <v-icon v-html="'account_circle'"></v-icon>
          Автор
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>
