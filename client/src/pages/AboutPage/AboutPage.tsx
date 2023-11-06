import cls from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={cls.AboutPage}>
      <article>
        В нашем магазине вы найдете широкий выбор мерча, посвященного ЛЭТИ. От
        одежды до аксессуаров, мы предлагаем качественные товары с уникальными
        дизайнами, которые отражают дух и идентичность нашего университета. Будь
        то футболка с символикой ЛЭТИ, кружка с логотипом или стильная сумка, у
        нас есть все, чтобы вы могли выразить свою привязанность к ЛЭТИ в любой
        ситуации.
      </article>
      <div>
        <img
          className={cls.image}
          height={300}
          width={300}
          src="https://highstore.ru/image/cache/catalog/mockups/27-SPBLETI/art/hoody-932x1400.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className={cls.image}
          src="https://highstore.ru/image/cache/catalog/mockups/27-SPBLETI/minimal/hoody-932x1400.jpg"
          width={300}
          height={300}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutPage;
