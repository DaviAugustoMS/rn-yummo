# RN-yummo

[![npm version](https://img.shields.io/npm/v/@yummo/components.svg?style=flat)](https://www.npmjs.com/package/@yummo/components)
[![npm downloads](https://img.shields.io/npm/dm/@yummo/components.svg?style=flat)](https://www.npmjs.com/package/@yummo/components)
[![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](./coverage)
[![License](https://img.shields.io/npm/l/@yummo/components)](./LICENSE)
[![Build](https://github.com/SEU_USUARIO/rn-yummo/actions/workflows/ci.yml/badge.svg)](https://github.com/SEU_USUARIO/rn-yummo/actions)

> Uma biblioteca de componentes React Native moderna, com suporte a tema claro/escuro, i18n, arquitetura limpa e testes.

---

## 📦 Instalação

```bash
yarn add @yummo/components
# ou
npm install @yummo/components
```

---

## 🚀 Uso

```tsx
import { Button, Card, Text, Badge, Switch, Divider } from "@yummo/components";

export default function Example() {
  return (
    <Card>
      <Text variant="title">Bem-vindo</Text>
      <Divider />
      <Button label="Clique aqui" onPress={() => {}} />
    </Card>
  );
}
```

---

## 🌗 Suporte a tema

Todos os componentes aceitam a prop `theme="light" | "dark"` para controle manual.  
Futuramente você pode integrar com `Appearance` ou contextos de tema.

---

## ✅ Testes

Rodar testes unitários com cobertura:

```bash
yarn test --coverage
```

---

## 📁 Estrutura

- `Button`, `Text`, `Card`, `Badge`, `Switch`, `Divider`
- Tokens: `colors`, `spacing`, `radius`, `typography`
- Arquitetura limpa
- Suporte a i18n e tema claro/escuro

---

## 📜 Licença

MIT © [Seu Nome]
