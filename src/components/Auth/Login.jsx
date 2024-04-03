
const Login = () => {
  return (
    <div className="account-column">
    <h2>Giriş</h2>
    <form>
        <div>
            <label>
                <span>Kullanıcı adı veya e-posta adresi <span className="required">*</span></span>
                <input type="text" />
            </label>
        </div>
        <div>
            <label>
                <span>Şifre <span className="required">*</span></span>
                <input type="password" />
            </label>
        </div>
        <p className="remember">
            <label>
                <input type="checkbox" />
                <span>Hatırla beni</span>
            </label>
            <button className="btn btn-sm">Giriş</button>
        </p>
        <a href="#" className="form-link">Şifrenizi mi kaybettiniz mi?</a>
    </form>
</div>
  )
}

export default Login
