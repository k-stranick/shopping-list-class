import shoppingListData from "../../data/grocery-items.json";
import React from "react";
import { View, Text, FlatList } from "react-native";
import { StyleSeparator } from "../../components/Separator";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { styles } from "./HomeScreen.style";
import { useResponsiveColumns } from "../../hooks/useResponsiveColumns";

export default function HomeScreen() {
  const numColumns = useResponsiveColumns({
    minWidth: 200,
    minColumns: 1,
    maxColumns: 4,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drunken Noodle Shopping List</Text>
      <FlatList
        data={shoppingListData}
        keyExtractor={(item) => item.id.toString()}
        key={numColumns}
        numColumns={numColumns}
        renderItem={({ item }) => (
          //<GroceryItemCard item={item} handleButton={addToCart} /> //Generates Add To Cart Button
          <ItemCard item={item} />
        )}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={StyleSeparator}
      />
    </View>
  );
}
