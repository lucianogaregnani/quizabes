export const reformatText = (text: string) => {
  let newText = text;
  if (text.includes("&quot;")) newText = newText.replace(/&quot;/g, '"');

  if (text.includes("#039;")) newText = newText.replace(/#039;/g, "'");

  if (text.includes("&'s")) newText = newText.replace(/&'s/g, "'s");

  return newText;
};
