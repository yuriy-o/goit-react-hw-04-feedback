import PropTypes from 'prop-types';

export const TitleCase = str => {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
};

TitleCase.propTypes = {
  str: PropTypes.string,
};

//! Функція робить назву рядка (кнопки) з великої літери
//! Умова => /(^)\S/g <== підіймає літеру тільки першого слова
//! Пояснення тут
//! https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-title-case-a-sentence/16088
