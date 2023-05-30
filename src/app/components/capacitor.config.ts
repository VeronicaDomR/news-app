import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'noticias-app',
  webDir: 'dist/noticias-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
