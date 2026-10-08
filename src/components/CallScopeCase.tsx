import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import { callScope } from '../data/callscope';
import './CallScopeCase.css';

export default function CallScopeCase() {
  const { lang } = useLanguage();
  const t = translations[lang].callscope;
  const [selected, setSelected] = useState(0);
  const [caseOpen, setCaseOpen] = useState(() => window.location.hash === '#callscope-case');
  const screen = callScope.screens[selected];
  useEffect(() => {
    // A direct case URL can arrive before the SPA has mounted its anchor.
    const hash = window.location.hash;
    if (hash === '#callscope' || hash === '#callscope-case') {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  return (
    <article id="callscope" className="callscope" aria-labelledby="callscope-title">
      <div className="callscope__heading">
        <div>
          <p className="callscope__eyebrow"><span aria-hidden="true" />{t.featured}</p>
          <h3 id="callscope-title" className="callscope__title">{callScope.title}</h3>
          <p className="callscope__subtitle">{callScope.subtitle}</p>
        </div>
        <div className="callscope__intro">
          <p className="callscope__value">{t.value}</p>
          <p className="callscope__description">{t.description}</p>
          <div className="callscope__actions">
            <a className="callscope__button callscope__button--primary" href="#callscope-case" onClick={() => setCaseOpen(true)}>{t.viewCase}<span aria-hidden="true">↗</span></a>
            <a className="callscope__button" href={callScope.liveUrl} target="_blank" rel="noopener noreferrer">Private demo<span aria-hidden="true">↗</span></a>
          </div>
          <p className="callscope__access-note">{t.accessNote} <a href="#contact">{t.requestDemo}</a></p>
        </div>
      </div>

      <figure className="callscope__preview" aria-live="polite">
        <div className="callscope__frame-bar"><span>CallScope <span aria-hidden="true">/</span> {screen.label[lang]}</span><span className="callscope__production">Production</span></div>
        <img key={screen.id} className="callscope__screen" src={screen.image} alt={screen.alt[lang]} width="1440" height="1000" loading="lazy" decoding="async" />
        <figcaption><strong>{screen.caption[lang]}</strong><span>{t.demoData}<a href={screen.image} target="_blank" rel="noopener noreferrer">{t.enlarge}</a></span></figcaption>
      </figure>

      <div className="callscope__gallery" role="group" aria-label={t.screens}>
        {callScope.screens.map((item, index) => (
          <button key={item.id} className={`callscope__thumbnail ${index === selected ? 'is-selected' : ''}`} aria-pressed={index === selected} onClick={() => setSelected(index)}>
            <span className="callscope__thumbnail-image"><img src={item.image} alt="" width="1440" height="1000" loading="lazy" decoding="async" /></span>
            <span className="callscope__thumbnail-label"><span className="callscope__number">0{index + 1}</span>{item.label[lang]}<span className="callscope__thumbnail-arrow" aria-hidden="true">↗</span></span>
          </button>
        ))}
      </div>

      <div className="callscope__specs">
        <div className="callscope__capabilities"><h4>{t.capabilitiesTitle}</h4><ul>{t.capabilities.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></div>
        <div className="callscope__stack"><h4>Stack</h4><ul>{callScope.stack.map(item => <li key={item}>{item}</li>)}</ul><p>{t.engineering}</p></div>
      </div>

      <details id="callscope-case" className="callscope__case" open={caseOpen} onToggle={event => setCaseOpen(event.currentTarget.open)}>
        <summary>{t.caseTitle}<span aria-hidden="true">+</span></summary>
        <div className="callscope__case-body">
          <div className="callscope__case-grid">
            {t.caseSections.map((item, index) => <section key={item.title}><p className="callscope__eyebrow">0{index + 1}</p><h4>{item.title}</h4><p>{item.text}</p></section>)}
          </div>
          <div className="callscope__example"><div><p className="callscope__eyebrow">{t.exampleLabel}</p><h4>{t.exampleTitle}</h4></div><div><blockquote>{t.exampleQuote}</blockquote><p>{t.exampleText}</p></div></div>
          <div className="callscope__flow" aria-label={t.flowTitle}>{t.flow.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div>
        </div>
      </details>
    </article>
  );
}
