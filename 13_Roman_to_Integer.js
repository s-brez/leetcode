const valueMap = {
    I: 1, 
    V: 5, 
    X: 10, 
    L: 50, 
    C: 100, 
    D: 500, 
    M: 1000
};

// Key here was recognising differentiation between addition and subtraction cases is just a >/< comparison, plus handful edge cases

function romanToInt(s) {

    let number = 0;
    let current = 0;
    let previous = 0;

    if (s.length === 1) {
        return valueMap[s[0]];
    }

    for (let i = s.length - 1; i >= 0; i--) {

        current = valueMap[s[i]];

        // first number (final in iteration) will always be a base 10 addition case
        if (i === s.length - 1) {
            number += current;
        
        // modifier base 5's will always be larger than their preceding 10 for subtraction cases
        } else {
            if (current < previous) {
                number -= current;
            } else {
                number += current;
            }
        }
        previous = current;
    }
    return number;
};
