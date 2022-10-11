const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

function getWorthyWorkers(workers) {
    let workersName = [];

    workers.forEach(element => {
        if(element.salary > 1000) {
            workersName.push(element.name)
        }
    });

    return workersName
}

console.log(getWorthyWorkers(workers))