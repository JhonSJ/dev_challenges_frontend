# Challenges FrontEnd Monorepo

[![Alt text](./images/turborepo.svg)](https://turbo.build/repo)

# What's inside?

This monorepo includes the following packages/apps:

#### Apps

- `button-challenge`:  see more information [here](./apps/button-challenge/README.md)

#### Packages

- `tailwind-config`: see more information [here](./packages/tailwind-config/README.md)
- `eslint-config`: see more information [here](./packages/eslint-config/README.md)
- `tsconfig`: see more information [here](./packages/tsconfig/README.md)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TailwindCSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd dev_challenges_frontend
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```
