// Your code here
let twoRows = [
["Gray", "Worm", "Security", 1],
["Olivioa", "Emma", "Ave", 2]
]
let createEmployeeRecord= function(array){
    return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
   }
}
function createEmployeeRecords(arryOfArrays){
let theArray = []
 arryOfArrays.forEach(e => {
     theArray.push(createEmployeeRecord(e))
 });
//    return array.map(arr => {
//     return createEmployeeRecords(arr)  })
   return theArray
   }
   
   function createEmployee(arryOfArrays){
    let theArray = []
     arryOfArrays.forEach(e => {
         theArray.push(createEmployeeRecord(e))
     });
    //    return array.map(arr => {
    //     return createEmployeeRecords(arr)  })
       return theArray
       }

   function createTimeInEvent(obj, timeStamp){
       let hour = parseInt(timeStamp.split(' ')[1])
       let date = timeStamp.split(' ')[0]
       obj.timeInEvents.push({type: "TimeIn", hour: hour, date: date})
       return obj
   }

   function createTimeOutEvent(obj, timeStamp){
       let hour = parseInt(timeStamp.split(' ')[1])
       let date = timeStamp.split(' ')[0]
       obj.timeOutEvents.push({type: "TimeOut", hour: hour, date: date})
       return obj
}
   function hoursWorkedOnDate(obj, timeStamp){
       let timeIn = obj.timeInEvents.find(x => x.date === timeStamp)
       let timeOut = obj.timeOutEvents.find(x => x.date === timeStamp)
       let result = (timeOut.hour - timeIn.hour) / 100
      return result
    
   }
   function wagesEarnedOnDate(obj, timeStamp){
     return hoursWorkedOnDate(obj, timeStamp) * obj.payPerHour

   }

   function allWagesFor(obj){
       let eligibleDates = obj.timeInEvents.map(function(e) {
           return e.date
       })
       let payable = eligibleDates.reduce(function(memo, d){
           return  memo + wagesEarnedOnDate(obj, d)
       }, 0)
       return payable
    }

     function findEmployeeByFirstName( srcArray, firstName){
       return srcArray.find(x => {return x.firstName === firstName})
   }


   function calculatePayroll(array){
       let sum = array.map((e) => allWagesFor(e))
       return sum.reduce((num, sum) => num + sum)
   }
    