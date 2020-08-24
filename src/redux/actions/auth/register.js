import axios from 'axios'
import { push } from 'connected-react-router'
import ReactGA from 'react-ga'

import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from '../types'

const register = (body = {}) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_START })

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        body
      )

      dispatch({ type: REGISTER_SUCCESS, payload: response.data.data })

      ReactGA.event({ category: 'User', action: 'Register new account' })

      dispatch(push('/login'))
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error
      })
    }
  }
}

export default register
