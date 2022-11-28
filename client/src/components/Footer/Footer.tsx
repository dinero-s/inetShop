import React from 'react'
import Logo from '../Logo'
import css from './Footer.module.scss'
type Props = {}

export default function Footer({ }: Props) {
  return (
    <div className={css.footer}>
      <div className={css.infoPannel}>
        <div className={css.columns}>
          <div className={css.footerMenu}>
            <a href="#">Плитка</a>
            <a href="#">Сантехника</a>
            <a href="#">Mебель для ванной</a>
            <a href="#">Электроника и бытовая техника</a>
            <a href="#">Отопление</a>
            <a href="#">Напольное покрытие</a>
          </div>
          <div className={css.footerLogo}>
            <Logo />
          </div>
        </div>
        <div className={css.columns}>
          <div className={css.secondColumnBox}>
            <a href="#">Оплата</a>
            <a href="#">Доставка</a>
            <a href="#">Поставщикам</a>
            <a href="#">Статьи</a>
            <a href="#">Контакты</a>
          </div>
        </div>
        <div className={css.columns}>
          <div className={css.thirdColumnBox}>
            <p>8 495 018-32-10</p>
            <div className={css.button}>ЗАКАЗАТЬ ЗВОНОК</div>
            <div className={css.schedule}>
              <p>Пн-Пт: 10:00 — 20:00</p>
              <p>Сб: 10:00 — 18:00</p>
              <p>Bс: выходной</p>
            </div>
          </div>
          <div className={css.socialNetworks}></div>
        </div>
        <div className={css.columns}>
          <div className={css.fourthColumnBox}>
            <div className={css.adress}>
              <p>Склад:</p>
              <p>Москва, ул. Салтыковская, 6 стр 11</p>
              <a href="#">zakaz@ggpromarket.ru</a>
            </div>
            <div className={css.rateTheStore}></div>
          </div>
        </div>
      </div>
      <div className={css.disclaimer}>
        <div className={css.item}>
          <p>Копирование всех составляющих частей сайта
            в какой бы то ни было форме без письменного
            разрешения владельцев авторских прав запрещено.
            Сайт носит исключительно информационный характер,
            и ни при каких условиях не является публичной офертой,
            определяемой положениями статьи 437(2) Гражданского
            кодекса Российской Федерации.Наличие и цены уточняйте
            у наших операторов.</p>
          <p>Сайт использует технологию cookie. Используя сайт,
            Вы соглашаетесь <a href='#'>с правилами использования cookie</a>
            , а также даете <a href='#'>согласие на обработку персональных данных</a>
          </p>
        </div>
      </div>
    </div>
  )
}