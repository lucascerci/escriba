<template>
    <v-card class="py-5 px-10">
        <div>
            <v-table density="compact">
                <thead>
                    <tr>
                        <th class="text-left">
                            Produto
                        </th>
                        <th class="text-left">
                            Valor
                        </th>
                        <th class="text-left">
                            Quantidade
                        </th>
                        <th class="text-left">
                            Subtotal
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in items"
                        :key="item.name"
                    >
                        <td>{{ item.produto.descricao }}</td>
                        <td>{{ formatBrl(item.valor) }}</td>
                        <td>{{ item.quantidade }}</td>
                        <td>{{ formatBrl(item.subtotal) }}</td>
                    </tr>
                </tbody>
          </v-table>
          <v-card-actions class="d-flex justify-between mt-10">
              <v-spacer></v-spacer>
              <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="$emit('close-items-modal')"
              >
                  Fechar
              </v-btn>
          </v-card-actions>
        </div>
    </v-card>
</template>

<script>
  import { formatBRL } from '@/plugins/utils'
  export default {
    props: ['items'],
    data() {
        return {
            itemsInside: []
        }
    },
    watch: {
        items (newValue) {
            this.itemsInside = newValue
        }
    },
    methods: {
        formatBrl (value) {
            return formatBRL(value)
        }
    },
  }
</script>