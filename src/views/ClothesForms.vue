<template>
  <div
  class="d-flex justify-center align-center flex-column"
  >
    <span
    class="text-h4 mt-16"
    >Roupas</span>

    <v-card
    class="mt-4"
    color="grey darker-1"
    width="35%"
    >
      <v-card-text>
        <form>
          
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="types"
                label="Tipo"
                solo
              ></v-select>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="sizes"
                label="Tamanho"
                solo
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="12"
            >
              <v-select
                :items="gender"
                label="Gênero"
                solo
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="status"
                label="Estado"
                solo
              ></v-select>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Quantidade"
                placeholder="Quantidade em Números"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
        </form>
      </v-card-text>

      <v-card-actions
      class="d-flex justify-space-around"
      >
          <v-btn
          color="error"
          class="mb-4"
          >
          Cancelar
          </v-btn>

          <v-btn
          color="primary"
          >
          Salvar
          </v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
export default {
  name: 'Clothes',
  data: () =>  ({
    sizes: [ 'PP', 'P', 'M', 'G', 'GG' ],
    types: [ 'Inverno', 'Verão' ],
    gender: [ 'Masculino', 'Feminino', 'Agênero' ],
    status: [ 'Nova', 'Usada' ],
  })
}
</script>