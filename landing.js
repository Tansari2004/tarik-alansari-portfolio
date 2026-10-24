// Keep all projects available without JavaScript; collapse them on small screens.
const moreProjects = document.querySelector('#more-projects');
const mobileLayout = window.matchMedia('(max-width: 760px)');
const targetsMoreProjects = () => ['#more-projects', '#more-projects-title'].includes(window.location.hash);

if (moreProjects) {
  const syncLayout = () => {
    moreProjects.open = !mobileLayout.matches || targetsMoreProjects();
  };
  syncLayout();
  mobileLayout.addEventListener('change', syncLayout);
  window.addEventListener('hashchange', () => {
    if (targetsMoreProjects()) moreProjects.open = true;
  });
  document.querySelectorAll('a[href="#more-projects-title"], a[href="#more-projects"]').forEach(link => {
    link.addEventListener('click', () => { moreProjects.open = true; });
  });
}
