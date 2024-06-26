import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{

tabBarLabelStyle:{

 fontSize:12
},
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,

        tabBarStyle:{
        
          height:80,
          paddingTop:8
        },

        tabBarItemStyle:{
       
          height:60
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false,
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color}  />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Shorts"
        options={{
          headerShown:false,
          title: 'Shorts',
          tabBarIcon: ({ color }) => <AntDesign name="videocamera" size={24} color={color} />,
        }}
      />


<Tabs.Screen
        name="Upload"
        options={{
          headerShown:false,
          title: '',
          tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={35} color={color} />,
        }}
      />

<Tabs.Screen
        name="Subscriptions"
        options={{
          headerShown:false,
          title: 'Subscriptions',
          tabBarIcon: ({ color }) => <MaterialIcons name="subscriptions" size={24} color={color}  />,
        }}
      />

<Tabs.Screen
        name="You"
        options={{
          title: 'You',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
      
        
        }}
      />
    </Tabs>
  );
}
