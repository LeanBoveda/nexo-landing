


import { loginUrl, firstAccessUrl } from './config';
import { useEffect, useState, type SyntheticEvent } from 'react';
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardCheck,
  Dumbbell,
  FileSpreadsheet,
  Layers,
  LayoutDashboard,
  Menu,
  MessageSquare,
  ShieldCheck,
  Users,
  X,
  Zap,
  Link2,
} from 'lucide-react';

const links = [
  ['inicio', 'Inicio'],
  ['funcionalidades', 'Funcionalidades'],
  ['como-funciona', 'Cómo funciona'],
  ['beneficios', 'Beneficios'],
  ['nosotros', 'Nosotros'],
  ['preguntas', 'FAQ'],
  ['contacto', 'Contacto'],
];
const faqs = [
  [
    '¿Qué es Nexo y para quién está diseñado?',
    'Es una aplicación multideporte que conecta el trabajo de preparadores físicos con sus deportistas. Reúne fichas, grupos, rutinas, registros de entrenamiento y evaluaciones.',
  ],
  [
    '¿Cómo puedo comenzar?',
    'El administrador habilita las cuentas de los preparadores físicos. Si ya tenés acceso, ingresá a la aplicación. En el primer ingreso verificás tu correo mediante un enlace y creás tu contraseña. Los deportistas acceden a las fichas que les habilita su profesor.',
  ],
  [
    '¿Necesito conocimientos técnicos?',
    'No necesitás programar. El preparador carga deportistas, organiza grupos y asigna rutinas desde la interfaz. El deportista consulta su planificación y registra sus sesiones.',
  ],
  [
    '¿Puedo usarlo desde el celular?',
    'Sí. El portal del deportista está adaptado a dispositivos móviles para consultar rutinas y registrar el entrenamiento desde el navegador.',
  ],
  [
    '¿Puedo importar mis deportistas y adjuntar archivos?',
    'Podés importar hasta 500 deportistas desde XLSX, CSV o TSV con revisión previa. Las rutinas admiten archivos PDF, XLSX, CSV, TSV, PNG y JPEG de hasta 10 MB. Los adjuntos no se convierten automáticamente en ejercicios.',
  ],
  [
    '¿Qué pasa si modifico una rutina?',
    'Se crea una nueva versión. Las asignaciones existentes conservan la versión que recibieron y su historial; para entregar los cambios se realiza una nueva asignación.',
  ],
  [
    '¿Tiene algún costo? ¿Cómo solicito asistencia?',
    'Los planes, precios y habilitaciones se administran de forma interna. No hay una tarifa pública documentada. Consultá al administrador que habilitó tu cuenta. El formulario de esta página todavía no tiene conectado un servicio de recepción.',
  ],
];

function Brand() {
  return (
    <span className="nx-brand">
      <span className="nx-mark">
        <Link2 size={23} strokeWidth={2.8} />
      </span>
      nexo<span className="nx-brand-dot">.</span>
    </span>
  );
}
function CTA({
  children = 'Acceder a la aplicación',
  light = false,
}: {
  children?: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a className={`nx-button ${light ? 'nx-button-light' : ''}`} href={loginUrl}>
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}

function ProductPreview() {
  return (
    <div
      className="nx-product"
      aria-label="Vista ilustrativa de los módulos reales de Nexo. Datos de ejemplo."
    >
      <aside className="nx-product-side">
        <Brand />
        <small>ESPACIO DEL PREPARADOR</small>
        {[
          [LayoutDashboard, 'Inicio'],
          [Users, 'Deportistas'],
          [Users, 'Grupos'],
          [Dumbbell, 'Rutinas'],
          [CalendarDays, 'Agenda'],
          [Activity, 'Carga'],
          [ClipboardCheck, 'Evaluaciones'],
        ].map(([Icon, label], i) => {
          const ItemIcon = Icon as typeof Activity;
          return (
            <div key={String(label)} className={i === 0 ? 'selected' : ''}>
              <ItemIcon size={15} />
              <span>{String(label)}</span>
            </div>
          );
        })}
        <div className="nx-preview-account">
          <span>PF</span>Tu espacio de trabajo
        </div>
      </aside>
      <div className="nx-product-body">
        <div className="nx-product-top">
          <span>Tu preparación, en perspectiva</span>
          <span className="nx-example">VISTA ILUSTRATIVA</span>
        </div>
        <div className="nx-product-heading">
          <div>
            <small>TU PANEL DE INICIO</small>
            <h3>Todo listo para avanzar.</h3>
            <p>Una mirada a tu espacio deportivo.</p>
          </div>
          <span className="nx-mini-action">
            <Users size={13} /> Deportistas <ArrowUpRight size={12} />
          </span>
        </div>
        <div className="nx-preview-metrics">
          {[
            [Users, 'Deportistas', 'Fichas individuales'],
            [Dumbbell, 'Rutinas', 'Planificaciones por días'],
            [ClipboardCheck, 'Evaluaciones', 'Resultados e historial'],
          ].map(([Icon, title, caption]) => {
            const ItemIcon = Icon as typeof Users;
            return (
              <div key={String(title)}>
                <ItemIcon size={17} />
                <strong>{String(title)}</strong>
                <small>{String(caption)}</small>
              </div>
            );
          })}
        </div>
        <div className="nx-preview-panels">
          <div className="nx-week">
            <div className="nx-panel-title">
              <strong>Una semana, un plan claro</strong>
              <CalendarDays size={16} />
            </div>
            <p>Rutina de preparación física · Ejemplo</p>
            <div className="nx-days">
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                <span
                  key={i}
                  className={[0, 2, 4].includes(i) ? 'training' : ''}
                >
                  {day}
                  <i>{12 + i}</i>
                </span>
              ))}
            </div>
            {[
              'Día 1 · Fuerza general',
              'Día 2 · Tren inferior',
              'Día 3 · Fuerza y estabilidad',
            ].map((label, i) => (
              <div className="nx-session" key={label}>
                <span className="nx-session-icon">
                  <Dumbbell size={15} />
                </span>
                <span>
                  {label}
                  <small>
                    {i === 0 ? 'Sesión registrada' : 'Planificación asignada'}
                  </small>
                </span>
                {i === 0 ? <Check size={16} /> : <ArrowUpRight size={14} />}
              </div>
            ))}
          </div>
          <div className="nx-feedback">
            <span className="nx-icon-box">
              <Activity size={19} />
            </span>
            <h4>
              Escuchá lo que
              <br />
              dice cada sesión.
            </h4>
            <p>Esfuerzo percibido, dolor y comentarios en contexto.</p>
            <div className="nx-signal">
              <span>
                PSE <strong>6 / 10</strong>
              </span>
              <div>
                <i />
              </div>
              <small>Registro de ejemplo</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState('');
  function submit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      'El servicio de contacto aún no está conectado. Tu mensaje no fue enviado. Si ya tenés cuenta, consultá al administrador que te habilitó el acceso.',
    );
  }
  return (
    <form className="nx-form" onSubmit={submit}>
      <div className="nx-form-row">
        <label>
          Nombre
          <input
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Tu nombre"
          />
        </label>
        <label>
          Correo electrónico
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="vos@ejemplo.com"
          />
        </label>
      </div>
      <label>
        Asunto
        <input
          name="subject"
          required
          maxLength={160}
          placeholder="¿En qué podemos ayudarte?"
        />
      </label>
      <label>
        Mensaje
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={4}
          placeholder="Contanos un poco más…"
        />
      </label>
      <p className="nx-form-note" id="contact-note">
        Canal en preparación. Este formulario todavía no envía ni almacena
        mensajes.
      </p>
      <button
        className="nx-button"
        type="submit"
        aria-describedby="contact-note"
      >
        Enviar mensaje <ArrowUpRight size={17} />
      </button>
      <output className="nx-form-status" aria-live="polite">
        {status}
      </output>
    </form>
  );
}

export function Landing() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: 0 },
    );
    document
      .querySelectorAll('.nx-landing section[id]')
      .forEach((section) => observer.observe(section));
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenu(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);
  return (
    <div className="nx-landing">
      <a className="nx-skip" href="#contenido">
        Saltar al contenido
      </a>
      <header className={`nx-header ${scrolled ? 'nx-scrolled' : ''}`}>
        <div className="nx-nav-wrap">
          <a href="#inicio" aria-label="Nexo, inicio">
            <Brand />
          </a>
          <button
            className="nx-menu-toggle"
            aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menu}
            aria-controls="nx-navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
          <nav
            id="nx-navigation"
            className={menu ? 'nx-nav nx-nav-open' : 'nx-nav'}
            aria-label="Navegación de presentación"
          >
            {links.map(([id, label]) => (
              <a
                href={`#${id}`}
                key={id}
                aria-current={active === id ? 'location' : undefined}
                onClick={() => setMenu(false)}
              >
                {label}
              </a>
            ))}
            <a href={loginUrl} className="nx-nav-access">
              Acceder <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>
      <main id="contenido">
        <section id="inicio" className="nx-hero nx-container">
          <div className="nx-hero-copy">
            <span className="nx-eyebrow nx-pill">
              <span /> EL PUNTO DE ENCUENTRO DEL RENDIMIENTO
            </span>
            <h1>
              Tu planificación.
              <br />
              Su progreso.
              <br />
              <span>Todo conectado.</span>
            </h1>
            <p>
              Menos información dispersa. Más foco en tus deportistas.
              <br className="nx-desktop-break" /> Planificá, acompañá y evaluá
              en un mismo lugar.
            </p>
            <div className="nx-actions">
              <CTA>Comenzar ahora</CTA>
              <a className="nx-text-link" href="#como-funciona">
                Conocer cómo funciona <ArrowRight size={17} />
              </a>
            </div>
            <div className="nx-hero-note">
              <span>
                <Check size={14} /> Para preparadores físicos
              </span>
              <span>
                <Check size={14} /> Multideporte
              </span>
              <span>
                <Check size={14} /> Acceso desde el navegador
              </span>
            </div>
          </div>
          <div className="nx-preview-wrap">
            <div className="nx-preview-label">
              <span>
                <span className="nx-live-dot" /> DEL PLAN A LA PRÁCTICA
              </span>
              <span>Un espacio. Todas las conexiones.</span>
            </div>
            <ProductPreview />
            <div className="nx-preview-caption">
              <span>
                <ShieldCheck size={14} /> Cada preparador, su propio espacio
              </span>
              <a href="#funcionalidades">
                Explorá Nexo <ArrowDown size={13} />
              </a>
            </div>
          </div>
        </section>
        <div className="nx-audience">
          <span>DISEÑADO PARA TU FORMA DE TRABAJAR</span>
          <div>
            <span>Preparadores físicos</span>
            <i />
            <span>Equipos y planteles</span>
            <i />
            <span>Deportistas individuales</span>
            <i />
            <span>Múltiples disciplinas</span>
          </div>
        </div>
        <section className="nx-section nx-container" id="problema">
          <div className="nx-section-heading">
            <span className="nx-eyebrow">01 / UN DESAFÍO COTIDIANO</span>
            <h2>
              El entrenamiento tiene un plan.
              <br />
              Tu gestión también debería.
            </h2>
            <p>
              Cuando la información está repartida, acompañar a cada deportista
              se vuelve más difícil.
            </p>
          </div>
          <div className="nx-problems">
            {[
              [
                FileSpreadsheet,
                'Fichas por todos lados',
                'Datos y planteles separados que complican encontrar el contexto de cada deportista.',
              ],
              [
                Layers,
                'Planes que pierden contexto',
                'Cambios sin una versión clara que dificultan saber qué rutina recibió cada persona.',
              ],
              [
                MessageSquare,
                'Seguimiento desconectado',
                'Sensaciones y resultados fuera de la planificación que hacen más difícil revisar lo ocurrido.',
              ],
            ].map(([Icon, title, description]) => {
              const ItemIcon = Icon as typeof Activity;
              return (
                <article key={String(title)}>
                  <ItemIcon size={23} />
                  <h3>{String(title)}</h3>
                  <p>{String(description)}</p>
                </article>
              );
            })}
          </div>
          <div className="nx-problem-close">
            <span className="nx-mark">
              <Link2 size={21} />
            </span>
            <p>
              Nexo reúne las piezas para que puedas ver el proceso completo.
            </p>
            <ArrowDown size={19} />
          </div>
        </section>
        <section id="funcionalidades" className="nx-section nx-features">
          <div className="nx-container">
            <div className="nx-section-heading nx-heading-split">
              <div>
                <span className="nx-eyebrow">
                  02 / TU NUEVO ESPACIO DE TRABAJO
                </span>
                <h2>
                  Todo lo que conectás.
                  <br />
                  <span>Todo lo que podés acompañar.</span>
                </h2>
              </div>
              <p>
                De la primera ficha al seguimiento de cada sesión. Herramientas
                concretas para el trabajo de todos los días.
              </p>
            </div>
            <div className="nx-bento">
              <article className="nx-feature nx-feature-wide">
                <div className="nx-feature-copy">
                  <span className="nx-icon-box">
                    <Dumbbell />
                  </span>
                  <h3>
                    Un plan claro.
                    <br />
                    Para cada deportista.
                  </h3>
                  <p>
                    Creá rutinas de 2 a 4 días y asigná la planificación. Cada
                    cambio genera una versión nueva, sin alterar lo que ya
                    entregaste.
                  </p>
                  <span className="nx-feature-tag">
                    RUTINAS + VERSIONES + ADJUNTOS
                  </span>
                </div>
                <div className="nx-routine-visual">
                  <div>
                    <span className="nx-tiny-label">
                      PLANIFICACIÓN · EJEMPLO
                    </span>
                    <h4>Preparación general</h4>
                    <span className="nx-version">
                      Versión 02 <Check size={12} />
                    </span>
                  </div>
                  {[
                    'Día 1 / Fuerza',
                    'Día 2 / Tren inferior',
                    'Día 3 / Estabilidad',
                  ].map((item, i) => (
                    <div className="nx-routine-line" key={item}>
                      <span>0{i + 1}</span>
                      <strong>{item}</strong>
                      <ArrowUpRight size={14} />
                    </div>
                  ))}
                  <small>
                    <ShieldCheck size={13} /> El historial conserva su versión
                  </small>
                </div>
              </article>
              <article className="nx-feature nx-feature-navy">
                <Users className="nx-lime" />
                <h3>
                  Personas, no filas
                  <br />
                  en una planilla.
                </h3>
                <p>
                  Fichas individuales y grupos para organizar planteles. Importá
                  hasta 500 deportistas con revisión previa.
                </p>
                <div className="nx-avatars">
                  {['PF', 'D1', 'D2', 'D3'].map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                  <ArrowRight size={20} />
                </div>
                <span className="nx-feature-tag">DEPORTISTAS + GRUPOS</span>
              </article>
              <article className="nx-feature">
                <span className="nx-icon-box">
                  <Activity />
                </span>
                <h3>
                  El esfuerzo también
                  <br />
                  tiene algo que decir.
                </h3>
                <p>
                  Consultá sesiones previstas y registradas, PSE, dolor y
                  comentarios en Agenda y Carga.
                </p>
                <div className="nx-bars" aria-hidden="true">
                  {[38, 60, 48, 82, 55, 72, 50, 90, 66, 78, 59, 70].map(
                    (height, i) => (
                      <i key={i} style={{ height: `${height}%` }} />
                    ),
                  )}
                </div>
                <small className="nx-visual-caption">
                  Representación ilustrativa del seguimiento
                </small>
              </article>
              <article className="nx-feature">
                <span className="nx-icon-box">
                  <ClipboardCheck />
                </span>
                <h3>
                  Evaluar. Comparar.
                  <br />
                  Entender el proceso.
                </h3>
                <p>
                  Organizá plantillas y tests, registrá resultados y consultá
                  gráficos. Las correcciones conservan el resultado anterior.
                </p>
                <div className="nx-test-visual">
                  <span>
                    <ClipboardCheck size={17} /> Historial de evaluaciones
                  </span>
                  <div>
                    <span>Test + superficie</span>
                    <span>Resultados</span>
                  </div>
                  <div className="nx-chart-line" aria-hidden="true">
                    <svg viewBox="0 0 300 65">
                      <path
                        d="M0 55 L50 40 L100 45 L150 22 L200 28 L250 10 L300 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </div>
              </article>
              <article className="nx-feature nx-feature-lime">
                <Zap />
                <h3>
                  El deportista,
                  <br />
                  parte del proceso.
                </h3>
                <p>
                  Desde su celular consulta la rutina, registra sesiones y
                  comparte cómo se sintió. También puede corregir una fecha
                  anterior.
                </p>
                <a className="nx-text-link" href="#como-funciona">
                  Así se conecta todo <ArrowRight size={17} />
                </a>
              </article>
            </div>
          </div>
        </section>
        <section id="como-funciona" className="nx-section nx-container">
          <div className="nx-section-heading">
            <span className="nx-eyebrow">03 / SIMPLE DESDE EL PRINCIPIO</span>
            <h2>
              Del primer acceso
              <br />
              al próximo entrenamiento.
            </h2>
            <p>Vos organizás el proceso. Nexo mantiene la conexión.</p>
          </div>
          <div className="nx-steps">
            {[
              [
                'Habilitá tu acceso',
                'Con tu cuenta habilitada, verificá tu correo y creá una contraseña.',
              ],
              [
                'Armá tu espacio',
                'Cargá o importá deportistas y organizalos en grupos.',
              ],
              [
                'Compartí el plan',
                'Creá una rutina y asignala para que cada deportista pueda consultarla.',
              ],
              [
                'Acompañá el progreso',
                'Revisá sesiones, sensaciones y resultados de evaluaciones.',
              ],
            ].map(([title, description], i) => (
              <article key={title}>
                <span className="nx-step-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="nx-access-note">
            <ShieldCheck size={18} />
            <p>¿Ya tenés una cuenta habilitada? Tu próximo paso está listo.</p>
            <a href={firstAccessUrl}>
              Primer ingreso <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
        <section id="beneficios" className="nx-benefits">
          <div className="nx-container nx-benefits-layout">
            <div>
              <span className="nx-eyebrow">
                04 / MÁS FOCO EN LO QUE IMPORTA
              </span>
              <h2>
                Más contexto.
                <br />
                Mejores conversaciones.
                <br />
                <span>Más cerca.</span>
              </h2>
              <p>
                La tecnología no reemplaza tu criterio profesional. Te ayuda a
                tener la información a mano para aplicarlo.
              </p>
              <CTA light>Entrar a mi espacio</CTA>
            </div>
            <div className="nx-benefit-list">
              {[
                [
                  'Una sola fuente de consulta',
                  'Fichas, rutinas y evaluaciones reunidas para encontrar el contexto sin saltar entre archivos.',
                ],
                [
                  'Menos carga repetitiva',
                  'La importación de deportistas facilita trasladar la información que ya tenés.',
                ],
                [
                  'Continuidad en el seguimiento',
                  'Las versiones y el historial permiten consultar el trabajo realizado aunque el plan cambie.',
                ],
                [
                  'Conexión fuera del entrenamiento',
                  'El registro móvil acerca el esfuerzo y las molestias de cada sesión a tu espacio de trabajo.',
                ],
              ].map(([title, description]) => (
                <article key={title}>
                  <Check size={19} />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="nosotros" className="nx-section nx-container nx-about">
          <div>
            <span className="nx-eyebrow">
              05 / EL PROPÓSITO QUE NOS CONECTA
            </span>
            <h2>
              Detrás de cada plan,
              <br />
              hay una persona.
            </h2>
          </div>
          <div>
            <p className="nx-about-lead">
              Nexo conecta la planificación del preparador físico con la
              experiencia cotidiana del deportista.
            </p>
            <p>
              Un espacio multideporte donde organizar el trabajo, consultar lo
              que ocurrió y acompañar el proceso con información en contexto.
            </p>
            <div className="nx-editor-note">
              <strong>Información institucional pendiente</strong>
              <p>
                La presentación del equipo, el origen del proyecto, su misión,
                visión y valores están pendientes de validación por sus
                responsables.
              </p>
            </div>
          </div>
        </section>
        <section id="preguntas" className="nx-section nx-faq-section">
          <div className="nx-container nx-faq-layout">
            <div>
              <span className="nx-eyebrow">06 / ANTES DE EMPEZAR</span>
              <h2>
                Conversemos
                <br />
                con claridad.
              </h2>
              <p>Lo que necesitás saber sobre Nexo.</p>
              <a className="nx-text-link" href="#contacto">
                Ir a contacto <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="nx-faq">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <ChevronDown size={18} />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="contacto" className="nx-section nx-container nx-contact">
          <div>
            <span className="nx-eyebrow">07 / SIGAMOS CONECTADOS</span>
            <h2>
              El próximo paso
              <br />
              empieza con una charla.
            </h2>
            <p>
              ¿Tenés una consulta sobre el producto o su acceso? Este será el
              espacio para acercarla al equipo.
            </p>
            <div className="nx-contact-info">
              <MessageSquare size={20} />
              <span>
                Canal de contacto en preparación.
                <br />
                No hay redes ni canales públicos verificados.
              </span>
            </div>
          </div>
          <ContactForm />
        </section>
        <section className="nx-final nx-container">
          <span className="nx-eyebrow">
            EL RENDIMIENTO SE CONSTRUYE EN EQUIPO
          </span>
          <h2>
            Tu trabajo hace la diferencia.
            <br />
            <span>Conectalo con Nexo.</span>
          </h2>
          <p>Tu planificación y tus deportistas, en un mismo espacio.</p>
          <CTA>Acceder a la aplicación</CTA>
          <small>Acceso para cuentas previamente habilitadas.</small>
        </section>
      </main>
      <footer className="nx-footer nx-container">
        <div className="nx-footer-top">
          <div>
            <a href="#inicio" aria-label="Nexo, volver al inicio">
              <Brand />
            </a>
            <p>
              Planificación, seguimiento y evaluación.
              <br />
              Rendimiento deportivo, conectado.
            </p>
          </div>
          <nav aria-label="Navegación del pie">
            {links.slice(1).map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nx-legal">
            <strong>Información legal</strong>
            <span>Política de privacidad: pendiente de publicación.</span>
            <span>Términos y condiciones: pendientes de publicación.</span>
          </div>
        </div>
        <div className="nx-footer-bottom">
          <span>
            © {new Date().getFullYear()} Nexo. Todos los derechos reservados.
          </span>
          <span>
            El punto de encuentro del rendimiento <Link2 size={14} />
          </span>
        </div>
      </footer>
    </div>
  );
}

