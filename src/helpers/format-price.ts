// utils/formatPrice.ts
export function formatPrice(value: number | string) {
  let num = Number(typeof value === "string" ? value.replace(",", ".") : value);

  // Si Number() falla (NaN) → devolvemos "0,00 €"
  if (isNaN(num)) num = 0;

  return num.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  });
}
