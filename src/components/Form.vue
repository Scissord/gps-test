<template>
  <div class="q-pa-md">
    <div class="q-gutter-md flex column items-center">
      <div class="first_input">
        <q-item-label class="labels">От:</q-item-label>
        <div class="q-pa-md" style="max-width: 300px">
          <q-input filled v-model="fromDateString">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="fromDateString" mask="YYYY-MM-DD HH:mm:ss">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="fromDateString" mask="YYYY-MM-DD HH:mm:ss" with-seconds format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="second_input">
        <q-item-label class="labels">До:</q-item-label>
        <div class="q-pa-md" style="max-width: 300px">
          <q-input filled v-model="toDateString">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="toDateString" mask="YYYY-MM-DD HH:mm:ss">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="toDateString" mask="YYYY-MM-DD HH:mm:ss" with-seconds format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
    </div>
    <q-btn class="btn" type="submit" @click="fetchRides">Submit</q-btn>
  </div>
  <custom-table v-if="tableVisible" :columns="columns" :rows="rows"/>
</template>

<script>
import { ref, computed } from "vue";
import useRides from "@/hooks/useRides";
import CustomTable from '@/components/Table.vue'
export default {
  name: 'custom-form',
  components: {
    CustomTable,
  },
  data () {
    return {};
  },
  setup() {
    const columns = ref([]);
    const rows = ref([]);
    const fromDateString = ref('2023-08-14 00:00:00')
    const toDateString = ref('2023-08-14 23:59:59')
    const fromDateNumber = computed(() => {
      const timestamp = new Date(fromDateString.value);
      return Math.floor(timestamp / 1000);
    });
    const toDateNumber = computed(() => {
      const timestamp = new Date(toDateString.value);
      return Math.floor(timestamp / 1000);
    });

    const { tableVisible, resultOfRides, fetchingRides } = useRides(fromDateNumber, toDateNumber)
    const fetchRides = () => {
      fetchingRides().then(() => {
        if (resultOfRides.value && resultOfRides.value.schema && resultOfRides.value.data) {
          columns.value = resultOfRides.value.schema.fields.map(field => ({
            name: field.name,
            label: field.name.toUpperCase(),
            field: field.name,
          }));

          rows.value = resultOfRides.value.data.map(item => {
            const row = {};
            columns.value.forEach(column => {
              row[column.field] = item[column.field];
            });
            return row;
          });
        }
      });
    };

    return {
      tableVisible,
      fromDateString,
      toDateString,
      columns,
      rows,
      fetchRides,
    }
  },
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
}

.first_input {
  display: flex;
  align-items: center;
}

.second_input {
  display: flex;
  align-items: center;
}

.labels {
  margin-right: 10px;
}

.btn {
  margin-top: 15px;
}

</style>