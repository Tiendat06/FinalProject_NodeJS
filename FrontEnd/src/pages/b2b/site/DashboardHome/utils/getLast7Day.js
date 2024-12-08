
function getLast7Day(){
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const last7Days = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        const dayName = daysOfWeek[date.getDay()];
        last7Days.unshift(dayName); // Thêm vào đầu mảng
    }

    return last7Days;
}

export default getLast7Day;