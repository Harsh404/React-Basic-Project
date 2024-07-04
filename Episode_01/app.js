// <!-- Create first H1 tag and inject into root of the html using react  -->
  const heading =  React.createElement("h1", {id:"heading"}, "My-React-App");
  const image = React.createElement("img", {id:"image", src:"./image/visiting card.png"})
  const section = React.createElement("div", {id:"container"},[image , heading] );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(section);
console.log(section);

