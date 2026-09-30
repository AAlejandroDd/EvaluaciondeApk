import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/appNavigation';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AppNavigator />
    </>
  );
}
