import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../components/Icons";
import { ScreenLayout } from "../components/ScreenLayout";

export default function About() {
  return (
    <ScreenLayout>
      <ScrollView>
        <Link asChild href="/">
          <Pressable>
            {({ pressed }) => (
              <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white">Este es un texto de ejemplo</Text>
      </ScrollView>
    </ScreenLayout>
  );
}
