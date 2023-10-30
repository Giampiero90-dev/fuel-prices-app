import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTankStationStore = defineStore('tankStationStore', {
  state: () => ({
    tankStations: [
          { 
            name: "Q8", 
            fuelPrices: {
                euro95: "2.05",
                diesel: "1.8",
                gas: "0.75",
            }, 
            address: "De flinessesstraat 20, 1125VB"
          },
          { 
            name: "Esso", 
            fuelPrices: {
                euro95: "2.05",
                diesel: "1.8",
                gas: "0.75",
            }, 
            address: "De flinessesstraat 20, 1125VB"
          },          { 
            name: "Shell", 
            fuelPrices: {
                euro95: "2.05",
                diesel: "1.8",
                gas: "0.75",
            }, 
            address: "De flinessesstraat 20, 1125VB"
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
