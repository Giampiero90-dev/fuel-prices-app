import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTankStationStore = defineStore('tankStationStore', {
  state: () => ({
    tankStations: [
          { 
            name: "Q8", 
            gasPrices: {
                benzine: "2.05",
                diesel: "1.8",
                gas: "0.75",
            }, 
            longitude: "123456",
            latitude: "3421234",
          },
          { 
            name: "Q8", 
            gasPrices: {
                benzine: "2.05",
                diesel: "1.8",
                gas: "0.75",
            }, 
            longitude: "123456",
            latitude: "3421234",
          },          { 
            name: "Q8", 
            gasPrices: {
                benzine: "2.05",
                diesel: "1.8",
                gas: "0.75",
            }, 
            longitude: "123456",
            latitude: "3421234",
          },
      ]
  }),
  actions: {
      create(tankStation) {
          this.tankStations.push({
              ...tankStation,
          })
      }
  }
})
