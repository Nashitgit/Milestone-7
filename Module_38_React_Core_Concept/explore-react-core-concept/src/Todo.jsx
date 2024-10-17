// export default function Todo({task}) {
//     return (
//         <li>Task: {task}</li>
//     )
// }


//Conditional rendering: 1
// export default function Todo({task, isdone}) {
//    if (isdone === true){
//     return <li>Finished: {task}</li>
//    }
//    else {
//     return <li>Work On: {task}</li>
//    }
// }


//Conditional rendering: 2
export default function Todo({task, isdone}) {
   if(isdone){
    return <li>Finished: {task}</li>
   }
   return <li>Work On: {task}</li>
}
