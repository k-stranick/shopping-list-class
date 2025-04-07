import { images } from "../../assets/images";
import { styles } from "./ItemCard.style";
import { Item } from "../../types/interfaces/products/Product.types";
import { View, Text, Image } from "react-native";

type Props = {
  item: Item;
};

export default function ItemCard({ item }: Readonly<Props>) {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={images[item.image]}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
}
