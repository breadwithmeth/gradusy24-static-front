function HowItWorks() {
  const steps = [
    'Пользователь переходит в приложение',
    'Проходит проверку возраста',
    'Оформляет заявку',
    'Получает подтверждение'
  ];

  return (
    <section id="how" className="section">
      <div className="container split-block">
        <p className="section-kicker">02. МЕТОД</p>
        <div className="panel">
          <h2>Как это работает</h2>
          <ol className="flow-line" aria-label="Схема работы">
            {steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
