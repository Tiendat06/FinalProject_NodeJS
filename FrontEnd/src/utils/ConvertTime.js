
function ConvertTime (isoTime, option = 1) {
    const date = new Date(isoTime);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const formattedTime = `${hours}:${minutes}`;
    const formattedDate = `${day}-${month}-${year}`;
    return option === 1? formattedTime: formattedDate;
}

export default ConvertTime;