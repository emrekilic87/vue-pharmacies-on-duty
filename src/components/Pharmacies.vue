<template>
  <div class="results">
    <div class="result" v-for="pharmacy in pharmacyList" :key="pharmacy.phone">
      <h2 class="title">
        {{ pharmacy.name }}
      </h2>
      <p class="phone">
        <a :href="`tel:${pharmacy.phone}`">
          {{ pharmacy.phone }}
        </a>
      </p>
      <p class="district">
        {{ pharmacy.dist }}
      </p>
      <p class="address">
        {{ pharmacy.address }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Pharmacies",
  methods: {
    ...mapActions(["fetchPharmacies"])
  },
  computed: mapGetters(["pharmacyList"])
};
</script>

<style scoped lang="scss">
.results {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 3em;
  justify-content: center;
  align-content: space-between;

  .result {
    width: 16%;
    margin: 10px;
    border: 2px solid #62676b;
    border-radius: 5px;
    position: relative;
    padding: 0 5px;
    min-height: 285px;
    background-color: #161b22;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #000;
      transform: scale(1.05);
    }
    @media only screen and (max-width: 992px) {
      width: 40%;
      min-height: 230px;
    }

    .title {
      color: #41d8d1;
      @media only screen and (max-width: 992px) {
        font-size: 1em;
      }
    }

    .phone * {
      color: #03a9f4;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      @media only screen and (max-width: 992px) {
        font-size: 0.7em;
      }
    }
    .district,
    .address {
      color: #9e9e9e;
      @media only screen and (max-width: 992px) {
        font-size: 0.8em;
      }
    }
  }
}
</style>
