function phoneNumberInput() {
    // grab the value of what the user is typing into the input
    var input = document.getElementById("phone");
    // next, we're going to format this input with the `formatInput` function
    var formatInput = formatPhoneNumber(input.value);
    // Then we'll set the value of the input to the formattedValue we generated with the formatPhoneNumber
    input.value = formatInput;
}

function formatPhoneNumber(value) {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;
    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, '');
    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;
    // we need to return the value with no formatting if its less than four digits
    if (phoneNumberLength < 4) return phoneNumber;
  
    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
  
    // finally, if the phoneNumberLength is greater then seven, we add the last bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 9)}`;
}

