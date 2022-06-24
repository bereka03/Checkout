let add_icons = document.querySelectorAll('.add');
let remove_icons = document.querySelectorAll('.remove');
let num_input = document.querySelectorAll('.num-input');
let total_price = document.querySelector('.total-price');
let prices = {"backbag": 55, "Shoes": 74, 'shipping': 19}

function add() {
    add_icons[0].addEventListener('click', () => {
        num_input[0].value++;
        total_price.innerHTML = Number(total_price.textContent) + prices.backbag;
    })
    add_icons[1].addEventListener('click', () => {
        num_input[1].value++;
        total_price.innerHTML = Number(total_price.textContent) + prices.Shoes;
    })

}
function remove() {
    remove_icons[0].addEventListener('click', () => {
        if (num_input[0].value != 0){
            num_input[0].value--;
            console.log(total_price.textContent);
            total_price.innerHTML = Number(total_price.textContent) - prices.backbag;
        }
    })
    remove_icons[1].addEventListener('click', () => {
        if (num_input[1].value != 0){
            num_input[1].value--;
            total_price.innerHTML = Number(total_price.textContent) - prices.Shoes;
        }
    })
}
add();
remove();

