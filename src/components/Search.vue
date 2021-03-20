<template>
  <div class="search">
    <form @submit.prevent="onSubmit">
      <select class="selectBox" v-model="cityName" :required="true">
        <option disabled value="">Şehir Seçiniz</option>
        <option v-bind:key="city.number" v-bind:value="city.name"  v-for="city in cities">
           {{ city.name }}
        </option>
      </select>
      <button type="submit" class="btn">ARA</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import cityData from "../store/cities/cities.json";

export default {
  name: "Search",
  data() {
    return {
      cities: cityData,
      cityName: ""
    };
  },
  methods: {
    ...mapActions(["fetchPharmacies"]),
    onSubmit() {
      this.fetchPharmacies({
        cityName: this.cityName,
      });
    },
  }
};
</script>

<style scoped lang="scss">
.search {
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: #000;
  padding: 20px 0;

  .selectBox{
    width: 215px;
    height: 27px;
    border-width: 0px;
    outline: 0;
  }

  .btn{
    padding: 0;
    height: 35px;
    background-color: #055967;
    color: #fff;
    border-width: 0;
    cursor: pointer;
    outline: 0;
    margin-left: 10px;
    padding: 0 15px;
  }
}
</style>
