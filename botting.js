
document.addEventListener('DOMContentLoaded', function () {
    const categoryDropdown = document.getElementById('category');
    const subCategoryDropdown = document.getElementById('sub-category');
    const totalPriceElement = document.getElementById('total-price');

    function updateTotalPrice() {
        const categoryPrice = parseFloat(categoryDropdown.value) || 0;
        const subCategoryPrice = parseFloat(subCategoryDropdown.value) || 0;
        const totalPrice = categoryPrice + subCategoryPrice;
        totalPriceElement.textContent = `$${totalPrice}`;
    }

    categoryDropdown.addEventListener('change', updateTotalPrice);
    subCategoryDropdown.addEventListener('change', updateTotalPrice);
});
