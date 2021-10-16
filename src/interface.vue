<template>
  <div class="box">
    <div class="input">
      <input :value="value" @input="handleChange($event.target.value)" />
      <v-button :icon="true" @click="overlay = true"
        ><v-icon name="photo_camera"
      /></v-button>
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
    <v-overlay :active="overlay">
      <v-card>
        <v-card-title>Scan QR-Code</v-card-title>
        <v-card-text>
          <p class="error">{{ error }}</p>
          <p class="decode-result">
            Last result: <b>{{ result }}</b>
          </p>
        </v-card-text>
        <qrcode-stream @decode="onDecode" @init="onInit" />
        <v-card-text class="hintText">
          <p>
            The Image will not be saved. Only the String Value of the QR-Code
            is.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-button @click="overlay = false">Close</v-button>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import { QrcodeStream } from "qrcode-reader-vue3";

export default {
  emits: ["input"],
  props: {
    value: String,
  },
  components: {
    QrcodeVue,
    QrcodeStream,
  },
  data() {
    return {
      result: "",
      error: "",
      overlay: false,
    };
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
    },
    onDecode(result) {
      this.result = result;
      this.$emit("input", result);
      this.overlay = false;
    },
    async onInit(promise) {
      console.log("Loading...");
      try {
        const { capabilities } = await promise;

        // successfully initialized
      } catch (error) {
        if (error.name === "NotAllowedError") {
          // user denied camera access permisson
          this.error =
            "ERROR 401: It seems like you have denied Camera access. Please provide permission to this Website to use your Camera.";
        } else if (error.name === "NotFoundError") {
          // no suitable camera device installed
          this.error = "ERROR 404: We could not detect a Camera device.";
        } else if (error.name === "NotSupportedError") {
          // page is not served over HTTPS (or localhost)
          this.error =
            "ERROR 505: This Website needs to be served via HTTPS or localhost to request Camera access.";
        } else if (error.name === "NotReadableError") {
          // maybe camera is already in use
          this.error =
            "ERROR 429: The camera access is permitted but it is not accesible. Probably your Camera is allready used by another App.";
        } else if (error.name === "OverconstrainedError") {
          // did you requested the front camera although there is none?
          this.error =
            "ERROR 400: Did you requested the front camera although there is none?";
        } else if (error.name === "StreamApiNotSupportedError") {
          // browser seems to be lacking features
          this.error =
            "ERROR 405: It seems like your Browser is lacking features to use this App.";
        }
      } finally {
        console.log("Camera Loaded.");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
  &::hover {
    --arrow-color: var(--border-normal-alt);
    color: var(--v-input-color);
    background-color: var(--background-input);
    border-color: var(--border-normal-alt);
  }
  &.active,
  &:focus-within {
    --arrow-color: var(--border-normal-alt);
    color: var(--v-input-color);
    background-color: var(--background-input);
    border-color: var(--v-input-border-color-focus);
  }
  input {
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
  &.hidden {
    display: none;
  }
}
.hintText {
  // @include type-note;
  color: var(--foreground-subdued);
  font-weight: 500;
  font-size: 13px;
  font-family: var(--family-sans-serif);
  font-style: italic;
  line-height: 18px;
}
</style>
