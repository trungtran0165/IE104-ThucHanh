const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <= 5; i++) { // Lặp qua 5 hình ảnh
    const newImage = document.createElement('img'); // Tạo một thẻ img mới
    newImage.setAttribute('src', 'images/pic' + i + '.jpg'); // Đặt thuộc tính src của thẻ img mới
    thumbBar.appendChild(newImage); // Thêm thẻ img mới vào thumbBar
    newImage.onclick = function (e) { // Khi click vào một hình ảnh thì thực hiện hàm 
        const src = e.target.getAttribute('src');
        displayedImage.setAttribute('src', src);
    }
    // 22521569 - Trần Quốc trung
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    const btnClass = btn.getAttribute('class'); // Lấy class của button
    if (btnClass === 'dark') { // Nếu class của button là 'dark' thì thực hiện chuyển sang 'light'
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else { // Nếu class của button là 'light' thì thực hiện chuyển sang 'dark'
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
// 22521569 - Trần Quốc Trung


