function calculateTax(amount) {
    const taxRate = 0.1;
    return amount * taxRate;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function isPalindrome(word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    return discountPrice;
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };