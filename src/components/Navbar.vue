<template>
  <v-app-bar
    color="primary"
    elevation="4"
    min-height="90px"
    max-height="90px"
    class="d-flex justify-space-around"
  >
    <v-btn
    to="/"
    class="ml-10 mr-10 mt-5">
      <v-icon>
        mdi-home
      </v-icon>
    </v-btn>

    <v-btn
    to="/Comidas"
    class="ml-10 mr-10 mt-5">
    Comidas
    </v-btn>

    <v-btn
    to="/Brinquedos"
    class="ml-10 mr-10 mt-5">
    Brinquedos
    </v-btn>
    
    <v-btn
    to="/Roupas"
    class="ml-10 mr-10 mt-5">
    Roupas
    </v-btn>
  </v-app-bar>

</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>