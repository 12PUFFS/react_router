export default function Loading({ setActive, active }) {
  return (
    <div className="wrapper container">
      <div className="filters">тут фильтры</div>
      <div className="list">
        <div className="indiv">
          <input type="text" placeholder="Что ищем?" />
          <p
            onClick={() => setActive('all')}
            className={`f ${active === 'all' ? 'active' : ''}`}
          >
            все
          </p>
          <p
            onClick={() => setActive('hits')}
            className={`f ${active === 'hits' ? 'active' : ''}`}
          >
            хиты
          </p>
          <p
            onClick={() => setActive('new')}
            className={`f ${active === 'new' ? 'active' : ''}`}
          >
            новое
          </p>
        </div>
        <div className="loading">идёт загрука...</div>;
      </div>
    </div>
  );
}
