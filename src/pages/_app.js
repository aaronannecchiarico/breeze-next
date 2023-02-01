import 'tailwindcss/tailwind.css';
import { VechaiProvider } from "@vechaiui/react";

const App = ({ Component, pageProps }) =>
<VechaiProvider>
    <Component {...pageProps} />
</VechaiProvider>

export default App
