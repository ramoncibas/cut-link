import AsyncStorage from "@react-native-async-storage/async-storage";

// Search for saved links
export const getLinksSave = async (key) => {
  const myLinks = await AsyncStorage.getItem(key)
  
  let linkSaves = JSON.parse(myLinks) || [];
  
  return linkSaves;
}

// Save a link to storage
export const saveLink = async (key, newLink) => {
  let linksStored = await getLinksSave(key);

  // If you have any links saved with that same ID / or duplicated, you must ignore it.
  const hasLink = linksStored.some(link => link.id === newLink.id);
  if (hasLink) {
    return;
  }

  linksStored.push(newLink)
  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
}

// Delete a specific link
export const deleteLink = async (links, id) => {
  let myLinks = links.filter((item) => {
    return (item.id !== id);
  });

  await AsyncStorage.setItem("cutlink", JSON.stringify(myLinks));
  return myLinks;
}