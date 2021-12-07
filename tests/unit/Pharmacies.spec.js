import { shallowMount, createLocalVue } from "@vue/test-utils";
import Pharmacies from "@/components/Pharmacies.vue";
import Vuex from "vuex";
import store from "@/store";
import { pharmacyListMock } from "../mock/data"

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Pharmacies, {
    store,
    localVue,
  });
});

describe("Pharmacies.vue", () => {
  it("render elements", () => {
    const resultsEl = wrapper.find("#results");
    expect(resultsEl.exists()).toBe(true);
  });

  it("fetch pharmacies", async () => {
    await wrapper.vm.fetchPharmacies({
      cityName: "Ankara",
    });
    expect(store.getters.pharmacyList).toStrictEqual(pharmacyListMock);
  });
});
