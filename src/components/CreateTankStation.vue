<template>
  <div>
    <form ref="form">
      <label for="name">Name</label>
      <input name="name" type="text" required />

      <h3>Fuel prices:</h3>
      <ul>
        <li v-for="(fuelType, index) in tankStationStore.fuelTypes" :key="index">
          <label :for="fuelType.id">{{ fuelType.name }}</label>
          <input type="text" :id="fuelType.id" :name="fuelType.id">
        </li>
      </ul>

      <h3>Address:</h3>
      <label for="street">Street</label>
      <input id="street" name="street" type="text" required />

      <label for="unitNumber">Unit number</label>
      <input id="unitNumber" name="unitNumber" type="number" required />

      <label for="zipCode">Zip code</label>
      <input id="zipCode" name="zipCode" type="text" required />

      <button type="submit" @click.prevent="submitForm">Submit</button>
      <button type="button" @click.prevent="closeForm">Cancel</button>
    </form>
  </div>
</template>

<script>
import { useTankStationStore } from '../stores/tankStationStore';

export default {
  name: 'NewTankStationForm',
  data() {
    return {
      tankStationStore: useTankStationStore(),
    }
  },
  methods: {
    submitForm() {
      const formData = new FormData(this.$refs.form);
      for (const [key, value] of formData) {
        console.log(`${key}: ${value}\n`);
      }

      console.log(Object.fromEntries(formData));

      // this.tankStationStore.create(Object.fromEntries(formData));
      // this.closeForm();
      // if (this.name && this.euro95 && this.diesel && this.gas) {
      //     this.store.create({
      //         name: this.name,
      //         fuelPrices: {
      //             euro95: this.euro95,
      //             diesel: this.diesel,
      //             gas: this.gas,
      //         },
      //         address: {
      //             street: this.street,
      //             unitNumber: this.unitNumber,
      //             zipCode: this.zipCode,
      //         },
      //     })
      //     this.closeForm();
      // } else {
      //     window.alert("Fill in all entries");
      // }
    },
    closeForm() {
      this.$router.replace({ path: '/' });
    }
  }
}
</script>

<style lang="scss" scoped></style>