import InterfaceComponent from "./interface.vue";

export default {
  id: "qrcode",
  name: "QR-Code",
  description: "An Interface that shows a QR-Code representation of a String.",
  icon: "qr_code_2",
  component: InterfaceComponent,
  types: ["string"],
  options: [
    {
      field: "activateScanning",
      name: "Activate QR Scanning Button",
      type: "boolean",
      meta: {
        width: "full",
        interface: "boolean",
      },
      schema: {
        default_value: true,
      },
    },
    {
      field: "activateUpload",
      name: "Activate QR Upload Button",
      type: "boolean",
      meta: {
        width: "full",
        interface: "boolean",
      },
      schema: {
        default_value: true,
      },
    },
  ],
};
