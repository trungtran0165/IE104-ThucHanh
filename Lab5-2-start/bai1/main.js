const customName = document.getElementById('customname'); // Enter custom name
const randomize = document.querySelector('.randomize'); // Randomize button 
const story = document.querySelector('.story'); // Story text

function randomValueFromArray(array) { // Trả về 1 giá trị ngẫu nhiên từ trong mảng lưu trữ các giá trị
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in awe for a few moments. :insertz: Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
// Biến lưu văn bản đầu tiên
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']; // Biến lưu 3 đoạn văn bản tiếp theo 
let insertY = ['the soup kitchen', 'Disneyland', 'the White House']; // Biến lưu 3 đoạn văn bản tiếp theo 
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
// Biến lưu 3 đoạn văn bản cuối cùng

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText; // Biến lưu văn bản mới

    let xItem = randomValueFromArray(insertX); // Lấy giá trị ngẫu nhiên từ mảng insertX
    let yItem = randomValueFromArray(insertY); // Lấy giá trị ngẫu nhiên từ mảng insertY
    let zItem = randomValueFromArray(insertZ); // Lấy giá trị ngẫu nhiên từ mảng insertZ

    newStory = newStory.replace(':insertx:', xItem); // Thay thế chỗ dữ liệu trong newStory :insertx:
    newStory = newStory.replace(':insertx:', xItem); // Thay thế chỗ dữ liệu trong newStory :inserty:
    newStory = newStory.replace(':inserty:', yItem); // Thay thế chỗ dữ liệu trong newStory :insertz:
    newStory = newStory.replace(':insertz:', zItem); // Thay thế chỗ dữ liệu trong newStory :insertz:

    if (customName.value !== '') { // Nếu customName khác rỗng thì thay thế tên Bob bằng customName
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById('uk').checked) { // Nếu ô radio UK được chọn thì thực hiện chuyển đổi độ F và cân nặng
        const weight = Math.round(300 * 0.071429) + ' stone';
        const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    story.textContent = newStory; // Hiển thị văn bản mới
    story.style.visibility = 'visible'; // Hiển thị văn bản
}
// 22521569 - Trần Quốc Trung

