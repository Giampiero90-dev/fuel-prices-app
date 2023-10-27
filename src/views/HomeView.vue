<template>
  <main>
    <div>
      <h2>Tank stations and fuel prices</h2>
      <router-link to="/">+ Add a new tank station</router-link>
      <ul>
        <li v-for="(tankStation, index) in useTankStationStore.tankStations" :key="index">
          <h3>{{ tankStation.title }}</h3>
          <div>{{ tankStation.gasPrices }}</div>
          <div>{{ tankStation.longitude }}</div>
          <div>{{ tankStation.latitude }}</div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { useTankStationStore } from '../stores/counter';

export default {
  data() {
    return {
      useTankStationStore: useTankStationStore(),
    }
  }
}

</script>
