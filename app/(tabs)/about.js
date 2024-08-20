import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { ScreenLayout } from "../../components/ScreenLayout";

export default function About() {
  return (
    <ScreenLayout>
      <ScrollView>
        <View className="flex flex-row justify-between items-center mb-8">
          <Text className="text-white font-bold text-2xl">
            Sobre el proyecto
          </Text>

          <Link asChild href="/">
            <Pressable>
              {({ pressed }) => (
                <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
              )}
            </Pressable>
          </Link>
        </View>

        <Text className="text-white mb-4">
          Metacritic es una aplicacion para poder chequear las reseñas y
          valoraciones de algunos juegos, peliculas.
        </Text>

        <Text className="text-white font-medium">
          Características de la app:
        </Text>
        <Text className="text-white">App creada con Expo.</Text>
        <Text className="text-white">
          Uso de componentes nativos de react native.
        </Text>
        <Text className="text-white">
          Manejo de estados, useEffect, constantes, imagenes, iconos,
          animaciones, Expo router.
        </Text>
        <Text className="text-white">Consumo de api.</Text>
        <Text className="text-white">Integracion con tailwind.</Text>
      </ScrollView>
    </ScreenLayout>
  );
}
