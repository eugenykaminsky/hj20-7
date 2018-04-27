let tabsNav = document.querySelector('.tabs-nav'),
    tabsContent = document.querySelector('.tabs-content').children;

for (let i = 0; i < tabsContent.length; i++) {
  let itemNav = tabsNav.firstElementChild.cloneNode(true);
  itemNav.firstElementChild.classList.add(tabsContent[i].dataset.tabIcon);
  itemNav.firstElementChild.textContent = tabsContent[i].dataset.tabTitle;
  tabsNav.appendChild(itemNav);
  if (i > 0) {
    tabsContent[i].classList.add('hidden')
  }
}  

tabsNav.removeChild(tabsNav.firstElementChild);
tabsNav.firstElementChild.classList.add('ui-tabs-active');

Array.from(tabsNav.children).forEach(function (item) {
  item.addEventListener('click', check);
});

function check() {
  let currentTab = document.querySelector('.ui-tabs-active');
  currentTab.classList.remove('ui-tabs-active');
  this.classList.add('ui-tabs-active');
  
  let tab = this;
  Array.from(tabsContent).forEach(function (item) {
    item.classList.add('hidden');
    if (tab.children[0].textContent === item.dataset.tabTitle) {
      item.classList.remove('hidden');
    }
  });
}
