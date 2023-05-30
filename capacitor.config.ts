import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.noticias.app',
  appName: 'noticias-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
