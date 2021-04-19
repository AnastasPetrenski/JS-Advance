function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    let input = document.querySelector('#inputs>textarea');
    const bestRestaurantName = document.querySelector('#bestRestaurant>p');
    const bestRestaurantWorkers = document.querySelector('#workers>p');

    function onClick() {
        let arr = JSON.parse(input.value);

        let restaurants = {};

        arr.forEach(line => {
            let [restName, tokens] = line.split(' - ');
            let workersArr = tokens.split(', ');
            let workers = [];

            for (const worker of workersArr) {
                let tokens = worker.split(' ');
                workers.push({ name: tokens[0], salary: Number(tokens[1]), position: tokens[2] });
            }

            if (restaurants[restName]) {
                workers = workers.concat(restaurants[restName].workers);
            }

            workers.sort((a, b) => b.salary - a.salary);

            let bestSalary = workers[0];
            let averageSalary = (workers.reduce((a, c) => a + c.salary, 0) / workers.length).toFixed(2);
            let position = bestSalary.position;

            restaurants[restName] = {
                workers,
                bestSalary,
                averageSalary,
                position
            }

        });

        let bestSalary = 0;
        let bestRestaurant = {};

        for (const name in restaurants) {
           
            if (restaurants[name].bestSalary.salary > bestSalary) {
                bestSalary = restaurants[name].bestSalary.salary;
                bestRestaurant = {
                    name,
                    workers: restaurants[name].workers,
                    bestSalary: restaurants[name].bestSalary.salary,
                    averageSalary: restaurants[name].averageSalary,
                    position: restaurants[name].position,
                    ...restaurants[name]
                }
            }
        }

        bestRestaurantName.textContent = bestRestaurant.name;
        let i = 1;

        let result = bestRestaurant.workers.map(worker => `<p>${i++}.Employee: ${worker.name} With salary: ${worker.salary} ${worker.position}</p>`).join('\n');
        bestRestaurantWorkers.innerHTML = result;

        console.log(bestRestaurant);
    }
}