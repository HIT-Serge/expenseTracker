export default function getFormattedDate(date: Date, daysAgo: number = 0) {

    let setDate: Date = new Date(date.setDate(date.getDate() - daysAgo));
    let formattedDate = `${setDate.getFullYear()}-${setDate.getMonth() + 1}-${setDate.getDate()}`

    return formattedDate;
}

export function isoDate(date: any) {

    // console.log('isodate', date);
    return date.toLocaleDateString('nl-NL')

}