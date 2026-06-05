/* Ajoke4House — tiny hash router. Routes: #/  #/meet  #/priorities
   #/priorities/<slug>  #/pvc  #/involved  #/news  #/donate  #/contact  #/privacy */

function useRoute() {
  const read = () => (location.hash.replace(/^#/, "") || "/");
  const [path, setPath] = React.useState(read);
  React.useEffect(() => {
    const onHash = () => { setPath(read()); window.scrollTo({ top: 0, left: 0, behavior: "auto" }); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return path;
}

function navigate(to) {
  if (location.hash !== "#" + to) location.hash = to;
  else window.scrollTo({ top: 0, behavior: "auto" });
}

/* <A href="/meet"> — internal link that routes + resets scroll */
function A({ href, children, className, style, onClick }) {
  const handle = (e) => { e.preventDefault(); if (onClick) onClick(); navigate(href); };
  return <a href={"#" + href} className={className} style={style} onClick={handle}>{children}</a>;
}

Object.assign(window, { useRoute, navigate, A });
