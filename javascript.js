

var type_val = 1;
var color_val = 1;
var char_val = 1;

var final_price = 0;
var base_price = 0;

const comm_type = document.getElementById("comm-type");
const comm_color = document.getElementById("comm-color");
const comm_char = document.getElementById("comm-char-num");

const comm_price = document.getElementById("comm-price");




function copyToClipboard(txt) {
    navigator.clipboard.writeText(txt).then(() => {
        alert("Copied to clipboard");
    })
    .catch(err => {
        alert("Failed to copy for some reason");
    });
}


window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    comm_type.value = "1"
    comm_color.value = "1"
    comm_char.value = "1"
}



function typeChange() {
    type_val = comm_type.value;
    calcPrice();
}

function colorChange() {
    color_val = comm_color.value;
    calcPrice();
}

function charChange() {
    char_val = comm_char.value;
    calcPrice();
}




function calcPrice() {
    if (type_val == 1) {
        if (color_val == 1) {
            base_price = 22;
        } else if (color_val == 2) {
            base_price = 32;
        } else if (color_val == 3) {
            base_price = 42;
        }
        final_price = base_price + base_price * 0.6 * (char_val - 1);
    } else if (type_val == 2) {
        if (color_val == 2) {
            base_price = 70;
        } else if (color_val == 3) {
            base_price = 87;
        } else {
            color_val = 2;
            comm_color.options[1].selected = true;
            calcPrice();
            return;
        }
        final_price = base_price + base_price * 0.75 * (char_val - 1) ** (1.1);
    } else if (type_val == 3) {
        if (color_val == 3) {
            base_price = 129;
        } else {
            color_val = 3;
            comm_color.options[2].selected = true;
            calcPrice();
            return;
        }
        final_price = base_price + base_price * 0.75 * (char_val - 1);
    }
    final_price = Math.round(final_price * Math.pow(10, 1)) / Math.pow(10, 1)
    comm_price.textContent = "Price=" + final_price;
}





if (comm_type != null && comm_color != null && comm_char != null && comm_price != null) {
    comm_type.addEventListener('change', typeChange);
    comm_color.addEventListener('change', colorChange);
    comm_char.addEventListener('change', charChange);
    calcPrice()
}


if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    console.log('MetaMask is not installed!');
}

const ethereumButton = document.getElementById('aaaa');
const sendEthButton = document.getElementById('bbbb');

let accounts = [];

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
    ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [
                {
                    from: accounts[0],
                    to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
                    value: '0x29a2241af62c0000',
                    gasPrice: '0x09184e72a000',
                    gas: '0x2710',
                },
            ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
});

ethereumButton.addEventListener('click', () => {
    getAccount();
});

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}

