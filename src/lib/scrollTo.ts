export function scrollToSection(
  id: string,
  push?: (path: string) => void,
  pathname?: string,
): void {
  const el = document.getElementById(id);
  if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
  if (push && pathname !== '/') {
    sessionStorage.setItem('scrollTarget', id);
    push('/');
  }
}
