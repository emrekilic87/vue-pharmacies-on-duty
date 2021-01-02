import axios from "axios"

const state = {
  pharmacies: [],
  loading: false,
};

const getters = {
  pharmacyList: (state) => state.pharmacies.data,
  loading: (state) => state.loading, 
};

const actions = {
  async fetchPharmacies({ commit }, data) {
    commit("setLoading", true)
    const response = await axios.get(`https://api.kodlama.net/eczane/il/${data.licensePlate}`);    
    commit("setPharmacies", response.data)
    setTimeout(() => {
      commit("setLoading", false)      
    }, 500);
  },
};

const mutations = {
  setPharmacies: (state, pharmacies) => {
    state.pharmacies = pharmacies;
  },
  setLoading: (state, loading) => {
    state.loading = loading;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
