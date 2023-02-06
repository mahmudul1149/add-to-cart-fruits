<template>
  <div>
    <div>
      <input
        type="radio"
        id="radio1"
        value="Default"
        v-model="selectedOption"
      />
      <label for="radio1">Default</label>
      <br />
      <input type="radio" id="radio1" value="hide" v-model="selectedOption" />
      <label for="radio1">Hide</label>
    </div>
    <div
      v-show="!isobs"
      class="container mr-t"
      v-for="(accessory, index) in accessories"
      :key="accessory.id"
    >
      <img
        class="image"
        src="https://via.placeholder.com/300x200"
        alt="Product Image"
      />
      <div class="title">{{ accessory.name }}</div>
      <div class="price">${{ accessory.total }}</div>
      <div class="quantity">
        <div class="quantity-text">amount:</div>
        <input
          v-model="accessory.amount"
          class="quantity-input"
          type="number"
          @input="accessory.total = accessory.amount * accessory.quantity"
        />
      </div>
      <div class="quantity">
        <div class="quantity-text">Quantity:</div>
        <input
          v-model="accessory.quantity"
          class="quantity-input"
          type="number"
          @input="accessory.total = accessory.amount * accessory.quantity"
        />
      </div>
      <div class="quantity">
        <div class="quantity-text">Total:</div>
        <input class="quantity-input" :value="accessory.total" />
      </div>

      <div>
        <button
          v-if="index"
          color="secondary"
          class="btn-primary bg-red"
          @click="deleteItem(accessory.id)"
        >
          Delete
        </button>
        <button v-else class="btn-primary bg-green" @click="addNewItem()">
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: false,
      accessories: [
        {
          name: "",
          amount: 0,
          quantity: 0,
          total: 0,
          id: "ksjhafkjask",
        },
      ],
    };
  },
  computed: {
    isobs() {
      return [`hide`].includes(this.selectedOption);
    },
  },
  methods: {
    addNewItem() {
      this.accessories.push({
        id: this.accessories.length + 1,
        name: "",
        quantity: 1,
        price: 0,
        total: 0,
      });
    },
    deleteItem(id) {
      this.accessories = this.accessories.filter(
        (accessory) => accessory.id !== id
      );
    },
  },
};
</script>

<style scoped>
.mr-t {
  margin-top: 5rem;
}
.container {
  width: 300px;
  height: auto;
  box-shadow: 0 0 5px #cccc;
  padding: 20px;
  text-align: left !important;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
input[type="radio"] {
  margin-top: 1rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}
.bg-red {
  background: red;
}
.bg-green {
  background: green;
}
.btn-primary {
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem 0;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  color: white;
}
.price {
  font-size: 16px;
  color: green;
  margin-top: 10px;
}

.quantity {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}

.quantity-text {
  font-size: 18px;
  margin-right: 10px;
}

.quantity-input {
  outline: none;
  border: 1px solid #ccc;
  width: 100%;
  padding: 0 0.4rem;
  height: 25px;
}
</style>
