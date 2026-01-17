export default class Validation {

  checkEmpty(value, divId, mess) {
    if (value.trim() === "") {
      document.getElementById(divId).innerHTML = mess;
      document.getElementById(divId).style.display = "block";
      return false;
    }
    document.getElementById(divId).innerHTML = "";
    document.getElementById(divId).style.display = "none";
    return true;
  }

  checkCharater(value, divId, mess) {
    const regex = /^[a-zA-ZÀ-ỹ\s]+$/;
    if (regex.test(value)) {
      document.getElementById(divId).innerHTML = "";
      document.getElementById(divId).style.display = "none";
      return true;
    }
    document.getElementById(divId).innerHTML = mess;
    document.getElementById(divId).style.display = "block";
    return false;
  }

  checkNumber(value, divId, mess) {
    const regex = /^\d+$/;
    if (regex.test(value)) {
      document.getElementById(divId).innerHTML = "";
      document.getElementById(divId).style.display = "none";
      return true;
    }
    document.getElementById(divId).innerHTML = mess;
    document.getElementById(divId).style.display = "block";
    return false;
  }

  checkLengthCharater(value, divId, mess, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      document.getElementById(divId).innerHTML = "";
      document.getElementById(divId).style.display = "none";
      return true;
    }
    document.getElementById(divId).innerHTML = mess;
    document.getElementById(divId).style.display = "block";
    return false;
  }

  checkSelectOption(idSelect, divId, mess) {
    const element = document.getElementById(idSelect);
    if (element.selectedIndex !== 0) {
      document.getElementById(divId).innerHTML = "";
      document.getElementById(divId).style.display = "none";
      return true;
    }
    document.getElementById(divId).innerHTML = mess;
    document.getElementById(divId).style.display = "block";
    return false;
  }

  checkExistAccount(value, divId, mess, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].taiKhoan === value) {
        document.getElementById(divId).innerHTML = mess;
        document.getElementById(divId).style.display = "block";
        return false;
      }
    }
    document.getElementById(divId).innerHTML = "";
    document.getElementById(divId).style.display = "none";
    return true;
  }
}
