/**
 * Format angka ke format mata uang Rupiah (IDR)
 * @param {number} amount 
 * @returns {string}
 */
export const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount || 0);
};
