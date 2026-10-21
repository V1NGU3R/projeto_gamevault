import { Pressable, Text } from "react-native";

import styles from "./QuickAction.styles";

export default function QuickAction({ icon, title, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
