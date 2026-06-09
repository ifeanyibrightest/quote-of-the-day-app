import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FavoritesProvider } from '../context/FavoritesContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: { 
            backgroundColor: '#121212',
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="FavoritesScreen"
          options={{
            title: 'Favorites',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heart" size={size} color= {color} />
            ),
          }}
        />
      </Tabs>
    </FavoritesProvider>
  );
}
















































































// import { Tabs } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import FontAwesome from '@expo/vector-icons/FontAwesome';


// export default function RootLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#4CAF50',
//         tabBarInactiveTintColor: '#888',
//         tabBarStyle: { 
//           backgroundColor: '#121212',
//           height: 60,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="FavoritesScreen"
//         options={{
//           title: 'Favorites',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="heart" size={size} color= {color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }