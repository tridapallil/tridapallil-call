import dayjs from 'dayjs'

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
  }>
}

interface BlockedDates {
  blockedWeekDays: number[]
  blockedDates: number[]
}

type CalendarWeeks = CalendarWeek[]

export const buildCalendarDays = (
  currentDate: dayjs.Dayjs,
  blockedDates: BlockedDates,
) => {
  const daysInMonthArray = Array.from({
    length: currentDate.daysInMonth(),
  }).map((_, i) => {
    return currentDate.set('date', i + 1)
  })

  const firstWeekDay = currentDate.get('day')

  const previousMonthFillArray = Array.from({
    length: firstWeekDay,
  })
    .map((_, i) => {
      return currentDate.subtract(i + 1, 'day')
    })
    .reverse()

  const lastDayInCurrentMonth = currentDate.set(
    'date',
    currentDate.daysInMonth(),
  )
  const lastWeekDay = lastDayInCurrentMonth.get('day')

  const nextMonthFillArray = Array.from({
    length: 7 - (lastWeekDay + 1),
  }).map((_, i) => {
    return lastDayInCurrentMonth.add(i + 1, 'day')
  })

  const calendarDays = [
    ...previousMonthFillArray.map((date) => {
      return { date, disabled: true }
    }),
    ...daysInMonthArray.map((date) => {
      return {
        date,
        disabled:
          date.endOf('day').isBefore(new Date()) ||
          blockedDates.blockedWeekDays.includes(date.get('day')) ||
          blockedDates.blockedDates.includes(date.get('date')),
      }
    }),
    ...nextMonthFillArray.map((date) => {
      return { date, disabled: true }
    }),
  ]

  const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
    (weeks, _, i, original) => {
      const isNewWeek = i % 7 === 0

      if (isNewWeek) {
        weeks.push({
          week: i / 7 + 1,
          days: original.slice(i, i + 7),
        })
      }

      return weeks
    },
    [],
  )
  return calendarWeeks
}

export default buildCalendarDays
