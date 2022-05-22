<template>
  <div
  class="d-flex justify-center align-center flex-column"
  >
    <span
    class="text-h4 mt-16"
    >Comidas</span>

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
              sm="12"
            >
              <v-text-field
                label="Nome"
                placeholder="Nome da comida"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Quantidade"
                placeholder="Quantidade em unidades"
                solo
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Peso"
                placeholder="Peso em Kg"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="12"
            >
              <v-text-field
                label="Descrição"
                placeholder="Descreva o produto"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="dados"
                label="Perecível"
                solo
              ></v-select>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Validade"
                placeholder="Insira a data de validade"
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
  data: () =>  ({
    dados: ['Sim', 'Não'],
  })
}
</script>