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


// //Conditional rendering: 2
// export default function Todo({task, isdone}) {
//    if(isdone){
//     return <li>Finished: {task}</li>
//    }
//    return <li>Work On: {task}</li>
// }

//Conditional rendering 3: ternary operator
// export default function Todo({task, isdone}) {
//    return (
//       <li> {isdone? 'Finished' : 'Work On'} : {task}</li>
//    )
// }


//Conditional rendering 4: && operator
// export default function Todo({task, isdone}) {
//     return (
//         <li>{task} {isdone && ':Done'}</li>
//     )
// }



//Conditional rendering 5: || operator
// export default function Todo({task, isdone}) {
//     return (
//         <li>{task} {isdone || ':Do it'}</li>
//     )
// }




// //Conditional rendering: 6
export default function Todo({ task, isdone }) {
   let listItem;
   if (isdone) {
      listItem = <li>Finished: {task}</li>
   }
   else {
      listItem = <li>Work On: {task}</li>
   }
   return listItem;
}