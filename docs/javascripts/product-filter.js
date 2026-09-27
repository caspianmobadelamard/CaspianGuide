/* ============================================
   فیلتر محصولات — CaspianGuide
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const filterType = document.getElementById('filter-type');
  const filterCapacity = document.getElementById('filter-capacity');
  const filterPressure = document.getElementById('filter-pressure');
  const filterFuel = document.getElementById('filter-fuel');

  if (!filterType) return;

  const filters = [filterType, filterCapacity, filterPressure, filterFuel];

  filters.forEach((filter) => {
    filter.addEventListener('change', applyFilters);
  });

  function applyFilters() {
    const typeValue = filterType.value;
    const capacityValue = filterCapacity.value;
    const pressureValue = filterPressure.value;
    const fuelValue = filterFuel.value;

    const cards = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach((card) => {
      const cardType = card.dataset.type || '';
      const cardCapacity = card.dataset.capacity || '';
      const cardPressure = card.dataset.pressure || '';
      const cardFuel = card.dataset.fuel || '';

      const matchesType = !typeValue || cardType === typeValue;
      const matchesCapacity = !capacityValue || cardCapacity === capacityValue;
      const matchesPressure = !pressureValue || cardPressure === pressureValue;
      const matchesFuel = !fuelValue || cardFuel === fuelValue;

      if (matchesType && matchesCapacity && matchesPressure && matchesFuel) {
        card.classList.remove('hidden');
        card.style.animation = 'cardSlideIn 0.5s ease backwards';
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    const noResults = document.getElementById('no-results');
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  window.resetFilters = function () {
    filters.forEach((f) => (f.value = ''));
    applyFilters();
  };

  console.log('✅ [Filter] Product filter loaded');
});