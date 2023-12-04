<template>
  <main>
    <div>
      <router-link to="/create">+ Add a new tank station</router-link>
      <div>
        <button @click="setFilter('all')">All</button>
        <button v-for="(fuelType, index) in tankStationStore.fuelTypes" :key="index" 
          @click="setFilter(fuelType.id)">{{fuelType.name}}</button>
      </div>
      <ul>
        <li v-for="(tankStation, index) in selectedTankStations" :key="index">
          <h3>Name: {{ tankStation.name }}</h3>
          <div>
            <h3>Fuel Prices:</h3>
            <ul>
              <template v-for="(fuelType, index) in tankStationStore.fuelTypes" :key="index">
                <li v-if="tankStation.fuelPrices[fuelType.id] !== undefined">
                  {{ fuelType.name }}: € {{ tankStation.fuelPrices[fuelType.id] }}
                </li>
              </template>
            </ul>
          </div>
          <div>
            <h3>Address:</h3>
            <span>{{ tankStation.address.street }} {{ tankStation.address.unitNumber }} {{ tankStation.address.zipCode
            }}</span>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { useTankStationStore } from '../stores/tankStationStore';

export default {
  data() {
    return {
      tankStationStore: useTankStationStore(),
      selectedFilter: "all",
    }
  },
  methods: {
    setFilter(fuelType) {
      this.selectedFilter = fuelType;
    },
  },
  computed: {
    selectedTankStations: function () {
      return this.selectedFilter === "all" ? this.tankStationStore.tankStations : this.tankStationStore.filterByFuelType(this.selectedFilter);
    }
  }
}

</script>
