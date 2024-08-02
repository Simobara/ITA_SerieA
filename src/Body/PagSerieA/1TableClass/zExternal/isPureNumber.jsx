// utils.js

/**
 * Verifica se una stringa è composta solo da numeri.
 * @param {string} str - La stringa da verificare.
 * @returns {boolean} - `true` se la stringa è composta solo da numeri, `false` altrimenti.
 */
export const isPureNumber = (str) => /^\d+$/.test(str);
