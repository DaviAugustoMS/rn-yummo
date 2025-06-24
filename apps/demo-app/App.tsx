import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Button, Text, Card, Badge, Switch, Divider } from "@yummo/components";

export default function App() {
  const [dark, setDark] = useState(false);
  const theme = dark ? "dark" : "light";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: dark ? "#111827" : "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text variant="title" theme={theme}>RN-Yummo Demo</Text>

        <Divider style={{ marginVertical: 12 }} theme={theme} />

        <Button label="Press me" onPress={() => {}} theme={theme} />
        <View style={{ height: 12 }} />

        <Badge label="New" theme={theme} />
        <View style={{ height: 12 }} />

        <Card theme={theme}>
          <Text theme={theme}>This is a card</Text>
        </Card>
        <View style={{ height: 12 }} />

        <Text theme={theme}>Dark mode:</Text>
        <Switch value={dark} onValueChange={setDark} theme={theme} />
      </ScrollView>
    </SafeAreaView>
  );
}
