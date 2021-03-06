import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import cx from 'classnames';
import {
  BtnContainer,
  Typography as t,
  Modifiers as m
} from '@appearhere/bloom';

import css from './Scaffold.module.css';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const listTypes = {
  ordered: 'o',
  unordered: 'u',
};

export const h1 = cx(css.h1, t.fontLargeIv);
export const h2 = cx(css.h2, t.fontLargeIii);
export const h3 = cx(css.h3, t.fontLargeIi);
export const h4 = cx(css.h4, t.fontLargeI);
export const body = cx(css.body, t.fontRegular);
export const section = m.mtLgIii;
export const code = cx(css.code, t.fontCode);
export const link = cx(css.link, t.fontRegular);
export const list = css.list;
export const descriptionList = css.descriptionList;
export const note = css.note;

export const H = ({ level, className, children }) => createElement(
  `h${level}`,
  {
    className: cx(
      level === 1 ? h1 : null,
      level === 2 ? h2 : null,
      level === 3 ? h3 : null,
      level === 4 ? h4 : null,
      className,
    ),
  },
  children,
);

export const T = ({ elm, className, children }) => createElement(
  elm,
  {
    className: cx(body, className),
  },
  children
);

export const D = ({ className, children }) => (
  <div className={cx(section, className)}>
    { children }
  </div>
);

export const C = ({ className, children }) => (
  <code className={cx(code, className)}>{ children }</code>
);

export const A = ({ className, children, ...rest }) => (
  <a {...rest} className={cx(link, className)}>{ children }</a>
);

export const List = ({ className, children, type, ...rest }) => createElement(
  `${listTypes[type]}l`,
  {
    className: cx(
      list,
      className
    ),
    ...rest,
  },
  children,
);

export const Dl = ({ className, children, ...rest }) => (
  <dl {...rest} className={cx(descriptionList, className)}>
    { children }
  </dl>
);

export const Note = ({ className, children, ...rest }) => (
  <div {...rest} className={cx(note, className)}>
    <div className={cx(css.noteHeading, t.fontSmI)}>Note</div>
    { children }
  </div>
);

export const Placeholder = ({ className, children, onClick, ...rest }) => (
  <BtnContainer
    {...rest}
    className={cx(css.placeholder, t.fontCode, className)}
    onClick={onClick}
  >
    { children }
  </BtnContainer>
);

export const Bq = ({ className, children, citation, ...rest }) => (
  <div>
    <blockquote
      {...rest}
      className={cx(
        css.blockquote,
        className,
      )}
    >
      { children }
    </blockquote>
    <cite>{ citation }</cite>
  </div>
);

H.propTypes = {
  ...propTypes,
  level: PropTypes.number,
};

T.propTypes = {
  ...propTypes,
  elm: PropTypes.string,
};

Bq.propTypes = {
  ...propTypes,
  citation: PropTypes.node,
};

List.propTypes = {
  ...propTypes,
  type: PropTypes.oneOf(['ordered', 'unordered']).isRequired,
};

C.propTypes = propTypes;
A.propTypes = propTypes;
D.propTypes = propTypes;
Dl.propTypes = propTypes;
Note.propTypes = propTypes;

Placeholder.propTypes = {
  ...propTypes,
  onClick: PropTypes.func,
};

H.defaultProps = {
  level: 1,
};

T.defaultProps = {
  elm: 'span',
};

Placeholder.defaultProps = {
  onClick: () => {},
};
