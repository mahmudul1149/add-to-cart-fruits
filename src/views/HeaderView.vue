<template>
  <div>
    <header id="header">
      <div @click="goTo()" class="logo">
        <h1>Ecomerce</h1>
      </div>
      <div class="flex-1">
        <ul>
          <li>
            <router-link to="/product">View Cart</router-link>
          </li>
        </ul>
        <div class="icon">
          <img src="../assets/shopping.png" alt="" />
          <div class="count">{{ totalCountItem }}</div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["totalCountItem"]),
  },
  methods: {
    goTo() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
#header {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 2rem;
  border-radius: 10px;
  justify-content: space-between;
  background: white;
  color: #333;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  .logo h1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  ul {
    li a {
      text-decoration: none;
      color: black;
      font-size: 1.3rem;
      font-weight: 600;
      margin-right: 0.7rem;
    }
  }
  .flex-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    position: relative;
    img {
      width: 40px;
      height: 40px;
    }
    .count {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: red;
      text-align: center;
      color: white;
      position: absolute;
      top: -5px;
      right: -10px;
    }
  }
  ul {
    list-style: none;
  }
}
</style>