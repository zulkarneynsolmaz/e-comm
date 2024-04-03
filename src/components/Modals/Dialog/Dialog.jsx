import "./Dialog.css";
import PropTypes from "prop-types";

const Dialog = ({ isDialogShow, setIsDialogShow }) => {
  const handleCloseDialog = (Event) => {
    console.log(Event.target.checked);
  }
  return (
    <div className={`modal-dialog ${isDialogShow ? "show" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={() => setIsDialogShow(false)}>
          <i className="bi bi-x"></i>
        </button>
        <div className="modal-image">
          <img src="/imgimg/modal-dialog.jpg" alt="" />
        </div>
        <div className="popup-wrapper">
          <div className="popup-content">
            <div className="popup-title">
              <h3>HABER BÜLTENİ</h3>
            </div>
            <p className="popup-text">
            Bültenimize kaydolun ve başka hiçbir yerde bulamayacağınız özel fırsatları doğrudan gelen kutunuza alın!            </p>
            <form className="popup-form">
              <input type="text" placeholder="E-posta Adresinizi Buraya Girin" />
              <button className="btn btn-primary">ABONE OL</button>
              <label>
                <input type="checkbox" onChange={handleCloseDialog}/>
                <span>Bu açılır pencereyi bir daha gösterme</span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-overlay" onClick={() => setIsDialogShow(false)}></div>
    </div>
  );
};

export default Dialog;

Dialog.propTypes = {
  isDialogShow: PropTypes.bool,
  setIsDialogShow: PropTypes.func,
};
