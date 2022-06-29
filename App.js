import { AuthProvider } from "./src/context/AuthContext";
import { AxiosProvider } from "./src/context/AxiosContext";
import AppEntry from "./AppEntry";

export default function App() {
  return (
    <AuthProvider>
      <AxiosProvider>
        <AppEntry />
      </AxiosProvider>
    </AuthProvider>
  );
}
