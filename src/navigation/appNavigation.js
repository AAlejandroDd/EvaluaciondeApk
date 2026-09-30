import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from '../screens/StudentScreen';
import CharactersScreen from '../screens/CharactersScreen';
import { colors } from '../themes/colors';

const Stack = createNativeStackNavigator();

const theme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, background: colors.background, card: colors.surface, text: colors.text },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.text,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Student" component={StudentScreen} options={{ title: 'Estudiante' }} />
        <Stack.Screen name="Characters" component={CharactersScreen} options={{ title: 'Personajes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
