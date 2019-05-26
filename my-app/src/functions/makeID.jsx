
export const makeID = () => {
  var text_id = '';
  var character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 20; i++){
    text_id += character.charAt((Math.floor(Math.random() * character.length)))
  }
  return text_id
}
