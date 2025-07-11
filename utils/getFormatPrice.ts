export default function getFormatPrice(price: number): string {
    if(price !== 0 && !price) return "N/A";
    
    const strPrice = price.toString();
    const priceLength = strPrice.length;
    const displayDigit = priceLength - 3;
    if(displayDigit > 0) {
        return `${strPrice?.slice(0, displayDigit)}, ${strPrice?.slice(displayDigit)}`;
    }else {
        return strPrice;
    }
}