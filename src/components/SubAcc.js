import React from 'react';
import PropTypes from 'prop-types';

const SubAcc = (props) => {
  const showCard = props.data.map((e,i) => {
    return (
      <a href={e.link} rel='noreferrer' target='_blank' className="card" key={i}>{e.desc}</a>
    );
  }); 
  return (
    <>
        <div className="subName">{props.subName}</div>
        <div className="cards">
            {showCard}
        </div>
    </>
  )
}

SubAcc.propTypes = {
    subName : PropTypes.string.isRequired,
}

export default SubAcc;