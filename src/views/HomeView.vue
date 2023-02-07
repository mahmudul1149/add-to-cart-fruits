<template>
  <div class="home">
    <input
      type="text"
      name=""
      id="searchinput"
      v-model="value"
      placeholder="Search"
    />
    <div class="container-box">
      <div class="box" v-for="product in filteredItems" :key="product.id">
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
    <div>
      <button @click="goProducts" class="btn btn-more">More item</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {
    filteredItems() {
      return this.$store.getters.filteredItems(this.value);
    },
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    addItem(item) {
      this.$store.dispatch("addItems", item);
    },
  },
  created() {
    this.$store.dispatch("initProducts");
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 1.5rem;
}
.btn-more {
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  background: green;
  border-radius: 5px;
  margin-left: 0.35rem;
  margin-top: 1rem;
  border: none;
  color: white;
}
.container-box {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
label {
  font-size: 1.4rem;
  font-weight: 600;
  margin-right: 5px;
}
</style>
