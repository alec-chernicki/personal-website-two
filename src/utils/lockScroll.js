export default (isLocked) => {
  const body = document.querySelectorAll('body')[0];
  
  if (isLocked) {
    body.style.overflow = 'hidden';
    return;
  }

  body.style.overflow = 'auto';
}
