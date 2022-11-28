import React from 'react'
import Logo from '../Logo'
import css from './Header.module.scss'


type Props = {}

export default function Header({ }: Props) {
  return (
    <div className={css.header}>
      <div className={css.logoBar}>
        <Logo />
        <div className={css.location}>
          <p>Москва</p>
        </div>
        <div className={css.phoneNumber}>
          <p>8 495 018-32-10</p>
          <a href="#">Заказать звонок</a>
        </div>
        <div className={css.menu}>
          <a href="#">Оплата</a>
          <a href="#">Доставка</a>
          <a href="#">Поставщикам</a>
          <a href="#">Статьи</a>
          <a href="#">Контакты</a>
        </div>
      </div>
      <div className={css.navBar}>
        <div className={css.catalogWithHumburger}>КАТАЛОГ ТОВАРОВ</div>
        <div className={css.stocks}>AКЦИИ</div>
        <div className={css.brands}>БРЕНДЫ</div>
        <div className={css.input}>
          <form>
            <input type="text" value="Что вы ищете?"/>
          </form>
          <div className={css.search}></div>
        </div>
        <div className={css.userArea}></div>
      </div>
    </div>
  )
}