import cls from "./About.module.css"
export const AboutPages = () => {
    return (
        <div className={cls.generalAboutPage}>
            <div>
                <p className={cls.textAbout}>
                    В нашем магазине вы найдете широкий выбор мерча, посвященного ЛЭТИ. От одежды до аксессуаров, мы предлагаем качественные товары с уникальными дизайнами, которые отражают дух и идентичность нашего университета. Будь то футболка с символикой ЛЭТИ, кружка с логотипом или стильная сумка, у нас есть все, чтобы вы могли выразить свою привязанность к ЛЭТИ в любой ситуации.
                </p>
                <img className={cls.imgAboutPage} src="https://highstore.ru/image/cache/catalog/mockups/27-SPBLETI/minimal/hoody-932x1400.jpg" alt=""/>
            </div>
            <div>
                <img className={cls.imgAboutPage} src="https://b.itemimg.com/i/298683961.0.jpg" alt=""/>
                <p className={cls.textAbout}>
                    Нашим главным приоритетом является удовлетворение потребностей наших клиентов. Мы постоянно работаем над улучшением нашего сервиса и предлагаем вам надежность и оперативность в обслуживании. Если у вас возникнут вопросы или пожелания, наша дружелюбная команда всегда готова помочь вам.
                </p>
            </div>
        </div>
    );
};