import { ButtonMenu } from "@/components/BoutonMenu";
import { PageTitle } from "@/components/PageTitle";
import Link from "next/link";

export default function Indicateur() {

    return (
      <>
        
        <PageTitle title="Indicateurs" />

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
                        <table id="table-indicateur" className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Code</th>
                                    <th scope="col">Sous categorie ID</th>
                                    <th scope="col">Sous categorie</th>
                                    <th scope="col">Locale</th>
                                    <th scope="col">Description</th>
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
                        <h4 className="modal-title">Nouvel indicateur</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="text-white" aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="addForm">
                        <div className="modal-body mt-3">
                            <div className="form-group">
                                <label htmlFor="code">Sous catégorie</label>
                                <select name="sous_categorie_id" id="sous_categorie_id" className="custom-select">
                                    <option value=""></option>
                                    
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="code">Code</label>
                                <input type="text" className="form-control" name="values[code]" id="code" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="locale">Locale</label>
                                <input type="text" className="form-control" name="values[locale]" id="locale" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea name="values[description]" id="description"
                                    className="form-control"></textarea>
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