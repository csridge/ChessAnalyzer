function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
document.addEventListener('DOMContentLoaded', function() {
    openTab(event, 'pc');
});

function openSubTab(evt, subTabName) {
  var i, subtabcontent, subtablinks;

  subtabcontent = document.getElementsByClassName("subtabcontent");
  for (i = 0; i < subtabcontent.length; i++) {
      subtabcontent[i].style.display = "none";
  }

  subtablinks = document.getElementsByClassName("subtablinks");
  for (i = 0; i < subtablinks.length; i++) {
      subtablinks[i].className = subtablinks[i].className.replace(" active", "");
  }

  document.getElementById(subTabName).style.display = "block";
      evt.currentTarget.className += " active";
}