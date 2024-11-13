
function ConvertDateString(dateString, options=1) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    return options === 1? `${day}-${month}-${year}` : `${year}-${month}-${day}`;
}

export default ConvertDateString;