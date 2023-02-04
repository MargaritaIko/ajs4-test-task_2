export default function sortHealthCharacters(chars) {
  return chars.sort((a, b) => b.health - a.health);
}
