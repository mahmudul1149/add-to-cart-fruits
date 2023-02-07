import Vue from "vue";
import Vuex from "vuex";
import product from "../data/product";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    product: [],
    cart: [],
    searchQuery: "",
  },
  getters: {
    products(state) {
      return state.product;
    },
    carts(state) {
      return state.cart;
    },
    total(state) {
      return state.cart.reduce((acc, val) => acc + val.quantity * val.price, 0);
    },
    totalCountItem(state) {
      return state.cart.reduce((acc, val) => acc + val.quantity, 0);
    },
    // filterTask(state) {
    //   return state.product.filter((item) =>
    //     item.name.toLowerCase().includes(state.searchValue.toLowerCase())
    //   );
    // },
    filteredItems: (state) => (searchTerm) => {
      return state.product.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
  },
  mutations: {
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    ADD_CART(state, item) {
      const itemInCart = state.cart.find((element) => element.id === item.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    ADD_QUANTITY(state, id) {
      const record = state.cart.find((el) => el.id === id);
      record.quantity++;
    },
    REDUCE_QTY(state, id) {
      const record = state.cart.find((el) => el.id === id);
      if (record.quantity > 1) {
        record.quantity--;
      } else {
        state.cart.splice(state.cart.indexOf(record), 1);
      }
    },
  },
  actions: {
    initProducts({ commit }) {
      commit("SET_PRODUCT", product);
    },
    addItems({ commit }, items) {
      commit("ADD_CART", items);
    },
    addQuantitys({ commit }, id) {
      commit("ADD_QUANTITY", id);
    },
    reduceQuantity({ commit }, id) {
      commit("REDUCE_QTY", id);
    },
  },
});
