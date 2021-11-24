import { shallowMount, createLocalVue } from "@vue/test-utils";
import Search from "@/components/Search.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

let actions;
let store;

beforeEach(() => {
  actions = {
    fetchPharmacies: jest.fn(),
  };
  store = new Vuex.Store({
    actions,
  });
});

describe("Search.vue", () => {
  it("render elements", () => {
    const wrapper = shallowMount(Search);
    const searchEl = wrapper.find("#search");
    expect(searchEl.exists()).toBe(true);
  });

  it("submit", () => {
    const wrapper = shallowMount(Search, {
      store,
      localVue,
    });
    const searchBtn = wrapper.find("#submitBtn");
    searchBtn.trigger("submit");
    expect(searchBtn.exists()).toBe(true);
    expect(actions.fetchPharmacies).toHaveBeenCalled();
  });
});
