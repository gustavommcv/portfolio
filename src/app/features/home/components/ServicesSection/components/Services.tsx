import "./Services.scss";

export default function Services() {
  return (
    <div class={`services`}>
      <h2 class={`services__title`}>Services</h2>
      <ul class={`services__list`}>
        <li class={`services__service`}>Landing pages</li>
        <li class={`services__service`}>Portfolio</li>
        <li class={`services__service`}>Manutenção de código</li>
        <li class={`services__service`}>Conversão de design para código</li>
      </ul>
    </div>
  );
}
