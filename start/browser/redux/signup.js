import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const ADD_CURRENT_USER = 'ADD_CURRENT_USER';


/* ------------   ACTION CREATORS     ------------------ */

const signup = user => ({ type: ADD_CURRENT_USER, user });


/* ------------       REDUCER     ------------------ */

export default function reducer (user = {}, action) {
  switch (action.type) {

    case ADD_CURRENT_USER:
      return action.user;

    default:
      return user;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const signupUser = (email, password) => dispatch => {
  const user = {email: email, password: password};

  axios.post('/api/signup', user)
    .then(res => {
      if (res.status === 201) {
        dispatch (signup(user));
        //dispatch (login(user));
      } else console.log('Signup unsuccessful');
    })
    .catch(err => console.error('Signup went wrong..', err))
}
