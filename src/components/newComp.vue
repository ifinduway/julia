<template>
  <div>
    <input
      ref="input"
      :value="selectedOption.label"
      @input="searchOption"
      @focus="openDropdown"
      @blur="closeDropdown"
      @keydown.enter="addOption"
    />
    <div v-if="showDropdown" class="dropdown">
      <div v-for="option in filteredOptions" :key="option.value" @click="selectOption(option)">
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      selectedOption: {},
      showDropdown: false,
      filteredOptions: []
    };
  },
  props: {
    initialOptions: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.options = this.initialOptions;
  },
  computed: {
    inputValue: {
      get() {
        return this.$refs.input.value;
      },
      set(value) {
        this.$refs.input.value = value;
      }
    }
  },
  methods: {
    searchOption() {
      this.filteredOptions = this.options.filter(
        option => option.label.toLowerCase().includes(this.inputValue.toLowerCase())
      );
    },
    openDropdown() {
      this.showDropdown = true;
      this.filteredOptions = this.options;
    },
    closeDropdown() {
      this.showDropdown = false;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.inputValue = option.label;
      this.showDropdown = false;
    },
    addOption() {
      if (!this.options.find(option => option.label === this.inputValue)) {
        this.options = [...this.options, { label: this.inputValue, value: this.inputValue }];
        this.selectedOption = { label: this.inputValue, value: this.inputValue };
        this.showDropdown = false;
      }
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: absolute;
  background-color: white;
  border: 1px solid gray;
  width: 100%;
}
</style>
