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
        address: {
          street: "Kerkstraat",
          unitNumber: "20",
          zipCode: "1011BH",
        },
      },
      {
        name: "Esso",
        fuelPrices: {
          euro95: "2.05",
          diesel: "1.8",
          gas: "0.75",
        },
        address: {
          street: "Linneusstraat",
          unitNumber: "45",
          zipCode: "1021RL",
        },
      }, {
        name: "Shell",
        fuelPrices: {
          euro95: "2.05",
          diesel: "1.8",
          gas: "0.75",
        },
        address: {
          street: "Koningsplain",
          unitNumber: "53",
          zipCode: "1064RL",
        },
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
