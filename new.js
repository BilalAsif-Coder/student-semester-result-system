
let mainResultTable = document.getElementById("mainResultTable");
let mainStudent = document.getElementById("main-student")



let studentData = [
    {
        Name: "Bilal",
        rollNumber: 11,
        semester: {
            semester1: {
                math: 69,
                urdu: 69,
                eng: 59,
                phy: 69,
                che: 59
            },
            semester2: {
                math: 69,
                urdu: 56,
                eng: 97,
                phy: 42,
                che: 68
            },
            semester3: {
                math: 89,
                urdu: 59,
                eng: 98,
                phy: 56,
                che: 45
            },
            semester4: {
                math: 59,
                urdu: 69,
                eng: 79,
                phy: 49,
                che: 59
            },
            semester5: {
                math: 39,
                urdu: 59,
                eng: 79,
                phy: 70,
                che: 76
            }

        }

    },
    {
        Name: "Abdullah",
        rollNumber: 12,
        semester: {
            semester1: {
                math: 59,
                urdu: 89,
                eng: 59,
                phy: 49,
                che: 69
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
        Name: "Kamil",
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


let table = `<table class="table-wrapper">
        <th>Name</th>
        <th>Roll No</th>
        <th>Result</th>
        <tr>
            <td class="name">${studentData[0].Name}</td>
            <td class="roll-number">${studentData[0].rollNumber}</td>
            <td><button class="btn">Check</button></td>
        </tr>
        <tr>
            <td class="name">${studentData[1].Name}</td>
            <td class="roll-number">${studentData[1].rollNumber}</td>
            <td><button class="btn">Check</button></td>
        </tr>
        <tr>
            <td class="name">${studentData[2].Name}</td>
            <td class="roll-number">${studentData[2].rollNumber}</td>
            <td><button class="btn">Check</button></td>
        </tr>
        <tr>
            <td class="name">${studentData[3].Name}</td>
            <td class="roll-number">${studentData[3].rollNumber}</td>
            <td><button class="btn">Check</button></td>
        </tr>
        <tr>
            <td class="name">${studentData[4].Name}</td>
            <td class="roll-number">${studentData[4].rollNumber}</td>
            <td><button class="btn">Check</button></td>
        </tr>


    </table>`

mainResultTable.innerHTML = table



let btn = document.getElementsByClassName("btn");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", studentDataHandler)
}



function studentDataHandler() {

    let mainDataSave = studentData.map((data, index) => {
        let firstSemesterPersentageData = data.semester.semester1.math + data.semester.semester1.che + data.semester.semester1.eng + data.semester.semester1.phy + data.semester.semester1.urdu
        let SecondSemesterPersentageData = data.semester.semester2.math + data.semester.semester2.che + data.semester.semester2.eng + data.semester.semester2.phy + data.semester.semester2.urdu
        let thirdSemesterPersentageData = data.semester.semester3.math + data.semester.semester3.che + data.semester.semester3.eng + data.semester.semester3.phy + data.semester.semester3.urdu
        let FourSemesterPersentageData = data.semester.semester4.math + data.semester.semester4.che + data.semester.semester4.eng + data.semester.semester4.phy + data.semester.semester4.urdu
        let FiveSemesterPersentageData = data.semester.semester5.math + data.semester.semester5.che + data.semester.semester5.eng + data.semester.semester5.phy + data.semester.semester5.urdu
        let totalPersentageData = firstSemesterPersentageData + SecondSemesterPersentageData + thirdSemesterPersentageData + FourSemesterPersentageData + FiveSemesterPersentageData
        if (this.parentElement.parentElement.children[1].textContent == data.rollNumber) {
            return ` <div class="main-container-result">
            <h1 >Student Final Year Result</h2>
             <p class="username">Student Name  : ${data.Name}</p>
          
                <p class="Id">Roll NO : ${data.rollNumber}</p>
                
                   <h2>Semester 1</h2>
<p>Math : ${data.semester.semester1.math}</p>
<p>Urdu : ${data.semester.semester1.urdu}</p>
<p>English : ${data.semester.semester1.eng}</p>
<p>Physics : ${data.semester.semester1.phy}</p>
<p>Chemistry : ${data.semester.semester1.che}</p>
<p>Persentage : ${((firstSemesterPersentageData / 500) * 100).toFixed(1)}% </p>

<h2>Semester 2</h2>
<p>Math : ${data.semester.semester2.math}</p>
<p>Urdu : ${data.semester.semester2.urdu}</p>
<p>English : ${data.semester.semester2.eng}</p>
<p>Physics : ${data.semester.semester2.phy}</p>
<p>Chemistry : ${data.semester.semester2.che}</p>
<p>Persentage : ${((SecondSemesterPersentageData / 500) * 100).toFixed(1)}%  </p>

<h2>Semester 3</h2>
<p>Math : ${data.semester.semester3.math}</p>
<p>Urdu : ${data.semester.semester3.urdu}</p>
<p>English : ${data.semester.semester3.eng}</p>
<p>Physics : ${data.semester.semester3.phy}</p>
<p>Chemistry : ${data.semester.semester3.che}</p>
<p>Persentage : ${((thirdSemesterPersentageData / 500) * 100).toFixed(1)}%  </p>

<h2>Semester 4</h2>
<p>Math : ${data.semester.semester4.math}</p>
<p>Urdu : ${data.semester.semester4.urdu}</p>
<p>English : ${data.semester.semester4.eng}</p>
<p>Physics : ${data.semester.semester4.phy}</p>
<p>Chemistry : ${data.semester.semester4.che}</p>
<p>Persentage :${((FourSemesterPersentageData / 500) * 100).toFixed(1)}%  </p>

<h2>Semester 5</h2>
<p>Math : ${data.semester.semester5.math}</p>
<p>Urdu : ${data.semester.semester5.urdu}</p>
<p>English : ${data.semester.semester5.eng}</p>             
<p>Physics : ${data.semester.semester5.phy}</p>             
<p>Chemistry : ${data.semester.semester5.che}</p>
<p>Persentage : ${((FiveSemesterPersentageData / 500) * 100).toFixed(1)}%  </p>

<h2>Final Semester Result<h2>

<p>Persentage ${(totalPersentageData / 2500) * 100}%</p>
<div class="btnDiv">
<button class="btnBack" onclick="backBtn ()">
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span>Back</span>
</button>
</div>
</div>
  
</div>`


}

});



    mainResultTable.innerHTML = mainDataSave.join(" ")


}


 
 function backBtn () {
     mainResultTable.innerHTML = table;
    let btn = document.getElementsByClassName("btn");
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", studentDataHandler);
    }
    
 }
