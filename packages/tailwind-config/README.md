# Default Configuration for Tailwind CSS

This README.md file provides an overview of the default configuration for Tailwind CSS, a popular utility-first CSS framework. Understanding the default configuration is crucial for effectively using and customizing Tailwind CSS in your projects.

## Introduction

Tailwind CSS aims to provide a highly customizable and low-level utility framework for building user interfaces. It uses a configuration file to define various aspects of its utility classes, such as colors, spacing, breakpoints, and more. The default configuration file, `tailwind.config.js`, contains a set of predefined values that are used by Tailwind CSS.

## Default Configuration Structure

The default configuration file `tailwind.config.js` is typically located in the root directory of your project. It exports an object that contains different configuration options. Here are some key sections of the default configuration:

1. **Theme**: The `theme` section allows you to define the default values for colors, spacing, font sizes, breakpoints, and more. You can customize these values to match your project's design requirements.

2. **Variants**: The `variants` section defines which utility classes are generated for each variant. Variants control the responsive, hover, focus, and other states for utility classes. The default configuration includes variants for responsiveness and pseudo-classes like hover and focus.

3. **Plugins**: The `plugins` section allows you to enable or add custom plugins to extend Tailwind CSS's functionality. By default, several plugins are included to provide features like accessibility support, vertical alignment utilities, and more.

4. **Extend**: The `extend` section allows you to add or override existing utility classes with your own custom utility classes. This is useful for extending Tailwind CSS or overriding styles as per your project's specific needs.

## Customizing the Default Configuration

To customize the default configuration for Tailwind CSS, you can modify the `tailwind.config.js` file. Here are a few ways to customize the configuration:

- **Theme Customization**: Update the values in the `theme` section to change colors, spacing, font sizes, and other design-related properties.

- **Variant Customization**: Modify the `variants` section to control which utility classes are generated for different variants. You can enable or disable specific variants or add your own custom variants.

- **Plugin Customization**: Enable or add custom plugins in the `plugins` section to extend Tailwind CSS's functionality. You can remove existing plugins or create your own to meet specific project requirements.

- **Utility Class Customization**: Use the `extend` section to add or override utility classes with your own custom classes. This allows you to extend Tailwind CSS with project-specific styles.

## Usage

To use Tailwind CSS with its default configuration in your project, follow these steps:

1. Install Tailwind CSS as a dependency using your preferred package manager:

```shell
    pnpm add tailwindcss --filter {[package / app]-name}gv 
```

2.  Create a `tailwind.config.js` file in the root directory of your package or app.

3.  Add the following code to the `tailwind.config.js`

```js

const sharedConfig = require("tailwind-config/tailwind.config.js");

 /** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [sharedConfig],
    content: [
        ...
    ],
    theme: {
        extend: {}
    },
    plugins: []
}
```
