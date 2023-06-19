import React from 'react';
import { connect } from 'react-redux';
import { User } from 'phosphor-react';

const AuthorContact = (props) => {
  return (
    <div className='author-contact'>
      {props.user && (
        <div className='item item-margin-top'>
          <div className='avatar-circle'>
            <User size='52' color='white' />
          </div>
          <div className='author-details'>
            <>
              <h3>Имя: {props.user.name}</h3>
            </>
            <>{props.user.phoneNumber ? <h3>Телефон: {props.user.phoneNumber}</h3> : <h3> Почта: {props.user.email}</h3>}</>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.product.product.postedBy,
  };
};
export default connect(mapStateToProps)(AuthorContact);
