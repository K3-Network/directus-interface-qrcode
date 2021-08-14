<template>
  <div class="box">
    <div class="input">
      <input :value="value" @input="handleChange($event.target.value)" />
    </div>
    <div class="code">
      <qrcode-vue
        class="qr"
        v-bind:class="value == '' || !value ? 'hidden' : ''"
        :value="value"
        :size="300"
        level="H"
      />
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
export default {
  emits: ["input"],
  props: {
    value: String,
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
    },
  },
  components: {
    QrcodeVue,
  },
};
</script>

<style scoped>
.input {
  position: relative;
  display: flex;
  flex-grow: 1;
  align-items: center;
  height: 100%;
  padding: var(--input-padding);
  padding-top: 0;
  padding-bottom: 0;
  color: var(--v-input-color);
  font-family: var(--v-input-font-family);
  background-color: var(--v-input-background-color);
  border: var(--border-width) solid var(--border-normal);
  border-radius: var(--border-radius);
  transition: border-color var(--fast) var(--transition);
}
.input:hover {
  --arrow-color: var(--border-normal-alt);
  color: var(--v-input-color);
  background-color: var(--background-input);
  border-color: var(--border-normal-alt);
}
.input.active,
.input:focus-within {
  --arrow-color: var(--border-normal-alt);
  color: var(--v-input-color);
  background-color: var(--background-input);
  border-color: var(--v-input-border-color-focus);
}
.input input {
  flex-grow: 1;
  width: 20px;
  height: 100%;
  padding: var(--input-padding);
  padding-right: 0;
  padding-left: 0;
  font-family: var(--v-input-font-family);
  background-color: transparent;
  border: none;
  appearance: none;
}
.code {
  border: var(--border-width) solid var(--border-normal);
  border-top: none;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  padding: 1rem;
  padding-top: 1.5rem;
  margin-top: -0.5rem;
}
.qr {
  width: 300px !important;
  height: auto !important;
  max-width: 100%;
}
.qr.hidden {
  display: none;
}
</style>
