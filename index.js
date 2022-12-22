const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batterCounter(totalAmount, element) {
    return totalAmount + element;
}

const totalBatteries = batteryBatches.reduce(batterCounter,  0)
// Code your solution here
