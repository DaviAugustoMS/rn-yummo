import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { 
  Button, 
  Text, 
  Card, 
  Badge, 
  Switch, 
  Divider, 
  Input, 
  Modal 
} from "@yummo/components";

export default function App() {
  const [dark, setDark] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  
  const theme = dark ? "dark" : "light";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: dark ? "#111827" : "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text variant="headlineLarge" theme={theme}>RN-Yummo Demo</Text>
        <Text variant="bodyMedium" theme={theme} style={{ marginTop: 8 }}>
          Biblioteca de componentes React Native moderna
        </Text>

        <Divider style={{ marginVertical: 16 }} theme={theme} />

        {/* Theme Toggle */}
        <Card theme={theme} style={{ marginBottom: 16 }}>
          <Text variant="titleMedium" theme={theme}>Tema</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
            <Text variant="bodyMedium" theme={theme} style={{ marginRight: 8 }}>
              Modo escuro:
            </Text>
            <Switch value={dark} onValueChange={setDark} theme={theme} />
          </View>
        </Card>

        {/* Buttons Section */}
        <Card theme={theme} style={{ marginBottom: 16 }}>
          <Text variant="titleMedium" theme={theme}>Botões</Text>
          
          <View style={{ marginTop: 12 }}>
            <Button label="Primary" onPress={() => {}} theme={theme} style={{ marginBottom: 8 }} />
            <Button label="Secondary" variant="secondary" onPress={() => {}} theme={theme} style={{ marginBottom: 8 }} />
            <Button label="Outline" variant="outline" onPress={() => {}} theme={theme} style={{ marginBottom: 8 }} />
            <Button label="Ghost" variant="ghost" onPress={() => {}} theme={theme} style={{ marginBottom: 8 }} />
            <Button label="Disabled" disabled onPress={() => {}} theme={theme} style={{ marginBottom: 8 }} />
            <Button label="Loading" loading onPress={() => {}} theme={theme} />
          </View>
        </Card>

        {/* Inputs Section */}
        <Card theme={theme} style={{ marginBottom: 16 }}>
          <Text variant="titleMedium" theme={theme}>Campos de Entrada</Text>
          
          <View style={{ marginTop: 12 }}>
            <Input
              label="Nome"
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Digite seu nome"
              theme={theme}
              style={{ marginBottom: 12 }}
            />
            
            <Input
              label="Email"
              value={emailValue}
              onChangeText={setEmailValue}
              placeholder="Digite seu email"
              keyboardType="email-address"
              theme={theme}
              style={{ marginBottom: 12 }}
            />
            
            <Input
              label="Senha"
              value={passwordValue}
              onChangeText={setPasswordValue}
              placeholder="Digite sua senha"
              secureTextEntry
              error="Senha deve ter pelo menos 6 caracteres"
              theme={theme}
            />
          </View>
        </Card>

        {/* Other Components */}
        <Card theme={theme} style={{ marginBottom: 16 }}>
          <Text variant="titleMedium" theme={theme}>Outros Componentes</Text>
          
          <View style={{ marginTop: 12, alignItems: 'flex-start' }}>
            <Badge label="Novo" theme={theme} style={{ marginBottom: 8 }} />
            <Badge label="5" theme={theme} style={{ marginBottom: 16 }} />
            
            <Button 
              label="Abrir Modal" 
              onPress={() => setModalVisible(true)} 
              theme={theme}
              variant="outline"
            />
          </View>
        </Card>

        {/* Modal */}
        <Modal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          title="Exemplo de Modal"
          theme={theme}
        >
          <Text variant="bodyMedium" theme={theme} style={{ marginBottom: 16 }}>
            Este é um exemplo de modal com os componentes da biblioteca RN-Yummo.
          </Text>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button 
              label="Cancelar" 
              variant="outline" 
              onPress={() => setModalVisible(false)} 
              theme={theme}
              style={{ flex: 1, marginRight: 8 }}
            />
            <Button 
              label="Confirmar" 
              onPress={() => setModalVisible(false)} 
              theme={theme}
              style={{ flex: 1, marginLeft: 8 }}
            />
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
