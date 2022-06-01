const setChecked = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        const currenttsk = document.querySelectorAll('.check');
      if (arr[i].completed === true) {
        currenttsk[i].checked = true;
      } 
    } 
  };
  
export default setChecked;