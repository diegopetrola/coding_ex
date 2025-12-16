from datetime import datetime
from typing import List


def check_dates(records: List[List[str]]):
    dateFormat = "%Y-%m-%d"
    dateFormatReverse = "%Y-%d-%m"

    def tryConvertDate(date: datetime):
        try:
            newDate = datetime.strptime(date.strftime(dateFormatReverse), dateFormat)
        except:
            return date
        return newDate

    res = [0, 0, 0]
    for val in records:
        startDate = datetime.strptime(val[0], dateFormat)
        endDate = datetime.strptime(val[1], dateFormat)

        newStartD = tryConvertDate(startDate)
        newEndD = tryConvertDate(endDate)

        numPossible = 0
        numPossible += 1 if startDate <= endDate else 0
        numPossible += 1 if startDate <= newEndD and newEndD != endDate else 0
        numPossible += 1 if newStartD <= endDate and newStartD != startDate else 0
        numPossible += (
            1
            if newStartD <= newEndD and newStartD != startDate and newEndD != endDate
            else 0
        )

        if numPossible != 1:
            res[2] += 1
        elif numPossible == 1 and startDate <= endDate:
            res[0] += 1
        else:
            res[1] += 1

    return res


records = [
    ["2015-04-04", "2015-05-13"],  # correct
    ["2013-06-18", "2013-08-05"],  # correct
    ["2001-02-07", "2001-03-01"],  # correct
    ["2011-10-08", "2011-08-14"],  # recoverable
    ["2009-08-21", "2009-04-12"],  # recoverable
    ["1996-01-24", "1996-03-09"],  # uncertain
    ["2000-10-09", "2000-11-20"],  # uncertain
    ["2002-02-07", "2002-12-10"],  # uncertain
]


print(check_dates(records))
