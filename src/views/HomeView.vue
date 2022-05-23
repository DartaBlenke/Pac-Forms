<template>
<div class="d-flex flex-column">
  <h1
  class="mt-9 ml-16 mb-9"
  >Lista de Produtos</h1>
  <v-data-table
    :headers="headers"
    :items="products"
    :items-per-page="5"
    class="mx-14"
  >
  </v-data-table>
</div>
</template>

<script>
  export default {
    name: 'Home',
    model: {},

    data: () => {
      return {
        headers: [
          { text: 'Produto', value: 'produto' },
          { text: 'Quantidade', value: 'quantidade' },
          { text: 'Tipo', value: 'tipo' },
          { text: 'Média', value: 'media' },
          { text: 'Perecível', value: 'perecivel' },
          { text: 'Previsão', value: 'previsao' },
          { text: 'Status', value: 'status'}
        ],
        products: [
          {
            produto: 'Leite',
            quantidade: 3,
            tipo: 'Comprado',
            media: '2L / dia',
            perecivel: 'Sim',
            previsao: '24/05/22',
            status: 'Acabando'
          },
          {
            produto: 'Leite',
            quantidade: 3,
            tipo: 'Comprado',
            media: '2L / dia',
            perecivel: 'Sim',
            previsao: '24/05/22',
            status: 'Acabando'
          },
          {
            produto: 'Leite',
            quantidade: 3,
            tipo: 'Comprado',
            media: '2L / dia',
            perecivel: 'Sim',
            previsao: '24/05/22',
            status: 'Acabando'
          },
        ],
      }
    },
  }
</script>
