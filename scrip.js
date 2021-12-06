//B1: Xđ các phần tử mà chúng ta sẽ tác động
let bntChange = document.getElementById('btnChange');
let doanvan = document.getElementById('doanvan');
let bntAddmore = document.getElementById('btnAddmore');
let vungchua = document.getElementById('vungchua');

//B2: Bắt sự kiện btnChange
bntChange.addEventListener('click, hamgido');
bntAddmore.addEventListener('click,hamthemvao');

//B3: Định nghĩa hàm gì đó
function hamgido(){
    doanvan.textContent = 'Nội dung mới';
    doanvan.style.color = 'red';
    doanvan.style.backgroundColor = 'yellow';
}

function hamthemvao(){
    let tieude = document.createElement('h2');
    tieude.textContent = 'Nội dung của thẻ h2';
    vungchua.appendChild(tieude)
}