const MODE = ["Organic", "Semi-Detached", "Embedded"]

const TABLE = [
    [2.4, 1.05, 2.5, 0.38],
    [3.0, 1.12, 2.5, 0.35],
    [3.6, 1.20, 2.5, 0.32]
];

const el_model = document.getElementById("model");
const el_effort = document.getElementById("effort");
const el_productivity = document.getElementById("productivity");
const el_time = document.getElementById("time");
const el_staff = document.getElementById("staff");
const el_price = document.getElementById("price");

const el_size = document.getElementById("size");
const el_salary = document.getElementById("salary");

[el_size, el_salary].map(el => el.addEventListener("input", onChange))

function onChange(e) {
    if (e.target.value === '' || e.target.value < 0) e.target.value = 0;
    cocomo(el_salary.value, el_size.value / 1000);
}

cocomo(0,1)

function cocomo(rate, size) {

    let type;

    // Check the mode according to size
    if (size <= 50)
        type = 0; // organic

    else if (size > 50 && size <= 300)
        type = 1; // semi-detached

    else if (size > 300)
        type = 2; // embedded

    // Set the model
    const model = MODE[type];

    // Calculate Effort
    const effort = TABLE[type][0] * (size ** TABLE[type][1]);

    // Calculate Time
    const time = TABLE[type][2] * (effort ** TABLE[type][3]);

    // Calculate Persons Required
    const staff = effort / time;

    // Calculate Productivity
    const productivity = size * 1000 / effort;

    // Calculate Price
    const price = rate * effort;

    el_model.innerHTML = model;
    el_effort.innerHTML = effort.toFixed(2);
    el_productivity.innerHTML = productivity.toFixed(2);
    el_time.innerHTML = time.toFixed(2);
    el_staff.innerHTML = Math.ceil(staff);
    el_price.innerHTML = price.toFixed(2);

}