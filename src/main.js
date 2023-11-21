

// Import the createApp function from Vue
import { createApp } from 'vue';

// Import the main App component
import App from './App.vue';

// Import the router configuration
import router from './router';

// Create a Vue application instance
// It uses the main App component and includes the router
createApp(App).use(router).mount('#app');


