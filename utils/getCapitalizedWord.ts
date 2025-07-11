export default function getCapitalizedWord(word: string): string {
    if(!word) return "N/A";
    return word.slice(0, 1).toUpperCase() + word.slice(1);
}