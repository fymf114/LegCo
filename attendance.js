function getTableData(index){
  // get table data
  var count = 0;
  var absentCount = 0;
  var presentCount = 0;
  let tableElement = document.querySelector('#drill-down-content table');
    if (tableElement === null){
        btns[index+1].click();
        setTimeout(function() {
      getTableData(index + 1); // Call getTableData for the next button
    }, 2000);
        return;
    }
  let footer = tableElement.querySelector('.k-footer-template');
  let totalAttendanceInfo = {
    totalPresent: footer.querySelectorAll('td')[footer.querySelectorAll('td').length-1].innerText,
  };
  const total_number = totalAttendanceInfo.totalPresent.match(/\/\s*(\d+)\s*\(/)[1];
  //console.log(totalAttendanceInfo)
  while(count < total_number){
    let rows = tableElement.querySelectorAll('tbody tr');
    let data = Array.from(rows).map(row => {
      let cells = row.querySelectorAll('td');
      return {
        No: cells[0].innerText,
        Date: cells[1].innerText,
        Present: cells[cells.length-1].innerText === 'P',
      };
    });
    //console.log(data);
    for (i = 0; i<data.length; i++ ){
      //console.log(data[i])
            // Check if the date is within 2023Q2
      const dateParts = data[i].Date.split('.');
      const day = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]);
      const year = parseInt(dateParts[2]);
      //change this part as necessary
      const isWithinQ2 = year === 2023 && month >= 4 && month <= 6;
      
      if (isWithinQ2) {
        if (data[i].Present)
          presentCount++;
        else
          absentCount++;
        // Perform counting or any other required operations
      } else {
        //console.log('The date is not within 2023Q2');
      }
}
    count = count + data.length;
    document.getElementsByClassName("k-i-arrow-e")[0].click();
  }
  console.log("Present Count: " + presentCount);
  console.log("Absent Count: " + absentCount);
  console.log(document.getElementById("drill-down-title").innerText.replace(/\*$/, '') + ': ' + presentCount/(presentCount + absentCount)*100 + '%');
  document.getElementById("lbl_back").click();
      if (index + 1 < btns.length) {
          btns[index+1].click();
    setTimeout(function() {
      getTableData(index + 1); // Call getTableData for the next button
    }, 2000);
  }
}

btns = document.getElementsByClassName("col-2");
btns[0].click();
setTimeout(() => {
  getTableData(0);
}, 2000);
