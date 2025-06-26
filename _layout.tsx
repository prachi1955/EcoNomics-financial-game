import { Tabs } from 'expo-router/tabs';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="tabs/index" options={{ title: 'Dashboard' }} />
      <Tabs.Screen name="tabs/play" options={{ title: 'Play' }} />
      <Tabs.Screen name="tabs/result" options={{ title: 'Result' }} />
    </Tabs>
  );
}
