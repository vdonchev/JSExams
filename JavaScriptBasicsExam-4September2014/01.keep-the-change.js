function calculateTip(data) {
    let [bill, mood] = data;
    switch (mood) {
        case 'happy':
            return (bill * 0.1).toFixed(2);
        case 'married':
            return (bill * 0.0005).toFixed(2);
        case 'drunk':
            return (Math.pow(bill * 0.15, Number((bill * 0.15).toFixed(2)[0]))).toFixed(2);
        default:
            return (bill * 0.05).toFixed(2);
    }
}

// console.log(calculateTip(["1230.83","drunk"]));
console.log(calculateTip(["716.00","married"]));
// console.log(calculateTip(["120.44","happy"]));