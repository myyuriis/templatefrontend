import React, {Component} from 'react';
import axios from 'axios';

class GetAllReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'accountmanagement/allreviews',
      errorMsg: '',

      listReviews: []
      // Gunakan listUsers[i] untuk mengakses masing2 objek user di dalam list.
      // Indeks listUsers[i] dimulai dari nol.
      // Di dalam objek user terdapat atribut seperti email, fullname, dll.
      // Atribut di dalam objek user dapat diakses menggunakan titik
      // Contoh: "listUsers[0].fullname"
    }
  }

  componentDidMount() {
    axios.get(`${this.state.url}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          listReviews: response.data.response
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error fetching data'})
      })
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default GetAllReviews;
