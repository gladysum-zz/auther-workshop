import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';


/* ------------   ACTION CREATORS     ------------------ */

const login = user => ({ type: SET_CURRENT_USER, user });


/* ------------       REDUCER     ------------------ */

export default function reducer (user = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      return action.user;

    default:
      return user;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const loginUser = (email, password) => dispatch => {
  const user = {email: email, password: password};

  axios.post('/api/login', user)
    .then(res => {
      if (res.status === 200) dispatch(login(user));
      else console.log('Login unsuccessful');
    })
    .catch(err => console.error('Login went wrong..', err))
}
