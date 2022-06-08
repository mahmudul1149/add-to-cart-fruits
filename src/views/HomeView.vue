<template>
  <div class="home">
    <label for="#">Search</label>
    <input
      type="text"
      name=""
      id="searchinput"
      @input="searchInput"
      v-model="value"
    />
    <div class="container-box">
      <div class="box" v-for="product in filterTask" :key="product.id">
        <div class="image">
          <img :src="product.url" alt="" />
        </div>
        <div class="title-box">
          <h2>{{ product.name }}</h2>
          <h4>$ {{ product.price }}</h4>
          <button class="btn btn-primary" @click="addItem(product)">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapGetters(["filterTask"]),
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    addItem(item) {
      this.$store.dispatch("addItems", item);
    },
    searchInput() {
      this.$store.dispatch("searchValues", this.value);
    },
  },
  created() {
    this.$store.dispatch("initProducts");
  },
};
</script>

<style lang="scss">
.home {
  margin-top: 1.5rem;
}
.container-box {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  .box:hover {
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.3);
  }
  .box .image {
    img {
      width: 250px;
      height: 250px;
    }
  }
  .box .title-box {
    background: hsla(0, 0%, 97%, 0.884);
    padding: 0.3rem;
    .btn-primary {
      width: 250px;
      padding: 0.5rem 0;
      cursor: pointer;
      background: green;
      border-radius: 5px;
      border: none;
      color: white;
      &:focus {
        outline: none;
      }
    }
  }
}
#searchinput {
  outline: none;
  border: none;
  height: 25px;
  background: #fcf6f6;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
label {
  font-size: 1.4rem;
  font-weight: 600;
  margin-right: 5px;
}
</style>