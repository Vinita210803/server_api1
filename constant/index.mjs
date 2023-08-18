const API_BASE_URL='/api'

const CONSTANT ={
    user : {
        add : `${API_BASE_URL}/user/add`,
        read : `${API_BASE_URL}/user/read`,
        login : `${API_BASE_URL}/user/login`,
        updateRole : `${API_BASE_URL}/user/updateRole/:id`,
    }
}
export default CONSTANT