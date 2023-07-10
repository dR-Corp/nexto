import { ButtonMenu } from "@/components/BoutonMenu";
import { CategorieRow } from "@/components/CategorieRow";
import { PageTitle } from "@/components/PageTitle";
import { prisma } from "@/db";
// import Link from "next/link";
import { redirect } from "next/navigation";

function getCategories() {
  return prisma.categorie.findMany()
}

async function createCategorie(data: FormData) {
  "use server"

  const code = data.get("code")?.valueOf()
  const description = data.get("description")?.valueOf()
  if (typeof code === "string" && code.length > 0 && typeof description === "string") {
      await prisma.categorie.create({ data: { code, description } }) 
  }
  else {
      console.log("Invalid code");
  }

  redirect("./categorie")
}

async function deleteCategorie(id: string) {
  "use server"

  console.log("ID",id);
    
  await prisma.categorie.delete({ where: { id } })

}

export default async function Categorie() {

    const categories = await getCategories() 
  
    // await prisma.categorie.create({data: {code: "COP", description: "Conditions physiques"}})

    return (
      <>
        
        <PageTitle title="Catégories" />

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
                        <table id="table-categorie" className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">N°</th>
                                    <th scope="col">Code</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                              {categories.map((categorie, index) => (
                                <CategorieRow key={categorie.id} num={index} {...categorie} deleteCategorie={deleteCategorie} />
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
                        <h4 className="modal-title">Nouvelle catégorie</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="text-white" aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form action={createCategorie} id="addForm">
                        <div className="modal-body mt-3">
                            <div className="form-group">
                                <label htmlFor="code">Code</label>
                                <input type="text" className="form-control" name="code" id="code" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="description" className="form-control"></textarea>
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