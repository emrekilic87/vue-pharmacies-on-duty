import axios from "axios";

const state = {
  pharmacies: [],
  loading: false,
  apikey: `${process.env.VUE_APP_APIKEY}`
};

const getters = {
  pharmacyList: state => state.pharmacies.result,
  loading: state => state.loading
};

const actions = {
  async fetchPharmacies({ commit }, data) {
    commit("setLoading", true);
    const response = await axios.get(
      `https://api.collectapi.com/health/dutyPharmacy?il=${data.cityName}`,
      {
        headers: {
          Authorization: "apikey " + state.apikey
        }
      }
    );
    commit("setPharmacies", response.data);
    if (response.data.success == true) {
      commit("setLoading", false);
    }
  }
};

const mutations = {
  setPharmacies: (state, pharmacies) => {
    state.pharmacies = pharmacies;
  },
  setLoading: (state, loading) => {
    state.loading = loading;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
