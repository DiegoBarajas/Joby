import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import axios from 'axios'

const Handler = {}
const backend = 'http://localhost:8080/'

Handler.get = async(route) => {
    axios.get(backend+route)
        .then(data => {

            console.log(data);

            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })

        }).catch(err => {

            console.error(err)

            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        });
}

export default Handler;