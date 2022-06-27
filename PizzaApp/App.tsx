import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppContainer from './src/navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/components/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppProvider from './src/context/AppProvider';

const fonts = {
  'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
};

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const QueryProvider = new QueryClient();

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <AppProvider>
        <QueryClientProvider client={QueryProvider}>
          <ThemeProvider theme={theme}>
            <SafeAreaView style={{ flex: 1 }}>
              <AppContainer />
            </SafeAreaView>
          </ThemeProvider>
        </QueryClientProvider>
      </AppProvider>
    </SafeAreaProvider>
  );
}
