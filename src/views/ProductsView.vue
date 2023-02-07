<template>
  <div>
    <select v-model="selectedCategory">
      <option
        v-for="category in categories"
        :value="category"
        :key="category.id"
      >
        {{ category }}
      </option>
    </select>
    <div>
      <input
        type="text"
        name=""
        id="searchinput"
        v-model="value"
        placeholder="Search"
      />
    </div>
    <ul>
      <div class="box" v-for="item in filteredItems" :key="item.id">
        <div class="flex">
          <li>
            {{ item.category }}
          </li>
          <img :src="item.image" alt="" />
        </div>
      </div>
    </ul>
    <div>
      <h3>Categories</h3>
      <!-- <ul>
          <li v-for="category in uniqueCategories"> {{ category }}</li>
        </ul> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedCategory: "All",
      value: "",
      categories: [
        "All",
        "men's clothing",
        "jewelery",
        "electronics",
        "women's clothing",
      ],
      items: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        this.items = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    filteredItems() {
      if (this.selectedCategory == "All") {
        return this.items.filter((val) =>
          val.category.toLowerCase().includes(this.value.toLowerCase())
        );
      }
      return this.items.filter(
        (item) => item.category === this.selectedCategory
      );
    },
  },
};
</script>
<style scoped>
li {
  list-style: none;
}
ul {
  display: flex;
  flex-wrap: wrap;
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
.box {
  display: flex;
  border: 1px solid #ccc;
  width: 400px;
  height: 250px;
  box-sizing: border-box;
  list-style: none;
  margin: 1rem;
}
img {
  width: 100%;
  height: 100%;
}
</style>
18 Ja
