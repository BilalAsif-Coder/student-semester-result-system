
let body = document.querySelector("body");





// let studentData = [
//     {
//     Name:"bilal",
//     rollNumber:12,
//     semester: { 
//         semester1:{
//             math:79 ,
//             urdu:69 ,
//             eng:59 ,
//             phy:69 ,
//             che:59 
//         },
//          semester2:{
//             math:69 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester3:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester4:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester5:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         }

//     }

// },
//     {
//     Name:"Abdullah",
//     rollNumber:12,
//     semester: {
//         semester1:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester2:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester3:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester4:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester5:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         }

//     }

// },
//     {
//     Name:"Daniyal",
//     rollNumber:12,
//     semester: {
//         semester1:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester2:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester3:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester4:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester5:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         }

//     }

// },
//     {
//     Name:"Hasan",
//     rollNumber:12,
//     semester: {
//         semester1:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester2:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester3:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester4:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester5:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         }

//     }

// },
//     {
//     Name:"kamil",
//     rollNumber:12,
//     semester: {
//         semester1:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester2:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester3:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester4:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         },
//          semester5:{
//             math:79 ,
//             urdu:79 ,
//             eng:79 ,
//             phy:79 ,
//             che:79 
//         }

//     }

// },
// ]


// let why=studentData.map((data,index)=>{
//     console.log(data)
//      return `
//      <p>${data.Name}</p>
//      <div>
//         <p>${data.rollNumber}</p>
//         <div>
//             <h2>Semester 1</h2>
//             <p>${data.semester.semester1.math}</p>
//             <p>${data.semester.semester1.urdu}</p>
//             <p>${data.semester.semester1.eng}</p>
//             <p>${data.semester.semester1.phy}</p>
//             <p>${data.semester.semester1.che}</p>
//             <h2>Semester 2</h2>
//             <p>${data.semester.semester2.math}</p>
//             <p>${data.semester.semester2.urdu}</p>
//             <p>${data.semester.semester2.eng}</p>
//             <p>${data.semester.semester2.phy}</p>
//             <p>${data.semester.semester2.che}</p>
//             <h2>Semester 3</h2>
//             <p>${data.semester.semester3.math}</p>
//             <p>${data.semester.semester3.urdu}</p>
//             <p>${data.semester.semester3.eng}</p>
//             <p>${data.semester.semester3.phy}</p>
//             <p>${data.semester.semester3.che}</p>
//             <h2>Semester 4</h2>
//             <p>${data.semester.semester4.math}</p>
//             <p>${data.semester.semester4.urdu}</p>
//             <p>${data.semester.semester4.eng}</p>
//             <p>${data.semester.semester4.phy}</p>
//             <p>${data.semester.semester4.che}</p>
//             <h2>Semester 5</h2>
//             <p>${data.semester.semester5.math}</p>
//             <p>${data.semester.semester5.urdu}</p>
//             <p>${data.semester.semester5.eng}</p>
//             <p>${data.semester.semester5.phy}</p>
//             <p>${data.semester.semester5.che}</p>
//         </div>
//     </div>
//     `
// })

//  console.log(why)
//  body.innerHTML=why.join("")








let studentData = [
    {
        Name: "bilal",
        rollNumber: 11,
        semester: {
            semester1: {
                math: 79,
                urdu: 69,
                eng: 59,
                phy: 69,
                che: 59
            },
            semester2: {
                math: 69,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester3: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester4: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester5: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            }

        }

    },
    {
        Name: "Abdullah",
        rollNumber: 12,
        semester: {
            semester1: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester2: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester3: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester4: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester5: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            }

        }

    },
    {
        Name: "Daniyal",
        rollNumber: 13,
        semester: {
            semester1: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester2: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester3: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester4: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester5: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            }

        }

    },
    {
        Name: "Hasan",
        rollNumber: 14,
        semester: {
            semester1: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester2: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester3: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester4: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester5: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            }

        }

    },
    {
        Name: "kamil",
        rollNumber: 15,
        semester: {
            semester1: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester2: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester3: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester4: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            },
            semester5: {
                math: 79,
                urdu: 79,
                eng: 79,
                phy: 79,
                che: 79
            }

        }

    },
]




let btnKey =document.getElementById("15")

function StudentDataHandler () {



 let mainDataSave = studentData.map((data, index) =>  {





     if (btnKey == data.rollNumber) {
        `<p>${data.Name}</p>
     <div>
        <p>${data.rollNumber}</p>
        <div>
            <h2>Semester 1</h2>
            <p>${data.semester.semester1.math}</p>
            <p>${data.semester.semester1.urdu}</p>
            <p>${data.semester.semester1.eng}</p>
            <p>${data.semester.semester1.phy}</p>
            <p>${data.semester.semester1.che}</p>
            <h2>Semester 2</h2>
            <p>${data.semester.semester2.math}</p>
            <p>${data.semester.semester2.urdu}</p>
            <p>${data.semester.semester2.eng}</p>
            <p>${data.semester.semester2.phy}</p>
            <p>${data.semester.semester2.che}</p>
            <h2>Semester 3</h2>
            <p>${data.semester.semester3.math}</p>
            <p>${data.semester.semester3.urdu}</p>
            <p>${data.semester.semester3.eng}</p>
            <p>${data.semester.semester3.phy}</p>
            <p>${data.semester.semester3.che}</p>
            <h2>Semester 4</h2>
            <p>${data.semester.semester4.math}</p>
            <p>${data.semester.semester4.urdu}</p>
            <p>${data.semester.semester4.eng}</p>
            <p>${data.semester.semester4.phy}</p>
            <p>${data.semester.semester4.che}</p>
            <h2>Semester 5</h2 >
            <p>${data.semester.semester5.math}</p>
             <p>${data.semester.semester5.urdu}</p>
             <p>${data.semester.semester5.eng}</p>             
             <p>${data.semester.semester5.phy}</p>             
             <p>${data.semester.semester5.che}</p>
        </div>
     </div>
     `

     document.getElementById("mainResultTable").style.display="block"


     }


   
     
    
    

    
    return `
     <p>${data.Name}</p>
     <div>
        <p>${data.rollNumber}</p>
        <div>
            <h2>Semester 1</h2>
            <p>${data.semester.semester1.math}</p>
            <p>${data.semester.semester1.urdu}</p>
            <p>${data.semester.semester1.eng}</p>
            <p>${data.semester.semester1.phy}</p>
            <p>${data.semester.semester1.che}</p>
            <h2>Semester 2</h2>
            <p>${data.semester.semester2.math}</p>
            <p>${data.semester.semester2.urdu}</p>
            <p>${data.semester.semester2.eng}</p>
            <p>${data.semester.semester2.phy}</p>
            <p>${data.semester.semester2.che}</p>
            <h2>Semester 3</h2>
            <p>${data.semester.semester3.math}</p>
            <p>${data.semester.semester3.urdu}</p>
            <p>${data.semester.semester3.eng}</p>
            <p>${data.semester.semester3.phy}</p>
            <p>${data.semester.semester3.che}</p>
            <h2>Semester 4</h2>
            <p>${data.semester.semester4.math}</p>
            <p>${data.semester.semester4.urdu}</p>
            <p>${data.semester.semester4.eng}</p>
            <p>${data.semester.semester4.phy}</p>
            <p>${data.semester.semester4.che}</p>
            <h2>Semester 5</h2 >
                    <p>${data.semester.semester5.math}</p>
          <p>${data.semester.semester5.urdu}</p>
             <p>${data.semester.semester5.eng}</p>             
             <p>${data.semester.semester5.phy}</p>             
             <p>${data.semester.semester5.che}</p>
        </div>
     </div>
     `


    

})
}

console.log()
// body.innerHTML = mainDataSave.join("")




    let table= `<table class="table-wrapper">
        <th>Name</th>
        <th>Roll No</th>
        <th>Result</th>
        <tr>
            <td>${studentData[0].Name}</td>
            <td>${studentData[0].rollNumber}</td>
            <td><button id="btn" onclick="">Check</button></td>
        </tr>
        <tr>
            <td>${studentData[1].Name}</td>
            <td>${studentData[1].rollNumber}</td>
            <td><button>Check</button></td>
        </tr>
        <tr>
            <td>${studentData[2].Name}</td>
            <td>${studentData[2].rollNumber}</td>
            <td><button>Check</button></td>
        </tr>
        <tr>
            <td>${studentData[3].Name}</td>
            <td>${studentData[3].rollNumber}</td>
            <td><button>Check</button></td>
        </tr>
        <tr>
            <td>${studentData[4].Name}</td>
            <td>${studentData[4].rollNumber}</td>
            <td><button id="15" onclick="StudentDataHandler()" >Check</button></td>
        </tr>


    </table>`


     let mainResultTable= document.getElementById("mainResultTable")     

    mainResultTable.innerHTML = table



    







    
    
     

