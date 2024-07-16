exports.coinCounterClosure = (amount) => {
    // Convert dollar amount to cents
    let cents = Math.round(amount * 100);

    // Function factory for creating count functions for each denomination
    function makeCountFunction(denomination) {
        return function count() {
            const numCoins = Math.floor(cents / denomination);
            cents %= denomination;
            return numCoins;
        };
    }

    // Create count functions for each denomination
    const quarters = makeCountFunction(25);
    const dimes = makeCountFunction(10);
    const nickels = makeCountFunction(5);
    const pennies = makeCountFunction(1);

    // Calculate number of each coin
    const quartersCount = quarters();
    const dimesCount = dimes();
    const nickelsCount = nickels();
    const penniesCount = pennies();

    return {
        quarters: quartersCount,
        dimes: dimesCount,
        nickels: nickelsCount,
        pennies: penniesCount
    };
}


exports.coinCounterRecursive = (amount) => {
    // Convert dollar amount to cents to avoid floating point issues
    let cents = Math.round(amount * 100);

    // Define coin denominations in cents
    const quarters = 25;
    const dimes = 10;
    const nickels = 5;
    const pennies = 1;

    // Recursive function to count coins
    function countCoins(cents, denomination) {
        if (cents <= 0) {
            return {};
        }

        let coinName;
        if (denomination === quarters) {
            coinName = 'quarters';
        } else if (denomination === dimes) {
            coinName = 'dimes';
        } else if (denomination === nickels) {
            coinName = 'nickels';
        } else if (denomination === pennies) {
            coinName = 'pennies';
        }

        // Calculate number of coins of current denomination
        const numCoins = Math.floor(cents / denomination);
        const remainingCents = cents % denomination;

        if (numCoins > 0) {
            // Recursively calculate remaining change
            const rest = countCoins(remainingCents, denomination);
            rest[coinName] = numCoins;
            return rest;
        } else {
            // Move to next smaller denomination
            return countCoins(cents, denomination / 10);
        }
    }

    // Start recursion with quarters (largest denomination)
    return countCoins(cents, quarters);
}