/*
https://www.codewars.com/kata/57cc975ed542d3148f00015b/
*/

function check(list, x) {
    for (let i = 0; i < list.length; i++      ) {
        const item = list[i];
        if (item === x) {
            return true;
        }
    }

    return false;
}


console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), '->', true);
console.log(check([66, 101], 66), '->', true);
console.log(check(['t', 'e', 's', 't'], 'e'), '->', true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), '->', false);