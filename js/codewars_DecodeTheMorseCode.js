// https://www.codewars.com/kata/54b724efac3d5402db00065e
decodeMorse = function(morseCode){
  let decodedMessage = "";
  morseCode.trim()
    .split(/\s{1,2}/)
    .forEach(element => {
      if (element.length > 0) {
        decodedMessage = `${decodedMessage}${MORSE_CODE[element]}`;
      } else {
        decodedMessage = `${decodedMessage} `;
      }
    })
  return decodedMessage;
}
