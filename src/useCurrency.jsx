const intl = new Intl.NumberFormat("en-Ghana", {
  style: "currency",
  currency: "GHS",
});


export const priceConverter = ( price) =>  intl.format(price);
export default function useCurrency(price) {
  return intl.format(price);
}
