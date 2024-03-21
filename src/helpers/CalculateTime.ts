import moment from 'moment'

export function calculateTime(created:Date) {
    const createdDate = moment(created)

    const months = moment().diff(createdDate, 'months');

    return months
}