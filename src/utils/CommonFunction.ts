export function convertMinutesToHoursMinutes(minutes:any) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
}

export function formatDate(dateString:any) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
        weekday: 'short', // "Mon"
        day: '2-digit',   // "20"
        month: 'short'    // "May"
    }).replace(',', '');
}
