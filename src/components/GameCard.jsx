import { View, Text, Pressable, Image } from "react-native";

import styles from "./GameCard.styles";

export default function GameCard({ game, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        {game.image ? (
          <Image
            source={{
              uri: game.image,
            }}
            style={styles.image}
          />
        ) : (
          <Text style={styles.noImage}>🎮</Text>
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {game.title}
        </Text>

        <Text style={styles.platform} numberOfLines={1}>
          {game.platform}
        </Text>

        <Text style={styles.rating}>⭐ {game.rating}</Text>
      </View>
    </Pressable>
  );
}
