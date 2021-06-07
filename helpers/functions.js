
// Function to fetch form data and return it as JSON
// Input: Jquery Object: ex: $('#form')
// ReturnType: Object (Form Data as a JSON)
function getFormData($form) {
  var unindexed_array = $form.serializeArray();
  var indexed_array = {};

  $.map(unindexed_array, function (n, i) {
    indexed_array[n['name']] = n['value'];
  });

  return indexed_array;
}

// Helper function to write a cookie
// Input: String (Cookie Name), String (Cookie Data), Integer (No of day to keep Cookie Active)
// Output: Null
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get a cookie
// Input: String (Cookie Name)
// Output: String (Cookie Value)
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Function to check for a cookie
// Input: String (Cookie Name)
// Output: Boolean (True/False)
function checkCookie() {
  var cookie = getCookie('gestaoLogin');
  if (cookie != "") {
    return true;
  } else {
    return false;
  }
}