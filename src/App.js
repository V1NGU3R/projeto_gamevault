import { NavigationContainer } from "@react-navigation/native";

import { GameProvider } from "./context/GameContext";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GameProvider>
  );
}
