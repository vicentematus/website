import type { Item } from "src/types";

const ListItem: React.FC<{ item: Item }> = ({ item }) => {
  const { description } = item;
  return <li className="  text-white"> - {description}</li>;
};

export default ListItem;
