# RN-Yummo Components

[![npm version](https://img.shields.io/npm/v/@yummo/components.svg?style=flat)](https://www.npmjs.com/package/@yummo/components)
[![npm downloads](https://img.shields.io/npm/dm/@yummo/components.svg?style=flat)](https://www.npmjs.com/package/@yummo/components)
[![Coverage Status](https://img.shields.io/badge/coverage-80%25-brightgreen.svg)](./coverage)
[![License](https://img.shields.io/npm/l/@yummo/components)](./LICENSE)
[![Build](https://github.com/SEU_USUARIO/rn-yummo/actions/workflows/ci.yml/badge.svg)](https://github.com/SEU_USUARIO/rn-yummo/actions)

> Uma biblioteca de componentes React Native moderna, com suporte a tema claro/escuro, acessibilidade, arquitetura limpa e testes robustos.

## 📦 Instalação

```bash
yarn add @yummo/components
# ou
npm install @yummo/components
```

## 🚀 Uso Rápido

```tsx
import { Button, Card, Text, Input, Modal } from '@yummo/components';

export default function Example() {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <Card theme="light">
      <Text variant="headlineSmall">Bem-vindo ao RN-Yummo</Text>
      
      <Input
        label="Nome"
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Digite seu nome"
        theme="light"
      />
      
      <Button
        label="Abrir Modal"
        onPress={() => setModalVisible(true)}
        variant="primary"
        theme="light"
      />
      
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Exemplo de Modal"
        theme="light"
      >
        <Text>Conteúdo do modal aqui!</Text>
      </Modal>
    </Card>
  );
}
```

## 🎨 Sistema de Design

### Cores

```tsx
import { colors } from '@yummo/components';

// Tema claro
colors.light.primary      // #1D4ED8
colors.light.secondary    // #6B7280
colors.light.success      // #059669
colors.light.error        // #DC2626

// Tema escuro
colors.dark.primary       // #3B82F6
colors.dark.secondary     // #9CA3AF
colors.dark.success       // #10B981
colors.dark.error         // #EF4444
```

### Tipografia

```tsx
import { typography } from '@yummo/components';

// Variantes disponíveis
typography.displayLarge   // 57px
typography.headlineLarge  // 32px
typography.titleLarge     // 22px
typography.bodyLarge      // 16px
typography.labelLarge     // 14px
```

### Espaçamento

```tsx
import { spacing } from '@yummo/components';

spacing.xs   // 4px
spacing.sm   // 8px
spacing.md   // 16px
spacing.lg   // 24px
spacing.xl   // 32px
```

## 📚 Componentes

### Button

Botão com múltiplas variantes e estados.

```tsx
import { Button } from '@yummo/components';

// Variantes
<Button label="Primary" variant="primary" onPress={() => {}} />
<Button label="Secondary" variant="secondary" onPress={() => {}} />
<Button label="Outline" variant="outline" onPress={() => {}} />
<Button label="Ghost" variant="ghost" onPress={() => {}} />

// Tamanhos
<Button label="Small" size="small" onPress={() => {}} />
<Button label="Medium" size="medium" onPress={() => {}} />
<Button label="Large" size="large" onPress={() => {}} />

// Estados
<Button label="Disabled" disabled onPress={() => {}} />
<Button label="Loading" loading onPress={() => {}} />
```

**Props:**
- `label: string` - Texto do botão
- `onPress: () => void` - Função chamada ao pressionar
- `variant?: 'primary' | 'secondary' | 'outline' | 'ghost'` - Variante visual
- `size?: 'small' | 'medium' | 'large'` - Tamanho do botão
- `disabled?: boolean` - Estado desabilitado
- `loading?: boolean` - Estado de carregamento
- `theme?: 'light' | 'dark'` - Tema

### Input

Campo de entrada com suporte a validação e ícones.

```tsx
import { Input } from '@yummo/components';

// Básico
<Input
  label="Email"
  placeholder="Digite seu email"
  value={email}
  onChangeText={setEmail}
/>

// Com validação
<Input
  label="Senha"
  value={password}
  onChangeText={setPassword}
  error="Senha deve ter pelo menos 6 caracteres"
  secureTextEntry
/>

// Com ícones
<Input
  label="Buscar"
  leftIcon={<SearchIcon />}
  rightIcon={<ClearIcon />}
  placeholder="Digite para buscar..."
/>
```

**Props:**
- `label?: string` - Rótulo do campo
- `value?: string` - Valor do campo
- `onChangeText?: (text: string) => void` - Callback de mudança
- `error?: string` - Mensagem de erro
- `helperText?: string` - Texto de ajuda
- `variant?: 'outlined' | 'filled'` - Variante visual
- `size?: 'small' | 'medium' | 'large'` - Tamanho
- `leftIcon?: React.ReactNode` - Ícone à esquerda
- `rightIcon?: React.ReactNode` - Ícone à direita
- `theme?: 'light' | 'dark'` - Tema

### Modal

Modal com animações e suporte a backdrop.

```tsx
import { Modal } from '@yummo/components';

<Modal
  visible={modalVisible}
  onClose={() => setModalVisible(false)}
  title="Confirmação"
  showCloseButton
  closeOnBackdropPress
>
  <Text>Deseja realmente excluir este item?</Text>
  <Button label="Confirmar" onPress={handleConfirm} />
  <Button label="Cancelar" variant="outline" onPress={() => setModalVisible(false)} />
</Modal>
```

**Props:**
- `visible: boolean` - Controla visibilidade
- `onClose: () => void` - Função de fechamento
- `children: React.ReactNode` - Conteúdo do modal
- `title?: string` - Título do modal
- `showCloseButton?: boolean` - Mostra botão de fechar
- `closeOnBackdropPress?: boolean` - Fecha ao pressionar backdrop
- `theme?: 'light' | 'dark'` - Tema

### Text

Componente de texto com variantes tipográficas.

```tsx
import { Text } from '@yummo/components';

// Variantes
<Text variant="displayLarge">Display Large</Text>
<Text variant="headlineLarge">Headline Large</Text>
<Text variant="titleLarge">Title Large</Text>
<Text variant="bodyLarge">Body Large</Text>
<Text variant="labelLarge">Label Large</Text>

// Com tema
<Text variant="bodyMedium" theme="dark">Texto no tema escuro</Text>
```

**Props:**
- `children: React.ReactNode` - Conteúdo do texto
- `variant?: TypographyVariant` - Variante tipográfica
- `theme?: 'light' | 'dark'` - Tema

### Card

Container com elevação e bordas arredondadas.

```tsx
import { Card } from '@yummo/components';

<Card theme="light">
  <Text variant="titleLarge">Título do Card</Text>
  <Text variant="bodyMedium">Conteúdo do card aqui...</Text>
</Card>
```

**Props:**
- `children: React.ReactNode` - Conteúdo do card
- `theme?: 'light' | 'dark'` - Tema

### Badge

Indicador pequeno para status ou contagem.

```tsx
import { Badge } from '@yummo/components';

<Badge label="Novo" theme="light" />
<Badge label="5" theme="dark" />
```

**Props:**
- `label: string` - Texto do badge
- `theme?: 'light' | 'dark'` - Tema

### Switch

Interruptor para alternar estados.

```tsx
import { Switch } from '@yummo/components';

<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
  theme="light"
/>
```

**Props:**
- `value: boolean` - Estado atual
- `onValueChange: (value: boolean) => void` - Callback de mudança
- `theme?: 'light' | 'dark'` - Tema

### Divider

Linha divisória horizontal.

```tsx
import { Divider } from '@yummo/components';

<Divider theme="light" />
```

**Props:**
- `theme?: 'light' | 'dark'` - Tema

## 🌗 Suporte a Tema

Todos os componentes aceitam a prop `theme="light" | "dark"` para controle manual.

### Integração com Appearance

```tsx
import { Appearance } from 'react-native';
import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    Appearance.getColorScheme() || 'light'
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme || 'light');
    });

    return () => subscription?.remove();
  }, []);

  return theme;
}

// Uso
function App() {
  const theme = useTheme();
  
  return (
    <Button label="Clique aqui" theme={theme} onPress={() => {}} />
  );
}
```

## ♿ Acessibilidade

Todos os componentes incluem suporte nativo a acessibilidade:

- `accessibilityLabel` - Rótulo para screen readers
- `accessibilityHint` - Dica adicional
- `accessibilityRole` - Papel do elemento
- `accessibilityState` - Estado atual

```tsx
<Button
  label="Salvar"
  onPress={handleSave}
  accessibilityLabel="Salvar alterações"
  accessibilityHint="Double tap to save changes"
  accessibilityRole="button"
/>
```

## ✅ Testes

```bash
# Executar todos os testes
yarn test

# Executar com cobertura
yarn test --coverage

# Executar em modo watch
yarn test:watch

# Executar testes específicos
yarn test Button
```

## 📖 Storybook

```bash
# Iniciar Storybook
yarn storybook

# Build do Storybook
yarn storybook:build
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
yarn install

# Build dos componentes
yarn build

# Desenvolvimento com watch
yarn dev

# Linting
yarn lint
yarn lint:fix

# Type checking
yarn type-check
```

## 📁 Estrutura do Projeto

```
packages/components/
├── src/
│   ├── Button/
│   ├── Text/
│   ├── Card/
│   ├── Badge/
│   ├── Switch/
│   ├── Divider/
│   ├── Input/
│   ├── Modal/
│   └── index.ts
├── theme/
│   └── index.ts
├── package.json
├── tsconfig.json
└── jest.config.js
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código

- Use TypeScript para todos os componentes
- Siga as convenções de nomenclatura
- Adicione testes para novas funcionalidades
- Mantenha cobertura de testes acima de 80%
- Documente APIs públicas

## 📄 Licença

MIT © [Seu Nome]

## 🆘 Suporte

- 📧 Email: seu-email@exemplo.com
- 🐛 Issues: [GitHub Issues](https://github.com/SEU_USUARIO/rn-yummo/issues)
- 📖 Documentação: [GitHub Wiki](https://github.com/SEU_USUARIO/rn-yummo/wiki)
