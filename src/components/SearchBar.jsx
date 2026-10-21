import { TextInput } from "react-native";

import colors from "../constants/colors";

import styles from "./SearchBar.styles";

export default function SearchBar({ value, onChangeText, onSubmitEditing }) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder="🔎 Buscar jogo..."
      placeholderTextColor={colors.textSecondary}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="search"
      onSubmitEditing={onSubmitEditing}
    />
  );
}
