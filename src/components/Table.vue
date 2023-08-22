<template>
  <div class="q-pa-md">
    <q-table
        flat bordered
        :rows="rows"
        :columns="columns"
        row-key="Нач. дата"
        :separator="separator"
        selection="single"
        v-model:selected="selected"
        @update:selected="fetchCoordinates"
    />
    <custom-map v-if="mapVisible" :coords="toMap"/>
  </div>
</template>

<script>
import {computed, ref} from 'vue';
import CustomMap from "@/components/Map.vue";
import useCoordinates from "@/hooks/useCoordinates";
export default {
  name: 'custom-table',
  components: {CustomMap},
  props: {
    columns: {
      type: Array,
    },
    rows: {
      type: Array,
    },
  },
  setup() {
    const separator = ref('cell');
    const selected = ref([]);
    const fromDateString = ref('14.08.2023, 08:15:05');
    const toDateString = ref('14.05.2023, 08:43:09');
    const fromDateNumber = computed(() => {
      const dateParts = fromDateString.value.split(/[\s.,:]+/);
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10);
      const year = parseInt(dateParts[2], 10);
      const hours = parseInt(dateParts[3], 10);
      const minutes = parseInt(dateParts[4], 10);
      const seconds = parseInt(dateParts[5], 10);
      const timestamp = new Date(year, month - 1, day, hours, minutes, seconds).getTime() / 1000;
      return Math.floor(timestamp);
    });
    const toDateNumber = computed(() => {
      const dateParts = toDateString.value.split(/[\s.,:]+/);
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10);
      const year = parseInt(dateParts[2], 10);
      const hours = parseInt(dateParts[3], 10);
      const minutes = parseInt(dateParts[4], 10);
      const seconds = parseInt(dateParts[5], 10);
      const timestamp = new Date(year, month - 1, day, hours, minutes, seconds).getTime() / 1000;
      return Math.floor(timestamp);
    });
    const toMap = ref([])

    const { mapVisible, decodedPolyline, fetchingCoordinates } = useCoordinates(fromDateNumber, toDateNumber);
    const fetchCoordinates = async () => {
      if (selected.value.length > 0) {
        fromDateString.value = selected.value[0]['Нач. дата'];
        toDateString.value = selected.value[0]['Кон. дата'];
        await fetchingCoordinates();
        toMap.value = decodedPolyline.value;
      }
    };

    return {
      mapVisible,
      fetchCoordinates,
      toMap,
      selected,
      separator,
    };
  },
};
</script>

<style scoped>
</style>
