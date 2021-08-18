const formatCurrentDateToTimestamp = ( dt ) => `${ dt.split('-').reverse().join('-') }-01`;
const formatNextDateToTimestamp = ( dt ) => {
    let [ year, month ] = dt.split('-').reverse();

    if( month == '12' ) {
        year = String( Number( year ) + 1 );
        month = '01';
    }

    let mnth = String( Number(month) + 1 );
    
    if( mnth.length === 1 )
        mnth = `0${mnth}`;

    return `${ year }-${ mnth }-01`;
}

const datesArr = [ '07-2021', '04-2021', '03-2021', '01-2021', '08-2021', '12-2021', '01-2021' ];

const currentDates = datesArr.map(formatCurrentDateToTimestamp);
const nextDates = datesArr.map(formatNextDateToTimestamp);

const getMonthsLimits = currentDates.map( ( currentDate, i ) => `created_at BETWEEN '${ currentDate }' AND '${ nextDates[i] }'`).join(' OR ');

console.log(getMonthsLimits);
