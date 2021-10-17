# directus-interface-qrcode

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Compile it yourself</a></li>
        <li><a href="#installation">Install the precompiled Extension</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a simple [Directus 9](https://directus.io/) Interface Extension, which allows to display and scan QR-Codes directly inside of the Directus UI.
It takes a String input and renders a QR-Code underneath the text field.
It also lets you scan or upload a QR-Code, which gets decoded into a String value and emited to the input.

To display the QR-Code in the Collection Overview check out [directus-display-qrcode](https://github.com/K3-Network/directus-display-qrcode).

### Built With

- [Vue](https://github.com/vuejs/vue)
- [qrcode.vue](https://github.com/scopewu/qrcode.vue)
- [qrcode-reader-vue3](https://github.com/scholtz/qrcode-reader-vue3)
- [SASS](https://github.com/sass/sass)

<!-- GETTING STARTED -->

## Getting Started

There are 2 ways to get up and running. Either you compile the Extension yourself, or you download the precompiled Extension:

### Compile it yourself

1. Clone the repo

```sh
 git clone https://github.com/K3-Network/directus-interface-qrcode.git
```

2. Install NPM packages
   ```sh
   npm install
   ```
3. Compile the Extension
   ```sh
   npx directus-extension build
   ```
4. Copy the `directus-interface-qrcode\dist\index.js` into your Directus Installation: `Your-Directus-Installation\extensions\interfaces\directus-interface-qrcode\index.js`

5. Restart Directus

### Install the precompiled Extension

1. Download the [Binaries](https://github.com/K3-Network/directus-interface-qrcode/releases/latest/download/directus-interface-qrcode.zip)
2. Extract the ZIP into `Your-Directus-Installation\extensions\interfaces\`

3. Restart Directus

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/K3-Network/directus-interface-qrcode/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->

## License

Distributed under the ISC License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[Nicolas Mierbach](https://github.com/nico-k3) - K3.Network

Project Link: [https://github.com/K3-Network/directus-interface-qrcode](https://github.com/K3-Network/directus-interface-qrcode)
