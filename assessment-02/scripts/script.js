function displayItemSummary(items, quantities, prices) {
    let summary = "";
    let totalCost = 0;

    for (let i = 0; i < items.length; i++) {
        const quantity = parseInt(quantities[i], 10) || 0;
        const price = prices[i];
        const itemCost = quantity * price;

        totalCost += itemCost;

        summary += `<p>${items[i]}: ${quantity} (Price: $${price.toFixed(2)} each) - Cost: $${itemCost.toFixed(2)}</p>`;
    }

    return { summary, totalCost };
}

function displayOrderSummary() {
    const name = document.getElementById('name').value;

    // Prices for each item category
    const drinkPrices = [1.5, 1.5, 1.5, 1.5, 1.5];
    const sandwichPrices = [5, 6, 7, 8, 4];
    const desertPrices = [4, 5, 6, 3, 5];

    const drinkQuantities = [
        document.getElementById('drinkNum1').value,
        document.getElementById('drinkNum2').value,
        document.getElementById('drinkNum3').value,
        document.getElementById('drinkNum4').value,
        document.getElementById('drinkNum5').value
    ];

    const sandwichQuantities = [
        document.getElementById('sanNum1').value,
        document.getElementById('sanNum2').value,
        document.getElementById('sanNum3').value,
        document.getElementById('sanNum4').value,
        document.getElementById('sanNum5').value
    ];

    const desertQuantities = [
        document.getElementById('desNum1').value,
        document.getElementById('desNum2').value,
        document.getElementById('desNum3').value,
        document.getElementById('desNum4').value,
        document.getElementById('desNum5').value
    ];

    const drinkSummary = displayItemSummary(["Water", "Lemonade", "Iced Tea", "Mtn Dew", "Dr Pepper"], drinkQuantities, drinkPrices);
    const sandwichSummary = displayItemSummary(["Ham & cheese", "BLT", "Salami & Cheddar", "PB & J", "Reuben"], sandwichQuantities, sandwichPrices);
    const desertSummary = displayItemSummary(["French Fries", "Onion Rings", "Cherry Pie", "Apple Pie", "Strawberry Shortcake"], desertQuantities, desertPrices);

    const orderSummary = `
        <h2>Order Summary for ${name}</h2>
        
        <h3>Drinks</h3>
        ${drinkSummary.summary}

        <h3>Sandwiches</h3>
        ${sandwichSummary.summary}

        <h3>Sides and Desserts</h3>
        ${desertSummary.summary}

        <h3>Total Order Cost: $${(drinkSummary.totalCost + sandwichSummary.totalCost + desertSummary.totalCost).toFixed(2)}</h3>
    `;

    document.getElementById('orderSummary').innerHTML = orderSummary;
}
