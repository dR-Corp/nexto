import { ButtonMenu } from "@/components/BoutonMenu";
import { PageTitle } from "@/components/PageTitle";
import { ScategorieRow } from "@/components/ScategorieRow";
import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation"

function getCategories () {
    return prisma.categorie.findMany()
}
function getCategorie (id: string) {
    return prisma.categorie.findUnique({ where: { id } })
}
function getScategories () {
    return prisma.scategorie.findMany()
}

async function deleteScategorie(id: string) {
    "use server"
      
    await prisma.scategorie.delete({ where: { id } })
  
}

export default async function Scategorie() {
    
    const categories = await getCategories() 
    const scategories = await getScategories()
    
    // await prisma.scategorie.create({data: {code: "COP_ACM", categorieId: "83d26e74-6164-4bf3-a7ca-66b07d8f41c0", local: "N", description: "Atmosphère, climat et conditions météorologiques"}})
    console.log(scategories);

    return (
      <>
        
        <PageTitle title="Sous catégories" />

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
                        <table id="table-sous-categorie" className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Code</th>
                                    <th scope="col">Categorie</th>
                                    <th scope="col">Locale</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scategories.map((scategorie, index) => (
                                    <ScategorieRow key={scategorie.id} num={index} {...scategorie} deleteScategorie={deleteScategorie} />
                                ))}
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
                        <h4 className="modal-title">Nouvelle sous catégorie</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="text-white" aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form id="addForm">
                        <div className="modal-body mt-3">
                            <div className="form-group">
                                <label htmlFor="code">Catégorie</label>
                                <select name="categorieId" id="categorieId" className="custom-select">
                                    <option value=""></option>
                                    {categories.map(categorie => (
                                        <option key={categorie.id} value={categorie.id}>{categorie.code} - {categorie.description}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="code">Code</label>
                                <input type="text" className="form-control" name="code" id="code" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="locale">Locale</label>
                                <input type="text" className="form-control" name="local" id="locale" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="description"
                                    className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button id="saveBtn" className="btn btn-block font-weight-bold btn-info">Valider</button>
                        </div>
                    </form>
                </div>
                
            </div>
            
        </div>
        
      </>
    )
  }