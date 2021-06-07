import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Home from "./pages/Home";
import MyLinks from "./pages/MyLinks";

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={ Home }
        options={{
          title: "Encurtar Link",
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              color={color}
              size={size}
            />
          )
        }}
      />

      <Drawer.Screen
        name="MyLinks"
        component={ MyLinks }
        options={{
          title: "Meus Links",
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              color={color}
              size={size}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;