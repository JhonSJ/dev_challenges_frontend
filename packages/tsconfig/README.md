# Default Configuration for TypeScript

This README.md file provides an overview of the default configuration for TypeScript, a strongly-typed superset of JavaScript. Understanding the default configuration is essential for effectively using and customizing TypeScript in your projects.

## Introduction

TypeScript is a statically-typed language that compiles to plain JavaScript. It provides enhanced tooling and language features, including static typing, interfaces, classes, and more. TypeScript has a default configuration that can be customized to meet the specific needs of your project.

## Default Configuration

TypeScript's default configuration consists of the following components:

1. **tsconfig.json**: The default configuration file for TypeScript is named `tsconfig.json`. It contains various compiler options that define how TypeScript should compile your code.

2. **Compiler Options**: The default configuration includes a set of predefined compiler options that control how TypeScript handles features such as module resolution, target ECMAScript version, strict type checking, source maps, and more.

3. **Type Declarations**: TypeScript uses type declaration files (`.d.ts`) to provide type information for libraries and external dependencies. By default, TypeScript automatically includes the necessary type declarations based on your `tsconfig.json` configuration.

## Customizing the Default Configuration

To customize the default configuration for TypeScript in your project, follow these steps:

1. Create a `tsconfig.json` file in the root directory of your project if it doesn't exist already.

2. Specify your desired configuration options in the `tsconfig.json` file, overriding the default settings where necessary.

   - **Compiler Options Configuration**: Update the `compilerOptions` section to modify settings such as `target`, `module`, `strict`, `noImplicitAny`, `sourceMap`, and more.

   - **Module Resolution Configuration**: If required, adjust the `moduleResolution` setting to specify how TypeScript resolves module imports in your project.

   - **File Inclusion and Exclusion**: Customize the `include` and `exclude` sections to control which files TypeScript should include or exclude during compilation.

   - **Type Declaration Files**: Add or reference additional type declaration files (`.d.ts`) for external libraries or custom typings in the `types` or `typeRoots` sections.

3. Install TypeScript as a project dependency using your preferred package manager:

   ```shell
   pnpm add -D typescript --filter {[package / app]-name}
   ```

4. Create a `tsconfig.json` file in the root directory of your package or app.

5. Add the following code to the `tsconfig.json`.

   ```json
   {
     "extends": "tsconfig/nextjs.json"
   }
   ```
