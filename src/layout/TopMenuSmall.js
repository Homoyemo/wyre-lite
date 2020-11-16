/* eslint-disable prettier/prettier */
import React, { useLayoutEffect } from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { TopMenuStyle } from './style';


const TopMenuSmall = () => {
    const { path } = useRouteMatch();

  useLayoutEffect(() => {
    const active = document.querySelector('.strikingDash-top-menu a.active');
    const activeDefault = () => {
      const megaMenu = active.closest('.megaMenu-wrapper');
      const hasSubMenuLeft = active.closest('.has-subMenu-left');
      if (!megaMenu) {
        active.closest('ul').previousSibling.classList.add('active');
        if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
      } else {
        active.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
      }
    };
    window.addEventListener('load', active && activeDefault);
    return () => window.removeEventListener('load', activeDefault);
  }, []);

  const addParentActive = event => {
    document.querySelectorAll('.parent').forEach(element => {
      element.classList.remove('active');
    });

    const hasSubMenuLeft = event.currentTarget.closest('.has-subMenu-left');
    const megaMenu = event.currentTarget.closest('.megaMenu-wrapper');
    if (!megaMenu) {
      event.currentTarget.closest('ul').previousSibling.classList.add('active');
      if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
    } else {
      event.currentTarget.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
    }
  };

    return (
        <TopMenuStyle>
            <div className="strikingDash-top-menu topMenuSmall">
                <ul className="topMenuHead">
                <li className="has-subMenu">
                    <Link to="#" className="parent topMenuSub">
                    Dashboard
                    </Link>
                    <ul className="subMenu">
                    <li>
                        <NavLink to={`${path}/social`} onClick={addParentActive}>
                        Social Media
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${path}/business`} onClick={addParentActive}>
                        Business
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${path}/performance`} onClick={addParentActive}>
                        Site Perfomence
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${path}/eco`} onClick={addParentActive}>
                        Ecomerce
                        </NavLink>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link to="#" className="parent topMenuSub">
                    Score Card
                    </Link>
                </li>
                <li className="mega-item has-subMenu">
                    <Link to="#" className="parent topMenuSub">
                    Parameters
                    </Link>
                    <ul className="megaMenu-wrapper megaMenu-small">
                    <li>
                        <ul>
                        <li>
                            <NavLink onClick={addParentActive} to={`${path}/pages/dataTable`}>
                            User Table
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={addParentActive} to={`${path}/pages/gallery`}>
                            Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={addParentActive} to={`${path}/pages/pricing`}>
                            Pricing
                            </NavLink>
                        </li>
                        </ul>
                </li>
                </ul>
                </li>
                <li>
                    <Link to="#" className="parent topMenuSub">
                    Report
                    </Link>
                </li>

                <li>
                    <Link to="#" className="parent topMenuSub">
                    Cost Tracker
                    </Link>
                </li>

                <li>
                    <Link to="#" className="parent topMenuSub">
                    Billing
                    </Link>
                </li>

                <li>
                    <Link to="#" className="parent topMenuSub">
                    Messages
                    </Link>
                </li>






                </ul>
            </div>
        </TopMenuStyle>
  );
};

export default TopMenuSmall;