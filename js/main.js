// Mobile Navbar
const mobileNavBtn = document.querySelector("button.mobile-nav-btn")
const mobileNav = document.querySelector("nav.mobile-nav")
const mobileNavHeight = mobileNav.clientHeight

mobileNav.style.height = 0

mobileNavBtn.addEventListener("click", () => {
  if (mobileNav.clientHeight <= 0) {
    mobileNav.style.height = `${mobileNavHeight}px`
  } else {
    mobileNav.style.height = 0
  }
})