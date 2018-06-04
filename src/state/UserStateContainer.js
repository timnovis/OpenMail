import { Container } from 'unstated';
import http from '../helpers/http';

class UserStateContainer extends Container {
  // constructor() {
  //   super();

  //   if (window.localStorage.getItem('emailAddress')) {
  //     this.setState({
  //       emailAddress: window.localStorage.getItem('emailAddress'),
  //     });
  //   }
  // }
  state = {
    error: null,
    emailAddress: '',
    isLoggingIn: false,
  };
  login = async (e, history, emailAddress, password) => {
    e ? e.preventDefault() : null;

    try {
      this.setState({
        isLoggingIn: true,
      });
      const loginRes = await http.post('/auth/login', {
        emailAddress: emailAddress,
        password: password,
      });

      const data = await loginRes.json();

      if (!data.success) {
        throw new Error(data.error);
      }

      window.localStorage.setItem('jwt', data.token);
      window.localStorage.setItem('emailAddress', emailAddress);

      setTimeout(() => {
        this.setState({
          error: null,
          emailAddress: emailAddress,
        });
        history.push('/');
      }, 1000);
    } catch (e) {
      this.setState({
        isLoggingIn: false,
        error: e.toString().slice(7),
      });
    }
  };
}

export default UserStateContainer;
