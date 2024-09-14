document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tablinks');
  const tabContents = document.querySelectorAll('.tabcontent');
  function openTab(evt) {
      const tabName = evt.currentTarget.getAttribute('data-tab');

      tabContents.forEach(content => {
          content.style.display = 'none';
      });

      tabs.forEach(tab => {
          tab.classList.remove('active');
      });

      const selectedContent = document.getElementById(tabName);
      if (selectedContent) {
          selectedContent.style.display = 'block';
      } else {
          console.error('No content found for tab:', tabName);
      }

      evt.currentTarget.classList.add('active');
  }
  tabs.forEach(tab => {
      tab.addEventListener('click', openTab);
  });
  if (tabs.length > 0) {
      tabs[0].click();
  }
});