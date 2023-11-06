<template>
    <div>
        <form>
            <label for="name">Name</label>
            <input id="name" type="text" v-model="tankStationName" />

            <h3>Fuel prices:</h3>
            <label for="euro95">Euro 95</label>
            <input id="euro95" type="number" v-model="euro95" />
            
            <label for="diesel">Dielsel</label>
            <input id="diesel" type="number" v-model="diesel" />
            
            <label for="gas">Gas</label>
            <input id="gas" type="number" v-model="gas" />
            
            <h3>Address:</h3>
            <label for="street">Street</label>
            <input id="street" type="text" v-model="street" />
            
            <label for="unitNumber">Unit number</label>
            <input id="unitNumber" type="number" v-model="unitNumber" />
            
            <label for="zipCode">Zip code</label>
            <input id="zipCode" type="text" v-model="zipCode" />

            <button type="button" @click.prevent="submitForm">Submit</button>
            <button type="button" @click.prevent="closeForm">Cancel</button>
        </form>
    </div>
</template>

<script>
import { useTankStationStore } from '../stores/tankStationStore';

export default {
    name: 'NewHolidayForm',
    data() {
        return {
            tankStationName: null,
            euro95: null,
            diesel: null,
            gas: null,
            street: null,
            unitNumber: null,
            zipCode: null,
            store: useTankStationStore(),
        }
    },
    methods: {
        submitForm() {
            if (this.tankStationName && this.euro95 && this.diesel && this.gas) {
                    this.store.create({
                        name: this.tankStationName,
                        fuelPrices: {
                            euro95: this.euro95,
                            diesel: this.diesel,
                            gas: this.gas,
                        },
                        address: {
                            street: this.street,
                            unitNumber: this.unitNumber,
                            zipCode: this.zipCode,
                        },
                    })
                    this.$router.replace({ path: '/' });
            } else {
                window.alert("Fill in all entries");
            }
        },
        closeForm() {
            this.$router.replace({ path: '/' });
        }
    }
}
</script>

<style lang="scss" scoped></style>