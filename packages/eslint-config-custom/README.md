# Default Configuration for ESLint

This README.md file provides an overview of the default configuration for ESLint, a popular JavaScript linting tool. Understanding the default configuration is essential for effectively using and customizing ESLint in your projects.

## Introduction

ESLint is a pluggable and highly configurable JavaScript linter that helps catch coding errors and enforce consistent code style. It provides a default set of rules and configurations to help you maintain code quality and adhere to best practices.

## Default Configuration

ESLint's default configuration consists of the following components:

1. **Rules**: The default configuration includes a set of predefined rules that define coding conventions and best practices. These rules cover areas such as code formatting, variable naming, function usage, and more.

2. **Environments**: ESLint supports various JavaScript environments such as browser, Node.js, and ECMAScript versions. The default configuration includes commonly used environments to enable linting for different contexts.

3. **Parser Options**: The default configuration specifies parser options such as the ECMAScript version to use and the type of modules being used (e.g., CommonJS or ECMAScript modules).

4. **Extending Configuration**: ESLint allows extending the default configuration with additional rule sets or configurations. This enables you to adopt widely accepted standards like Airbnb, Google, or TypeScript-specific configurations.

## Customizing the Default Configuration

To customize ESLint's default configuration for your project, follow these steps:

1. Create an `.eslintrc.js` file in the root directory of your project.

2. Specify your desired configuration options in the `.eslintrc.js` file, overriding the default settings where necessary.

   - **Rules Configuration**: Update the rules section to modify or disable specific rules, or add new rules to enforce project-specific conventions.

   - **Environment Configuration**: Add or remove environments based on the JavaScript runtime and APIs your project uses.

   - **Parser Options Configuration**: Adjust the parser options to match your project's ECMAScript version or module system.

   - **Extending Configuration**: If needed, extend the default configuration by including additional rule sets or configurations from popular style guides or plugins.

3. Install ESLint as a project dependency using your preferred package manager:

   ```shell
   pnpm add eslint -D --filter {[package / app]-name}
   ```

4. Create a `.eslintrc.js` file in the root directory of your package or app.

5. Add the following code to the `.eslintrc.js`

```js
module.exports = {
  root: true,
  extends: ["custom"],
};
```
