
const Register = () => {
  return (
    <div className="account-column">
                    <h2>Kayıt Olun</h2>
                    <form>
                        <div>
                            <label>
                                <span>Kullanıcı Adı <span className="required">*</span></span>
                                <input type="text" />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>E-posta adresi <span className="required">*</span></span>
                                <input type="email" />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Password <span className="required">*</span></span>
                                <input type="password" />
                            </label>
                        </div>
                        <div className="privacy-policy-text remember">
                            <p>
                            Kişisel verileriniz, bu web sitesindeki deneyiminizi desteklemek için aşağıdaki amaçlarla kullanılacaktır
                                hesabınıza erişimi yönetmek ve diğer amaçlar için <a
                                    href="#">gi̇zli̇li̇k poli̇ti̇kasi.</a>
                            </p>
                            <button className="btn btn-sm">Kayıt Olun</button>
                        </div>

                    </form>
                </div>
  )
}

export default Register
