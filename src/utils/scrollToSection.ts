export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (!section) return;

  const navbar = document.querySelector(".navbar") as HTMLElement | null;
  const navbarHeight = navbar?.offsetHeight ?? 0;

  window.scrollTo({
    top: section.offsetTop - navbarHeight,
    behavior: "smooth",
  });
};