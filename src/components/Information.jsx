import { Fragment } from "react";
import "../index.css";
function Information(props) {
    const {shopName,adresse,managerSurname,managerName}=props
  return (
    <Fragment>
      <div className="flex-column">
        <label htmlFor="">
          <strong>Nom etablissement:</strong>
        </label>
        <label htmlFor="" style={{ display: "block", maxWidth: "10rem" }}>
          {shopName}
        </label>
      </div>
      <div className="flex-column">
        <label htmlFor="">
          <strong>Adresse:</strong>
        </label>
        <label htmlFor="" style={{ display: "block", maxWidth: "10rem" }}>
          {adresse}
        </label>
      </div>
      <div className="flex-column">
        <label htmlFor="">
          <strong>Nom/Prenom Gerant:</strong>
        </label>
        <label htmlFor="" style={{ display: "block", maxWidth: "10rem" }}>
          {managerSurname} {managerName}
        </label>
      </div>
    </Fragment>
  );
}

export default Information;
