import moment from 'moment.min.js'
import util from '../utils/util.js'

function momentTime(timestamp, length) {
  if (length === 'L') {
    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
  }
  if (length === 'S') {
    return moment(timestamp).format('YYYY-MM-DD')
  }
  if(length==='TIME'){
    return moment(timestamp).format('HH:mm')
  }
}

function getLastDay(datetime){
  let timeStamp = Date.parse(datetime)
  let timestamp = timeStamp - (1 * 24 * 60 * 60 * 1000)
  let lastDay = util.timespanToStr(timestamp, 'YYYY-MM-DD')
  // let lastDay = moment(timestamp, 'YYYY-MM-DD')
  return lastDay
}

function getNextDay(datetime){
  let timeStamp = Date.parse(datetime)
  let timestamp = timeStamp + (1 * 24 * 60 * 60 * 1000)
  let nextDay = util.timespanToStr(timestamp, 'YYYY-MM-DD')
  return nextDay;
}

function getDateStr(datetime){
  let theDateStr = datetime.split(" ")
  return theDateStr[0]
}

module.exports = {
  momentTime: momentTime,
  getLastDay: getLastDay,
  getNextDay: getNextDay,
  getDateStr: getDateStr
}
