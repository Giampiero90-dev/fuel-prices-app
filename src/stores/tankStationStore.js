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
        },
        address: {
          street: "Koningsplein",
          unitNumber: "67",
          zipCode: "1034PL",
        },
      }, {
        name: "Makro",
        fuelPrices: {
          diesel: "1.8",
          gas: "0.78",
        },
        address: {
          street: "Waterlooplein",
          unitNumber: "26",
          zipCode: "1077EB",
        },
      },
      {
        name: "Texaco",
        fuelPrices: {
          euro98: "2.05",
        },
        address: {
          street: "Eerstestraat",
          unitNumber: "123",
          zipCode: "1032FT",
        },
      },
    ],
    fuelTypes: [
      {id: "euro95", name: "Euro95"},
      {id: "euro98", name: "Euro98"},
      {id: "diesel", name: "Diesel"},
      {id: "gas", name: "Gas"},
  ],
  }),
  getters: {
    filterByFuelType: (state) => {
      return (fuelType) => state.tankStations.filter(station => {
        return station.fuelPrices[fuelType] !== undefined;
      });
    }
  },
  actions: {
    create(tankStation) {
      this.tankStations.push({
        ...tankStation,
      })
    }
  }
})
