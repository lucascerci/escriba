import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import CustomDataTable from '@/components/CustomDataTable.vue'

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('displays message', () => {
  const wrapper = mount({
    template: '<v-layout><custom-data-table></custom-data-table></v-layout>'
  }, {
    props: {
      'headers': [
        {
          align: 'center',
          key: 'id',
          sortable: false,
          title: 'ID',
        },
        { align: 'center', title: 'Descrição', key: 'descricao', sortable: false, },
        { align: 'center', title: 'Valor Unitario', key: 'valoUnitario', sortable: false, },
      ],
      items: [
        {
          "id": 1,
          "descricao": "produto 1",
          "valoUnitario": 10
        },
        {
          "id": 2,
          "descricao": "produto 2",
          "valoUnitario": 8.88
        }
      ],
      itemsPerPage: 10
    },
    global: {
      components: {
        CustomDataTable,
      },
      plugins: [vuetify],
    }
  })

  
  // Check if the component exists and is visible
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.isVisible()).toBe(true);
})