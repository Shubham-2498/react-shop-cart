
export default function formatter(num) {
    return "$"+ Number(num.toFixed(1)).toLocaleString()+" ";
}
