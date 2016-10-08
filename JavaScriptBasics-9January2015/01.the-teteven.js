function calculateFuelConsumption(data) {
    for (let line of data) {
        let [model, fuel, road, luggage] = line.trim().split(/\s+/g);
        let totalConsumptionPer100Km = 10;
        if (fuel === 'gas') {
            totalConsumptionPer100Km *= 1.2;
        } else if (fuel === 'diesel') {
            totalConsumptionPer100Km *= 0.8;
        }

        totalConsumptionPer100Km += Number(luggage) * 0.01;
        let roadDistance = road === '1' ? 110 : 95;
        let roadSnowDistance = road === '1' ? 10 : 30;
        let roadConsumption = roadDistance * (totalConsumptionPer100Km / 100);
        let extraSnowConsumption = 0.3 * totalConsumptionPer100Km;
        roadConsumption += roadSnowDistance * (extraSnowConsumption / 100);

        console.log(`${model} ${fuel} ${road} ${Math.round(roadConsumption)}`);
    }
}

calculateFuelConsumption(['BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54']
);
