import "./Footer.css";
const template = () => `
<h3><span>💻​📱​ </span></h3>
`;

export const PrintTemplateFooter = () => {
    document.querySelector("footer").innerHTML = template();
};