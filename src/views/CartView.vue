<template>
  <div>
    <div class="cart" v-if="carts.length">
      <ul>
        <li v-for="cart in carts" :key="cart.id">
          <div class="items">
            <div class="box">
              <img :src="cart.url" alt="" />
            </div>
            <div class="box">
              <h2>{{ cart.name }}</h2>
            </div>
            <div class="box">
              <h2>{{ cart.price }}</h2>
            </div>
            <div class="box">
              <button class="btn btn-secondery" @click="reduceQty(cart.id)">
                -
              </button>
            </div>
            <div class="box">
              <p>{{ cart.quantity }}</p>
            </div>
            <div class="box-last">
              <button class="btn btn-primary" @click="addQty(cart.id)">
                +
              </button>
            </div>
          </div>
        </li>
        <h1>Total: {{ total }}</h1>
      </ul>
    </div>
    <div v-else>
      <h1>Your Cart Is Empty</h1>
      <img src="../assets/emptty.gif" alt="" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["total"]),
    carts() {
      return this.$store.getters.carts;
    },
  },
  methods: {
    ...mapActions(["addQuantitys", "reduceQuantity"]),
    addQty(item) {
      this.addQuantitys(item);
    },
    reduceQty(id) {
      this.reduceQuantity(id);
    },
  },
};
</script>

<style lang="scss">
.items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid rgba($color: #000000, $alpha: 0.3);
  .box {
    width: 18%;
  }
  .box-last {
    margin-right: 0.5rem;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .btn.btn-secondery {
    display: inline-block;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    background: red;
    color: white;
    box-shadow: 0 5px 5px rgba($color: #000000, $alpha: 0.3);
  }
  .btn.btn-primary {
    display: inline-block;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    background: green;
    color: white;
    box-shadow: 0 5px 5px rgba($color: #000000, $alpha: 0.3);
  }
}
.cart ul li {
  list-style: none;
}
</style>