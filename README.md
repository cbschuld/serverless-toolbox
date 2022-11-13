# Serverless Toolbox 🧰

A lightweight library full of useful functions for your Serverless projects (AWS).

## Installation

The recommended way to install the anticipated.io SDK is through `npm` or `Yarn`. The library is exposed as CommonJS and ESM.

npm:

```sh
npm install serverless-toolbox
```

yarn:

```sh
yarn add serverless-toolbox
```

## Functions

### SSM

```typescript
getParameter(name: string): Promise<string>
getEncryptedParameter(name: string): Promise<string>
```

## Tests

Tests are executed via Jest.

```shell script
npm run test
```

## Contact

Twitter - @cbschuld

## Contributing

Yes, thank you! Please update the docs and tests and add your name to the package.json file.
