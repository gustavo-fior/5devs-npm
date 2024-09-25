# 5Devs

This library eliminates the need for manual data entry during testing phases, saving valuable time and ensuring consistent, diverse test data across projects.

Whether you're building a new application, debugging existing code, or running quality assurance tests, 5Devs provides the data you need to simulate real-world scenarios efficiently.

## How it works

5Devs uses a combination of data sources, including real-world data, to generate realistic test data.

Here is the list of real-world data used by 5Devs:

Addresses: Real-world addresses (mostly famous places in Brazil), including zip (CEP), street names, city names, and states.
Vehicles: Real-world vehicles, including make, model, and year.
Names: Real-world names, including first and last names.
The rest of the data is/was generated using a combination of data sources, including:

Faker.js: A popular JavaScript library for generating fake data.
AI: Some data was generated using Claude Sonnet 3.5.
Others: Other data generator websites.

## Website

You can also check out our website at [5devs.com.br](https://5devs.com.br).

## Installation

To install the library, run the following command:

```bash
npm install 5devs
```

## Usage

Here's an example of how to use the library:

```typescript
import { empresa, pessoa, telefone, veiculo, utils } from "5devs";

// O parâmetro mask é opcional e pode ser usado para gerar dados com máscara.
const empresa = empresa(mask: boolean);
const pessoa = pessoa(mask: boolean);
const telefone = telefone(mask: boolean);
const veiculo = veiculo(mask: boolean);
const uteis = uteis();
```
