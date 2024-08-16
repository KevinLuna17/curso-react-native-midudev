import { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Text, Animated } from "react-native";

export function GameCard({ game }) {
  return (
    <View
      className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10"
      key={game.slug}
    >
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text className="mb-1" style={styles.title}>
          {game.title}
        </Text>
        <Text style={styles.score}>{game.score}</Text>
        <Text className="mt-2 flex-shrink" style={styles.description}>
          {game.description.slice(0, 100)}
        </Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
