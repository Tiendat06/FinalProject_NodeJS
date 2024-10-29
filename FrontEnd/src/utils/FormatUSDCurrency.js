
function FormatUSDCurrency({price = 0}) {
    const numericPrice = typeof price === 'number' ? price : Number(price);
    return numericPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export default FormatUSDCurrency;