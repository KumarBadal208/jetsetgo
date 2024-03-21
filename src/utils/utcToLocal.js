export function convertUTCtoLocalDate(utcDateTimeString) {
    const utcDate = new Date(utcDateTimeString);
    const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    const localDateString = `${year}-${month}-${day}`;
    return localDateString;
}

export function convertUTCtoLocalTime(utcDateTimeString){
    const utcDate = new Date(utcDateTimeString);
    const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
    const hours = String(localDate.getHours()).padStart(2, '0');
    const minutes = String(localDate.getMinutes()).padStart(2, '0');
    const localDateTimeString = `${hours}:${minutes}`;
    return localDateTimeString;
}