import { ButtonMenu } from "@/components/BoutonMenu";
import { PageTitle } from "@/components/PageTitle";
import Link from "next/link";

export default function Collecte() {

    return (
      <>
        
        <PageTitle title="Collectes" />

        <ButtonMenu />

        <div className="row">
            <div className="col-sm-12">
                <div className="card elevation-3">
                    <div className="card-body table-responsive">
                        <style>
                          {/* td {
                              white-space: nowrap;
                          } */}
                        </style>
                        <table id="table-collecte" className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Indicateur ID</th>
                                    <th scope="col">Indicateur</th>
                                    <th scope="col">Fréquence</th>
                                    <th scope="col">Zone de référence</th>
                                    <th scope="col">Unité de mesure</th>
                                    <th scope="col">2019</th>
                                    <th scope="col">2020</th>
                                    <th scope="col">2021</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="addModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-info">
                        <h4 className="modal-title">Nouvelle collecte</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="text-white" aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="addForm">
                        <div className="modal-body mt-3">
                            <div className="form-group">
                                <label htmlFor="code">Indicateur</label>
                                <select name="indicateur_id" id="indicateur_id" className="custom-select">
                                    <option value=""></option>
                                    
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="frequence">Fréquence</label>
                                <input type="text" className="form-control" name="values[frequence]" id="frequence" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zone_reference">Zone de référence</label>
                                <input type="text" className="form-control" name="values[zone_reference]" id="zone_reference" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="unite_mesure">Unité de mesure</label>
                                <input type="text" className="form-control" name="values[unite_mesure]" id="unite_mesure" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="valeur_annee_2019">Valeur 2019</label>
                                <input type="text" className="form-control" name="values[valeur_annee_2019]" id="valeur_annee_2019" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="valeur_annee_2020">Valeur 2020</label>
                                <input type="text" className="form-control" name="values[valeur_annee_2020]" id="valeur_annee_2020" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="valeur_annee_2021">Valeur 2021</label>
                                <input type="text" className="form-control" name="values[valeur_annee_2021]" id="valeur_annee_2021" required />
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button id="saveBtn" className="btn btn-block font-weight-bold btn-info">Valider</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
      </>
    )
  }