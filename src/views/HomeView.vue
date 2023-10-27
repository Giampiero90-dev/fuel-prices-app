<template>
  <main>
    <div>
        <h2>Gas prices Overview</h2>
        <router-link to="/create">+ Add a new tank station</router-link>
        <ul>
            <li v-for="(tankStation, index) in useTankStationStore.tankStations." :key="index">
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
import TheWelcome from '../components/TheWelcome.vue'
import { useTankStationStore } from '../stores/counter';

export default {
  data() {
  return {
    useTankStationStore: useTankStationStore(),
  }
}
}

</script>
