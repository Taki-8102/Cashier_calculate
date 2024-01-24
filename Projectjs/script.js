function user_input(products) {
    let ls_products = [];

    for (let i = 0; i < products; i++) {
        let product_price = parseInt(prompt("Enter Price:"));

        // Check if the input is a valid number
        if (!isNaN(product_price)) {
            ls_products.push(product_price);
        } else {
            alert('Invalid input. Please enter a number.');
            i--;
        }

        // Show price after each input
        show_price(ls_products);
    }

    let sum_price = ls_products.reduce((acc, current) => acc + current, 0);

    return { ls_products, sum_price };
}

// Assuming show_price is a separate function
function show_price(ls_products) {
    let pricesHtml = ''; // Initialize an empty string to hold the HTML content
    let j = 1;

    for (let i of ls_products) {
        pricesHtml += `<h6>${j} : ${i} THB</h6>`;
        j++;
    }
    return pricesHtml; // Return the HTML content
}
function display(elementId, value) {
  document.getElementById(elementId).innerHTML = value 
}

let products = parseInt(prompt("Enter Number of products"));
display("number_P", products)



let { ls_products, sum_price } = user_input(products);

let User_money = parseInt(prompt("Enter User money:"));

let result_money = User_money - sum_price;

console.log("_______^^_______");
console.log(products + " products");

show_price(ls_products);
let display_price = show_price(ls_products)
display("list_M", display_price)


console.log(sum_price + " All price of products");
display("sum_M", sum_price)


console.log(User_money + " User_money");
display("custommer_money", User_money)


console.log(result_money + " Money before minus price");
console.log("Cash give back to User:");
display("result_money", result_money)



let denominations = [1000, 500, 100, 50, 20, 10, 5, 1];

        let changeHtml = ''; // Initialize an empty string to hold the HTML content

        for (let i = 0; i < denominations.length; i++) {
            let denomination = denominations[i];

            if (result_money >= denomination) {
                let count = Math.floor(result_money / denomination);
                changeHtml += `${denomination} : ${count} bill<br>`;
                result_money %= denomination;
            }
        }

        // Set the innerHTML of the element with the id 'Change_money'
display("Change_money", changeHtml)