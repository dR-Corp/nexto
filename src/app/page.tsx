import { PageTitle } from "@/components/PageTitle"
import { prisma } from "@/db"
import Link from "next/link"


export default async function Home() {
  
  return (
    <>

      <PageTitle title="Dashboard" />

      <div className="row">
          
          <div className="col-lg-3 col-6">
              
              <div className="small-box bg-white">
                  <div className="inner">
                      <h3>0</h3>

                      <p className="font-weight-bold">Catégories</p>
                  </div>
                  <div className="icon">
                      <i className="fas fa-th"></i>
                  </div>
                  <a className="small-box-footer bg-info"></a>
              </div>
          </div>
          
          <div className="col-lg-3 col-6">
              
              <div className="small-box bg-white">
                  <div className="inner">
                      <h3>0</h3>

                      <p className="font-weight-bold">Sous catégories</p>
                  </div>
                  <div className="icon">
                      <i className="fas fa-code-branch"></i>
                  </div>
                  <a className="small-box-footer bg-info"></a>
              </div>
          </div>
          
          <div className="col-lg-3 col-6">
              
              <div className="small-box bg-white">
                  <div className="inner">
                      <h3>0</h3>

                      <p className="font-weight-bold">Indicateurs</p>
                  </div>
                  <div className="icon">
                      <i className="fas fa-chart-line"></i>
                  </div>
                  <a className="small-box-footer bg-info"></a>
              </div>
          </div>
          
          <div className="col-lg-3 col-6">
              
              <div className="small-box bg-white">
                  <div className="inner">
                      <h3>0</h3>

                      <p className="font-weight-bold">Données collectées</p>
                  </div>
                  <div className="icon">
                      <i className="fas fa-database"></i>
                  </div>
                  <a className="small-box-footer bg-info"></a>
              </div>
          </div>
          
      </div>
  
    </>
  )
}
